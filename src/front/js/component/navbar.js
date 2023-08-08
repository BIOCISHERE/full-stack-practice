import React from "react";
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"
import { BiSolidDiscount } from "react-icons/bi";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fauxColor">
			<div className="container-fluid">
				<Link className="navbar-brand text-light" to="/">
					<img src="https://cdn.discordapp.com/attachments/1095108532875051098/1095455514319659040/20230411_170848_0000.png" alt="Logo" className="d-inline-block align-text-center rounded me-2" style={{ width: "40px", height: "40px" }} />
					Faux Atelier
				</Link>
				<button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-light"><FaListUl /></span>
				</button>
				<div className="collapse navbar-collapse text-center" id="navbarNav">
					<div className="container-fluid">
						<div className="row">
							<div className="col text-start">
								<ul className="navbar-nav d-inline-flex align-text-center">
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/hombre">Hombre</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/mujer">Mujer</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/calzado">Calzado</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/ofertas"><BiSolidDiscount className="me-1 mb-1 fs-4" />Ofertas</Link>
									</li>
								</ul>
							</div>
							<div className="col text-end">
								<ul className="navbar-nav d-inline-flex align-text-center">
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle text-light test" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<FaUserCircle className="me-1 mb-1" />
											Cuenta
										</a>
										<ul className="dropdown-menu">
											<li><Link className="dropdown-item" to="/sign-up">Sign-up</Link></li>
											<li><Link className="dropdown-item" to="/login">Login</Link></li>
											<li><hr className="dropdown-divider" /></li>
											<li><a className="dropdown-item" href="#">Something else here</a></li>
										</ul>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/"><FaHeart className="me-1 mb-1" />Favoritos</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link text-light test" to="/"><FaCartPlus className="me-1 mb-1" />Carrito</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
