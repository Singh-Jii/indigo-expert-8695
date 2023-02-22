let Tbody = document.getElementById("Tbody");

getProduct()
function getProduct(){
    fetch("https://fashionhub-mrc2.onrender.com/AllProducts")
    .then((Response)=>{
        return Response.json()
    })
    .then((data)=>{
        console.log(data);
        showData(data)
    })
}



function showData(data){
    Tbody.innerHTML = null;
    let htmlData = data.map((el)=>getCard(el.id,el.image_1,el.title,el.Category,el.Gender,el.rating,el.price))
    Tbody.innerHTML = htmlData.join(" ");
    
    let tr = document.getElementsByClassName("edit");
    let deletebtn = document.getElementsByClassName("delete");
     
    for(let k of tr){
        k.addEventListener("click",(e)=>{
            let rowId = e.target.dataset.id;

            toggleBilling(rowId,e.target)
        })
    }

    for(let btn of deletebtn){
        btn.addEventListener("click",(e)=>{
            let id = e.target.dataset.id;
            deleteProduct(id)
            // alert(id)
        })
    }

}
function toggleBilling(rowId,element) {
    // Select the billing text fields
    const billingItems = document.querySelectorAll(`#ID${rowId} input[type="text"]`);
    
    let obj= {}
    // Toggle the billing text fields
    billingItems.forEach((item) => {
        item.disabled = !item.disabled;
        let el = item.getAttribute("id")
        
        if(!item.disabled){
            element.innerText = "Save"
            item.style.border ="1px solid black"  
            item.style.width ="100%"   
        }else{
            obj[el] = item.value
            // console.log(1)
            // console.log(obj);
            element.innerText = "Edit"
            item.style.border ="none"  
            item.style.width ="100%"
            
        }
    });
    // console.log(obj)
    // console.log(billingItems[0].disabled == undefined)
    if(Object.keys(obj).length !== 0){
        updateData(obj,rowId)
    }
  }

 function updateData(obj,id){
    console.log(obj)
    fetch(`https://fashionhub-mrc2.onrender.com/AllProducts/${id}`,{
        method : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      })
      setTimeout(()=>{
        getProduct()
    },1200)
  }

  function deleteProduct(id){
    fetch(`https://fashionhub-mrc2.onrender.com/AllProducts/${id}`,{
        method : "DELETE"
    })
    setTimeout(()=>{
        getProduct()
    },1200)
  }

function getCard(id,imgURL,title,Category,Gender,rating,price){
    console.log(title);
    return `
    <tr id=ID${id}>
        <td>${id}</td>
        <td><img class = "Poster" src=${imgURL} alt=""></td>
        <td><input type="text" id="title" value="${title}"  disabled></td>
    
        <td><input type="text" id="rating" value=${rating}  disabled></td>
        <td><input type="text" id="price" value=${price}  disabled></td>
        <td class="edit" data-id=${id} >Edit</td>
        <td class="delete" data-id=${id}>Delete</td>
    </tr>
    `
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