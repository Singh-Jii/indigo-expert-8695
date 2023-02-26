let title = document.getElementById("title")
let image_1 = document.getElementById("Image_1")
let image_2 = document.getElementById("Image_2")
let image_3 = document.getElementById("Image_3")
let image_4 = document.getElementById("Image_4")
let price = document.getElementById("Price")
let Category = document.getElementById("Category")
let rating = document.getElementById("Rating")
let Errors = document.getElementById("Errors")
let added = document.getElementById("added")
let submit = document.getElementById("submit")


let myform = document.querySelector("form");

myform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (title.value == "" || image_1.value == "" || image_2.value == "" || image_3.value == "" || image_4.value == "" || price.value == "" || Category.value == ""  || rating.value == "") {
        
        Errors.style.display = "inline"
        setTimeout(() => {
            Errors.style.display = "none"
        }, 2000)
    } else {
        added.style.display = "inline"
        setTimeout(() => {
            added.style.display = "none"
        }, 2000)
        let obj = {
            title: title.value,
            image_1: image_1.value,
            image_2: image_2.value,
            image_3: image_3.value,
            image_4: image_4.value,
            price: price.value,
            Category: Category.value,
            rating: rating.value
        }
        addProduct(obj);
    }

})

function addProduct(obj){
    fetch("https://fashionhub-mrc2.onrender.com/AllProducts",{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body : JSON.stringify(obj)
    })
}
let logout=document.getElementById("out")
let log=document.getElementById("logout");
log.addEventListener("click",()=>{
    logout.style.display = "inline"
    setTimeout(() => {
        logout.style.display = "none";
        window.open("./index.html")
    }, 2000)
})