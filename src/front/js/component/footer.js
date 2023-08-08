import React, { Component } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container-fluid fauxFooter">
		<div className="row">
			<div className="col-3 mt-3">
				<span className="fs-3"><FaLocationArrow className="me-1" />Ubícanos</span> <br />
				<span>Aqui ira el google maps (si no, se usara una imagen de stock)</span>
			</div>
			<div className="col-3 mt-3">
				<span>Faux Atelier</span>
				<ul>
					<li><Link to="/" className="enlace text-secondary" >Tiendas</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Blog</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Contacto</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Politicas de privacidad</Link></li>
				</ul>
			</div>
			<div className="col-3 mt-3">
				<span>Información</span>
				<ul>
					<li><Link to="/" className="enlace text-secondary" >Preguntas frecuentes</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Despachos</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Retiro en tienda</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Políticas de Pago</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Términos y condiciones</Link></li>
					<li><Link to="/" className="enlace text-secondary" >Sigue tu pedido</Link></li>
				</ul>
			</div>
			<div className="col-3 mt-4">
				<img src="https://surfwear.sooruz.com/webshop/img/paypal-logo.png" className="img-fluid rounded" />
			</div>
		</div>
	</div>
);
