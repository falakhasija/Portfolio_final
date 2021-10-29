var typed = new Typed(".typing",
    {
        strings: ["Developer", "Graduate", "Techie", "Developer"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });
    
var typed9 = new Typed(".end",
    {
        strings: ["HTML", "Thankyou!", "Visit Again!"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
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
