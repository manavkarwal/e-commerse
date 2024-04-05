export const homeQuantityToggle = (event, id, stock) => {
    const  currentCardElement = document.querySelector(`#cards${id}`);

    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity  += 1;
        } else if (quantity === stock ) {
            quantity = stock;
        }
    }


    if ((event.target.className === "cartDecrement")) {
        if(quantity > 1) {
           quantity  -= 1;
        }
    }
  
    productQuantity.innerHTML = quantity ;
    productQuantity.setAttribute("data-quantity", quantity);

    return quantity;
}