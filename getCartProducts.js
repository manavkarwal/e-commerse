import { updateCartValue } from "./updateCartValue";

export const getCardProductFromLS = () => {
    let cartProducts  = localStorage.getItem("cartProductsLS");
    if (!cartProducts) {
        return[];
    }
    cartProducts = JSON.parse(cartProducts);

    updateCartValue(cartProducts);



    return cartProducts;

};