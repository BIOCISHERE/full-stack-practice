from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    adress = db.Column(db.String(120), unique=False, nullable=False)
    apartment = db.Column(db.String(120), unique=False, nullable=False)
    country = db.Column(db.String(80), unique=False, nullable=False)
    state = db.Column(db.String(80), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
    postal = db.Column(db.Integer, unique=False, nullable=False) 
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "adress": self.adress,
            "apartment": self.apartment,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "postal": self.postal
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    __tablename__ = 'Product'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=False)
    ratingVotes = db.Column(db.Integer, unique=False, nullable=False)
    category = db.Column(db.Integer, unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    productFor = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<Product {self.name}'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "cost": self.cost,
            "rating": self.rating,
            "ratingVotes": self.ratingVotes,
            "category": self.category,
            "amount": self.amount,
            "productFor": self.productFor
        }