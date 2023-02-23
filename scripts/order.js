fetch ("https://fashionhub-mrc2.onrender.com/Orders")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)

    creatingTable(data)
   
})

let table=document.getElementById("table_details")

function creatingTable(data){
    console.log(data);
   for (let i=1;i<data.length;i++){
       console.log(data[i].cart_data);
    var rows=
    `
   <tr>
    <td>${data[i].Order_Id}</td>
    <td>${data[i].id}</td>
    <td>${data[i].Name}</td>
    <td>${data[i].Email_Id}</td>
    <td>${data[i].Mob_No}</td>
    <td>${data[i].cart_data.length}</td>
    <td>${data[i].Address}</td>
    <td>${data[i].Date}</td>
    <td>${data[i].Zip_code}</td>
    </tr>
    `
    table.innerHTML+=rows
   }
    
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





  
