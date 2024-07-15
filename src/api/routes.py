"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#<------ Start of login/singup/user routes ------>
@api.route('/user/<int:id>', methods=['GET'])
def search_user(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"error": "Product not found", "id": id}),404

@api.route('/sign-up', methods=['POST'])
def handle_sign_up():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}),400
    
    access_token = create_access_token(identity=email)
    user = User(email=email, password=password, is_active=True)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created successfully", "token": access_token, "user": email}), 201

@api.route('/log-in', methods=['POST'])
def handle_log_in():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    user = User.query.filter_by(email=email).first()
    if not user or user.password != password:
        return jsonify({"error": "Bad email or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify({"message": "Log-in successfull", "token": access_token, "user": email}), 201

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted successfully"}), 200
#<------ End of login/singup routes ------>

#<------ Start of product routes ------>
@api.route('/products', methods=['GET'])
def get_products():
    get_products = Product.query.all()
    return jsonify([product.serialize() for product in get_products]), 200

@api.route('/products/<int:id>', methods=['GET'])
def single_product(id):
    product = Product.query.get(id)
    if product:
        return jsonify(product.serialize()), 200
    else:
        return jsonify({"error": "Product not found", "id": id}), 404

@api.route('/product', methods=['POST'])
def new_product():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}, 400)
    
    name = data.get('name')
    cost = data.get('cost')
    rating = data.get('rating')
    ratingVotes = data.get('ratingVotes')
    category = data.get('category')
    amount = data.get('amount')
    productFor = data.get('productFor')
    if not name or not cost or not productFor:
        return jsonify({"error": "Not enough data to make a new product"}), 400
    
    if Product.query.filter_by(name=name).first():
        return jsonify({"error": "Product already created"}), 400
    
    product = Product(name=name, cost=cost, rating=rating, ratingVotes=ratingVotes, category=category, amount=amount, productFor=productFor)
    db.session.add(product)
    db.session.commit()

    return jsonify({"message": "Product created successfully", "name": name}), 201
#<------ End of product routes ------>