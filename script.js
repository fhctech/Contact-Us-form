
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
 e.preventDefault();

 let firstname = document.getElementById("firstname");
 let lastname = document.getElementById("lastname");
 let emailaddress = document.getElementById("emailaddress");
 let querytype = document.getElementById("querytype");
 let message = document.getElementById("message");

 if (firstname.value== "" || lastname.value == "") {
  alert("Ensure you input a value in all fields!");
 } else {
  alert("This form has been successfully submitted!");

  firstname.value = "";
  lastname.value = "";
  emailaddress.value = "";
  querytype.value ="";
  message.value ="";
 }
 //handle submit
});