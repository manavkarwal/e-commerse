import products from "./api/products.json";
import { fetchQuantityFromCartsLS } from "./fetchQuantityFromCartsLS";
import { getCardProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartproductTotal } from "./updateCartproductTotal";


let cartProducts = getCardProductFromLS();


const filterProducts = products.filter((curProd) => {
   return  cartProducts.some((curElem) => curElem.id === curProd.id);
}); 
// 

 let cartElement = document.querySelector("#productCartContainer");
 let templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        let {category, id, image, name, stock, price} = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const lsActualData = fetchQuantityFromCartsLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `cards${id}`);
         productClone.querySelector(".productName").textContent = name;
         productClone.querySelector(".Category").textContent = category;
         productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;


        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
         incrementDecrement(event, id, stock, price );
        })


        productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener("click" , () => removeProdFromCart(id));

         cartElement.append(productClone);

    });
 };

showCartProduct();

updateCartproductTotal();
