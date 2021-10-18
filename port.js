var typed = new Typed(".typing", 
{
    strings:[ "Developer", "Graduate","Techie","Developer"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed1 = new Typed(".typing_about", 
{
    strings:[ "Who I Am??","Who I Am??","My Achievements"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed2 = new Typed(".typing_skill1", 
{
    strings:[ "HTML","HTML"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed3 = new Typed(".typing_skill2", 
{
    strings:[ "HTML","CSS"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed4 = new Typed(".typing_skill3", 
{
    strings:[ "HTML","JavaScript"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed5 = new Typed(".typing_skill4", 
{
    strings:[ "HTML","C++"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed6 = new Typed(".typing_skill5", 
{
    strings:[ "HTML","Python"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed7 = new Typed(".typing_skill6", 
{
    strings:[ "HTML","Data Structures"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed8 = new Typed(".typing_skill7", 
{
    strings:[ "HTML","Algorithms"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
var typed9 = new Typed(".end", 
{
    strings:[ "HTML","Thankyou!", "Visit Again!"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
});
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read_btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
 