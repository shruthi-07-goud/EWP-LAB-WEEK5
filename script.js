let count = 0;

function addToCart(item) {

    count++;

    document.getElementById("cart").innerHTML =
        "Cart: " + count + " items";

    alert(item + " added to cart!");
}

function searchItems() {

    let search = document.getElementById("search")
                    .value.toLowerCase();

    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {

        let name = items[i]
                    .getElementsByTagName("h3")[0]
                    .innerText.toLowerCase();

        if (name.includes(search)) {
            items[i].style.display = "flex";
        }
        else {
            items[i].style.display = "none";
        }
    }
}
