
//closing mobile navigation menu
const mobileMenuClose = document.querySelector("#mobilemenu-close");
mobileMenuClose.addEventListener("click", (e) => {
  mobileMenuClose.classList.toggle("hidden");
});

//opening mobile navigation menu
const mobileMenuOpen = document.querySelector("#mobilemenu-open");
mobileMenuOpen.addEventListener("click", (e) => {
  mobileMenuClose.classList.toggle("hidden");
});


//login popup
const loginbtn=document.querySelector('#login');
loginbtn.addEventListener('click',(e)=>{
  alert('Sorry for Inconvenience, this service is not currently available 🛠️')
});

//cookie popup

setTimeout(() => {
document.querySelector("#cookie-popup").classList.toggle('hidden');  
document.querySelector('#popupbtn').addEventListener('click',(e)=>{
document.querySelector("#cookie-popup").classList.toggle("hidden");  

});

}, 2500);

