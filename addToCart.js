import { getCardProductFromLS } from "./getCartProducts";
import { showTaost } from "./showTaost";
import { updateCartValue } from "./updateCartValue";



getCardProductFromLS()

export const addToCart  = (event, id, stock) => {

    let arrLocalStorageProduct = getCardProductFromLS();

    const currentProdElem = document.querySelector(`#cards${id}`);


    let quantity = currentProdElem.querySelector(".productQuantity").innerHTML;
    let price = currentProdElem.querySelector(".productPrice").innerHTML;

    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });

        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
        showTaost("add", id);
    }


    if (existingProd) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push( { id, price, quantity})
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct) )

    updateCartValue(arrLocalStorageProduct);
    


    showTaost("add", id);

};