import { getValue } from "./selectors";
import { getSort } from "./selectors";
import { getQuant } from "./selectors";

export function getCategory() {
	fetch(
		"https://fakestoreapi.com/products/category/" +
			getValue() +
			getSort() +
			getQuant(),
	)
		.then((res) => res.json())
		.then((json) => {
			const products = json.map((product) => {
				return `
                <div class='card'>
                    <img class='image' src="${product.image}">
					<b>${product.title}</b>
					<a href=''>View More...</a>
                    <p>Price: ${product.price}$</p>
                </div>
                `;
			});
			document.querySelector("#cards").innerHTML = products.join("");
		});
	// document.querySelector("#load").innerHTML = `
	// 	<img class='' src="src/assets/load.gif" alt="loading...">
	// `;
}

function firstCategory() {
	fetch("https://fakestoreapi.com/products/category/electronics")
		.then((res) => res.json())
		.then((json) => {
			const products = json.map((product) => {
				return `
			<div class='card'>
				<img class='image' src="${product.image}">
				<b>${product.title}</b>
				<a href=''>View More...</a>
				<p>Price: ${product.price}$</p>
			</div>
			`;
			});
			document.querySelector("#cards").innerHTML = products.join("");
		});
}

firstCategory();
