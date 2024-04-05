import { getCardProductFromLS } from "./getCartProducts"
import { showTaost } from "./showTaost";
import { updateCartValue } from "./updateCartValue";
import { updateCartproductTotal } from "./updateCartproductTotal";

export const removeProdFromCart = (id) => {
    let cartProducts = getCardProductFromLS();

    cartProducts = cartProducts.filter((curProd)  => curProd.id !== id);


    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`cards${id}`);
    if(removeDiv) {
        removeDiv.remove();

        showTaost("delete", id);

        updateCartproductTotal();
    };

    updateCartValue(cartProducts);

   

};