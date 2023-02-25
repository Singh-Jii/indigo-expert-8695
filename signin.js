var openbtn=document.querySelector("#open-popup-btn");
var closebtn=document.querySelector(".popup-close-btn");
let warning=document.getElementById("empty");
openbtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
closebtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
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


