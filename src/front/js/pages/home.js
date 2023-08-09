import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-3">
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ "height": "350px" }} >
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner border border-dark" style={{ "height": "350px" }} >
					<div className="carousel-item active">
						<img src="https://media.istockphoto.com/id/1127387722/es/vector/colecci%C3%B3n-de-ropa-etiquetas-tama%C3%B1o-aisladas-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg?s=1024x1024&w=is&k=20&c=UcbX6cx2R6f15CPbXOaXuph78bJU_K_XIA9BT2x6pnE=" className="img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="https://media.istockphoto.com/id/1127387722/es/vector/colecci%C3%B3n-de-ropa-etiquetas-tama%C3%B1o-aisladas-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg?s=1024x1024&w=is&k=20&c=UcbX6cx2R6f15CPbXOaXuph78bJU_K_XIA9BT2x6pnE=" className="img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="https://media.istockphoto.com/id/1127387722/es/vector/colecci%C3%B3n-de-ropa-etiquetas-tama%C3%B1o-aisladas-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg?s=1024x1024&w=is&k=20&c=UcbX6cx2R6f15CPbXOaXuph78bJU_K_XIA9BT2x6pnE=" className="img-fluid" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
