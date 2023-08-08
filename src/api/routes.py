"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/users', methods=['GET'])
def get_users():
    data = User.query.all()
    all_users = list(map(lambda x: x.serialize(), data))

    return jsonify(all_users), 200


@api.route('signup', methods=['POST'])
def create_user():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    name = data.get("name")
    lastname = data.get("lastname")
    email = data.get("email")
    password = data.get("password")

    if not name or not lastname or not email or not password:
        return jsonify({"error": "name, lastname, email or password are required"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "email already exits"}), 400

    user = User(name=name, lastname=lastname, email=email,
                password=password, is_active=True)
    db.session.add(user)
    db.session.commit()

    user_email = email

    return jsonify({"msg": "User created successfully", "user": user_email}), 201
