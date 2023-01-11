function getCategory() {
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
                    <p>Price: ${product.price}$</p>
                </div>
                `;
			});
			document.querySelector("#cards").innerHTML = products.join("");
		});
	document.querySelector("#cards").innerHTML = `
		<img class='' src="src/assets/load.gif" alt="loading...">
		<img class='' src="src/assets/load.gif" alt="loading...">
		<img class='' src="src/assets/load.gif" alt="loading...">
		<img class='' src="src/assets/load.gif" alt="loading...">
	`;
}
