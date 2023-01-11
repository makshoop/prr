import { getCategory } from "./cards";

function getCategories() {
	fetch("https://fakestoreapi.com/products/categories")
		.then((res) => res.json())
		.then((json) => {
			console.log("json", json);

			const categories = json.map((name) => {
				return `
                    <option id='category-name' value="${name}">${name}</option>
                `;
			});
			document.querySelector("#category").innerHTML = categories.join("");
		});
	document.querySelector("#category").innerHTML = "<option>↻</option>";
}

getCategories();

let categoryValue = document.getElementById("category");
let sortValue = document.getElementById("sort");
let quantValue = document.getElementById("quant");

export function getValue() {
	let valueCat = categoryValue.value;
	return valueCat;
}

export function getSort() {
	let valueSort = sortValue.value;
	if (valueSort === "low") {
		return "?sort=asc";
	} else if (valueSort === "high") {
		return "?sort=desc";
	}
}

export function getQuant() {
	let valueQuant = quantValue.value;
	let quant = "&limit=";
	return quant + valueQuant;
}

categoryValue.addEventListener("click", () => {
	getCategory();
});

sortValue.addEventListener("click", () => {
	getSort();
	getCategory();
});

quantValue.addEventListener("click", () => {
	getQuant();
	getCategory();
});
