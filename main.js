var typed = new Typed(".text", {
    strings: [
        "Frontend Developer",
        "Java Developer",
        "Full Stack Developer",
        "Software Developer",
        "Web Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        let value = searchInput.value.toLowerCase();

        if(value === "home"){
            location.href="#home";
        }
        else if(value === "about"){
            location.href="#about";
        }
        else if(value === "skills"){
            location.href="#skills";
        }
        else if(value === "portfolio"){
            location.href="#portfolio";
        }
        else if(value === "contact"){
            location.href="#contact";
        }
        else{
            alert("Section Not Found");
        }
    }

});
const form = document.querySelector(".contact form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    form.reset();
});