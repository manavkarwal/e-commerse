import { getCardProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartsLS = (id, price) => {
    let cartProducts = getCardProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity;
    
    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity, price};
}