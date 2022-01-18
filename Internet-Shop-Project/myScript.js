"use strict";

const bookList = document.querySelector(".book-list");
const list = document.querySelector(".shopping-conatiner");

let cart = [];

const bookListOfItems = [
    {
        id: 1,
        image: "./images/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
        title: "Production-Ready Microservice",
        author: "Susan J. Fowler",
        price: 32,
    },
    {
        id: 2,
        image: "./images/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",
        title: "Release It!",
        author: "Michael T. Nygard",
        price: 45,
    }
];

const renderBookItems = (title, id, author, price, image) => {
    const items = `
        <div class="book-item" id=${id}>
            <div class="book-item-cover">
            <img
            src=${image}
            alt="image"
            />
            </div>
            <div class="book-item-info">
            <ul class="book-item-list>
            <li class="book-item-list-name>
            <a href="#">${title}</a>
            </li>
            <li class="book-item-list-author">${author}</li>
            <li class="book-item-list-price">${price}</li>
            <li class="book-item-list-btn"><button>Add to cart</button></li>
            </ul>
            </div>
        </div>
    </div>            
    `;

    bookList.insertAdjacentHTML("afterbegin", items);
}

bookListOfItems.map(({ title, id, author, price, image }) => {
    renderBookItems(title, id, author, price, image);

    const addBtn = document.querySelector(".book-item-list-btn > button");

    addBtn.addEventListener("click", (e) => {
        const id = Number(e.target.closest(".book-item").getAttribute("id"));
        const items = bookListOfItems.find((item) => {
            if (item.id === id) {
                return cart.push(item);
            }
        });
        renderList([items]);
        amount();
    });
});

const renderList = (array) => {
    array.find(({ id, title, price }) =>
        list.insertAdjacentHTML(
            "afterbegin",
            `
            <ul class="shopping-body">
            <li >${id}</li>
            <li class="title ">${title}</li>
            <li class='item-count'>1</li>
            <li class="item-price">$<span>${price}</span></li>
            <li>
            <button class="btn btn-warning">
            <i class="fas fa-minus"></i>
            </button>
            <button class="btn btn-success">
            <i class="fas fa plus">+</i>
            </button>
            <button class="btn btn-danger">
            <i class="fas fa trash-alt">Del</i>
            </button>
            </li>
            </ul>`
        )
    );

    const [itemPrice] = array.map((el) => el.price);
    const count = document.querySelector(".item-count");
    const plus = document.querySelector(".btn-success");
    const minus = document.querySelector(".btn-warning");
    const price = document.querySelector(".item-price > span");
    const removeBtn = document.querySelector(".btn-danger");

    addCount(count, plus, price, itemPrice, minus, amount);
    minusCount(count, minus, price, itemPrice, amount);
    removeItem(removeBtn);
};

const addCount = (count, plus, price, itemPrice, minus, amount) => {
    plus.addEventListener("click", () => {
        if (minus.hasAttribute("disabled")) {
            minus.removeAttribute("disabled");
        }
        let qty = Number(count.textContent++) + 1;
        const total = qty * itemPrice;
        price.textContent = `${total}`;
        amount();
    });
}

const minusCount = (count, minus, price, itemPrice, amount) => {
    minus.addEventListener("click", () => 
    {
        if(count.textContent == 1) {
            minus.closest(".shopping-body").remove();
            amount();
        }
        else {
        count.textContent--;
        let cost = Number(price.textContent);
        let total = cost - itemPrice;
        amount();
        price.textContent = `${total}`;
                    
    }
    });
    
};

const removeItem = (removeBtn) => {
    removeBtn.addEventListener("click", function (e) {
        this.closest(".shopping-body").remove();
        amount();
    });
};

const amount = () => {
    const prices = document.querySelectorAll(".item-price > span");
    const amount = document.querySelector(".total > span");
    amount.textContent = Array.from(prices)
        .map((el) => Number(el.textContent))
        .reduce((prev, acc) => prev + acc);
};