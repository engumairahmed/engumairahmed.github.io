//This will stop the page from refresh
$(".flex-form").submit(function(e) {
    e.preventDefault();
});

let email=document.getElementById('email')
let telNumber=document.getElementById('telNumber')
let userName=document.getElementById('userName')
function qValidate(){
    if (email.value=="" && telNumber.value=="" && userName.value==""){
        alert("Please fill "+'"Query Form"'+" before submission");
    } else if (userName.value.length<=2||isNaN(userName.value)==false){
        alert('Please enter valid Name');
        //Contact number validation for Pakistan only
    } else if (telNumber.value.length<11||telNumber.value.length>=12){
        alert('Invalid Contact Number');
    } else{
        alert('Query submitted successfully')
    }
}

let reviewEmail=document.querySelector('#reviewEmail')
let reviewUserName=document.querySelector('#reviewUserName')
let reviewTelNumber=document.querySelector('#reviewTelNumber')

function fValidate(){
    if (reviewEmail.value=="" && reviewTelNumber.value=="" && reviewUserName.value==""){
        alert("Please fill "+'"Review Form"'+" before submission");    
    } else if (reviewUserName.value.length<=2||isNaN(reviewUserName.value)==false){
        alert('Please enter valid Name');        
        //Contact number validation for Pakistan only
    } else if (reviewTelNumber.value.length<11||reviewTelNumber.value.length>=12){
        alert('Invalid Contact Number');
    } else{
        alert('Review submitted successfully')
    }
}

var expandImg = document.getElementById("expandedImg");
var imgText = document.getElementById("imgtext");
let slide=document.getElementById('gallery-slider');
let crossBtn=document.getElementById('close-btn')
function enlargeImg(imgs) {
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  crossBtn.style.display='block'
  slide.style.display='none'
  expandImg.parentElement.style.display = "block";
  
}
document.addEventListener("keyup", function(e){
    if(e.key == "Escape"){
        expandImg.parentElement.style.display="none"
        slide.style.display='block'
       
    }
    // console.log('keypressed.')
})
function closeView(){
    expandImg.parentElement.style.display="none"
    slide.style.display='block'
}

$(document).ready(function(){
    $('.region-btn').click(function(){
        $('#region-slider').slideToggle('slow')
    });
});

let regionSlide=document.getElementById('region-slider')

$(document).on(
    'keydown',
    function(event) {
      if(event.key == "Escape"&&regionSlide.style.display=="block"){
        $('#region-slider').slideToggle('slow');
      }
    });
