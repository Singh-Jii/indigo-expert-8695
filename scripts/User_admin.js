async function getData() {
    let res=await fetch("https://fashionhub-mrc2.onrender.com/users");
    let data=await res.json();
  
    display(data)


}

getData()
let show=document.getElementById("tbody");
let M_img_url="https://img.icons8.com/color/48/null/circled-user-male-skin-type-4--v1.png" ;
let F_img_url="https://img.icons8.com/color/48/null/circled-user-female-skin-type-1-2--v1.png";
function   display(data){
    data.map((elem,index)=>{
      if(index!=0){
        let row=document.createElement("tr");
        let c1=document.createElement("td");
                c1.innerText=index;
         let image=document.createElement("img");
         if(elem.gender=="Male"){
           console.log(elem.gender);
             image.src=M_img_url;
         }
          else 
           image.src=F_img_url;      
           console.log(image);   
        let c2=document.createElement("td");
       c2.append(image)
         
        let c3=document.createElement("td");
          c3.innerText=elem.name;

        let c4=document.createElement("td");
           c4.innerText=elem.email;
        let c5=document.createElement("td");
         c5.innerText=elem.gender;
         let c6=document.createElement("td");
           c6.innerText=elem.Phone;
           let c7=document.createElement("td");
            c7.innerText=elem.zipcode;
            
            let c8=document.createElement("td");
                c8.innerHTML=`<button class="d-button">DELETE</button>`
                row.append(c1,c2,c3,c4,c5,c6,c7,c8)
                show.append(row);
                c8.addEventListener("click",()=>{
                  deleteData(elem.id)
                  row.style.display="none";
                 
                })
           
        }
    })
}
async function  deleteData(id){
    let res=await fetch(`https://fashionhub-mrc2.onrender.com/users/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
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