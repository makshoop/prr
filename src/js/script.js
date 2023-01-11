// function getAllProducts() {
// 	fetch("https://fakestoreapi.com/products/1")
// 		.then((res) => res.json())
// 		.then((resArray) => {
// 			console.log("resArray", resArray);

// 			const products = resArray.map((product) => {
// 				return `
//                 <b>title</b>: ${product.title}
//                 <p>description: ${product.description}</p>
//                 <img src="${product.image}">
//             `;
// 			});

// 			document.querySelector("main").innerHTML = products.join("<br>");
// 		});

// 	document.querySelector("main").innerText = "loading...";
// }

// document.querySelector("button").addEventListener("click", () => {
// 	getAllProducts();
// });
// console.log(getAllProducts);
