import React, { useState, useEffect } from "react";

//create your first component
//hooks son funciones que se extraen

let contador = 0;
let text_tarea = "tareas";

export function Home() {
	let info = "";
	let valor = "";
	let api = [{ label: "Tarea de prueba", done: false }];
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [indice, setIndice] = useState("");

	useEffect(() => {
		let fetchUrl =
			"https://assets.breatheco.de/apis/fake/todos/user/fabianchss";

		fetch(fetchUrl, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(api)
		})
			.then(res => {
				console.log(res.json());
				return res.json();
			})
			.then(data => console.log(data))
			.catch(error => console.log("ERROR"));
	}, []);

	function updateData() {
		// let api = [
		// 	{ label: "Tarea de prueba", done: false },
		// 	{ label: "Tarea de prueba2", done: false },
		// 	{ label: "Tarea de prueba3", done: false }
		// ];

		let fetchUrl =
			"https://assets.breatheco.de/apis/fake/todos/user/fabianchss";

		fetch(fetchUrl, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(api)
		})
			.then(res => {
				console.log(res.json());
				return res.json();
			})
			.then(data => console.log(data))
			.catch(error => console.log("ERROR"));
	}

	function handleChange(event) {
		setTarea(event.target.value);
		console.log(info);
	}
	function clic() {
		if (tarea != "") {
			if (tareas.lenght == 0) {
				setTareas(tareas.push(tarea));
				contador++;
			} else {
				setTareas(tareas.concat(tarea));
				contador++;
			}
		}
		recorrido();
	}
	function recorrido() {
		//hola
		api = [];
		// let lista = tareas;
		// for (let i = 0; i <= contador; i++) {
		//     api.push({ label: lista[i], done: false });
		//     console.log(lista[i] + "ciclo");
		//     //{ label: "Do the replits", done: false }
		// }
		// console.log("API" + api);
		// updateData();

		const taskItems2 = tareas.map(item =>
			api.push({ label: item, done: false }.toString())
		);
		updateData();
	}

	function borrar(index) {
		//tareas.splice(index);
		setIndice(tareas.splice(index, 1));
		contador--;
		recorrido();
		//console.log("AQUI LA LISTA " + tareas);
	}

	if (contador == 1) {
		text_tarea = "tarea";
	} else {
		text_tarea = "tareas";
	}

	const taskItems = tareas.map((item, index) => (
		<div key={index} className="row">
			<div className="col-2 d-flex align-items-center">
				<button
					onClick={() => {
						borrar(index);
					}}
					type="button"
					className="btn btn-danger m-2">
					<i className="far fa-trash-alt"></i>
				</button>
			</div>
			<div className="col-10 d-flex align-items-center" id="text">
				{item}
			</div>
		</div>
	));

	return (
		<div className="mx-auto" id="anchogeneral">
			<div className=" d-flex justify-content-center" id="anchogeneral">
				<h1 id="title">TODO LIST</h1>
			</div>
			<div>
				<div className="m-1" id="anchogeneral">
					<input
						type="text"
						className="form-control"
						placeholder="Inserta tu tarea"
						aria-label="Username"
						onChange={handleChange}
					/>
				</div>
				<div className="m-1" id="anchogeneral">
					<button
						type="button"
						className="btn btn-primary "
						onClick={clic}
						id="anchogeneral">
						Agregar
					</button>
				</div>
			</div>
			<div className="m-1 align-items-center" id="anchogeneral">
				Hay {contador} {text_tarea} por realizar.
			</div>
			<div
				className="m-1 border  border-rounded-3 align-items-center"
				id="anchogeneral">
				{taskItems}
			</div>
		</div>
	);
}
