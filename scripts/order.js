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
       console.log(data[i]);
    var rows=
    `
   <tr>
    <td>${data[i].orderNumber}</td>
    <td>${data[i].id}</td>
    <td>${data[i].first_name+data[i].last_name }</td>
   
    <td>${data[i].mobile}</td>
    <td>${data[i].address}</td>
    <td>${data[i].Date}</td>
    <td>${data[i].zip}</td>
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





  
