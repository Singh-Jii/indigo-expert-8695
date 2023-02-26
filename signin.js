var openbtn=document.querySelector("#open-popup-btn");
var closebtn=document.querySelector(".popup-close-btn");
let warning=document.getElementById("empty");
let profile=document.getElementById("profile");
let accountbtn=document.getElementById("accountbtn");
let accountsec=document.getElementById("accountsec")

openbtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
closebtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active");
    location.reload();
});
let email=document.getElementById("email")
    let mobile=document.getElementById("mobile")
    let password=document.getElementById("password");

    let storeddata=JSON.parse(localStorage.getItem("account-data"))
    document.querySelector("form").addEventListener("submit",(e)=>{
      e.preventDefault();
     // display(storeddata);
     
   fetch ("https://fashionhub-mrc2.onrender.com/users",{

method:"GET",
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
}).then((res)=>res.json().then((data)=>display(data)))    
      function display(data){          
        let flag=false;
        if(email.value==""&& password.value==""){
          warning.innerText="Please Enter Your Email and Password"
          flag=true; 
        }
        else{
          data.forEach((e,i)=>{
        if(email.value=="admin@gmail.com" && password.value=="Admin@1212" ){
          // alert("Welcome Admin")
          flag=true;
          window.location.href="./index.html"
        }
        if(email.value===e.email  && password.value ===e.Password){
          document.getElementById("heading").innerText="Sign in Successful";
          alert("Login Sucessfull")
          flag=true;
          warning.innerText=""
          document.body.classList.remove("popup-active")
          accountbtn.style.display="block"
          openbtn.style.display="none"

        }
       
       })
        }
     
       if(!flag){
        alert("Wrong Credentials")
       } 
   
       }


})

///////////////////////
let register=document.getElementById("registerbtn");
let registerform=document.getElementById("registerform");
let loginbtn=document.getElementById("open-popup-btn");
register.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
    registerform.style.display="block";
    loginbtn.style.display="none"
});

////////////////



let Name = document.getElementById("name");
let phone=document.getElementById("mobile")
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let gender=document.getElementById("gender");
let zipcode=document.getElementById("zipcode");

let personData = [];
document.getElementById("submit_btn").addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    name: Name.value,
    email: Email.value,
    Password: Password.value,
    Phone:phone.value,
    gender:gender.value,
    zipcode:zipcode.value
  }
  console.log(obj)
  personData.push(obj);
  fetch ("https://fashionhub-mrc2.onrender.com/users",{
  
    method:"POST",
   headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj) 
  }).then((res)=>res.json().then((data)=>{console.log(data)
   alert("Account Created")
   registerform.style.display="none";
   document.body.classList.add("popup-active")

  }))
})



// submit_btn.addEventListener("click",()=>{
//   if(fillform.name.value=="" && fillform.mobile.value=="" && fillform.gender.value=="" && 
// fillform.zipcode.value=="" && fillform.Email.value==""&& fillform.Password.value==""   ){
//   fill1.innerText="Fill the required feild"
// }
// else if(fillform.name.value==""){
//   fill1.innerText="Fill the Name"
  
// }
// else if(fillform.mobile.value==""){
//   fill1.innerText="Fill the Mobile Number"
  
// }
// else if(fillform.gender.value==""){
//   fill1.innerText="Fill the Gender"
  
// }
// else if(fillform.zipcode.value==""){
//   fill1.innerText="Fill the Zipcode"
  
// }
// else if(fillform.Email.value==""){
//   fill1.innerText="Fill the Email"
  
// }
// else if(fillform.Password.value==""){
//   fill1.innerText="Fill the Password"
  
// }
// else{
//   fill1.innerText=null
//   fill2.innerText="Registation Sucessfull"
// }

// })