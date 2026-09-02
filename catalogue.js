let count = 0;

function addToCart(book) {
    count++;

    document.getElementById("cart").innerHTML =
        "Cart: " + count + " books";

    alert(book + " added to cart!");
}

function searchBooks() {

    let search = document.getElementById("search")
                    .value.toLowerCase();

    let books = document.getElementsByClassName("book");

    for (let i = 0; i < books.length; i++) {

        let title = books[i]
                    .getElementsByTagName("h2")[0]
                    .innerText.toLowerCase();

        if (title.includes(search)) {
            books[i].style.display = "block";
        }
        else {
            books[i].style.display = "none";
        }
    }
}
