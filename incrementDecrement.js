import { getCardProductFromLS } from "./getCartProducts";
import { updateCartproductTotal } from "./updateCartproductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    
    const  currentCardElement = document.querySelector(`#cards${id}`);
    const productPrice = currentCardElement.querySelector(".productPrice");
    const productQuantity = currentCardElement.querySelector(".productQuantity");



    let quantity = 1;
    let localStoragePrice = 0;


    let localCartProduct = getCardProductFromLS();


    let existingProd = localCartProduct.find((curProd) => curProd.id === id);

    if(existingProd){
        quantity =  existingProd.quantity;
        localStoragePrice = price;
        price = price;
    } 

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity  += 1;
        } else if (quantity === stock ) {
            quantity = stock;
            localStoragePrice = price * stock
        }
    }


    if ((event.target.className === "cartDecrement")) {
        if(quantity > 1) {
           quantity  -= 1;
        }
    }

    localStoragePrice = price * quantity;

    localStoragePrice = Number(localStoragePrice.toFixed(1));
    
    let updatedCart = {id, quantity, price : localStoragePrice};

    updatedCart = localCartProduct.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

    productQuantity.innerHTML = quantity;
    productPrice.innerHTML = localStoragePrice;


    updateCartproductTotal();
};