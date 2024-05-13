   
//    --------------------Navigation Bar and about section Bar------------------------
   var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
        function openTab(tabName){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        }

// ------------SideMenu For Mobile Phone------------------
var sidemenu=document.getElementById("sidemenu");
let openMenu=()=>{
    sidemenu.style.right="0";
}
let closeMenu=()=>{
    sidemenu.style.right="-150px";
}

//-----------------Connecting the Contact Form with GoogleSheets---------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4illQcLNzMd2BuwwGL7QUjYnM2tjUpGCnogkez1_aGlpHGZfV3DWiDJ_ZnHFYALMvlw/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully";
        
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
    })
    .catch(error => {
        msg.innerHTML="Error! Message Not Sent";
        msg.style.color="red"
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
    })
})