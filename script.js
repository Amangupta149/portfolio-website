
const firstname = document.getElementById("firstname");
const lasttname = document.getElementById("lasttname");
const email = document.getElementById("email");
const message = document.getElementById("message");


var typed = new Typed('#element', {
    strings: ['Web Developer'],
    typeSpeed: 100,
    startDelay: 1000,
});

function sendMessage() {
    window.open('mailto:amankgupta149@gmail.com?subject=Send Message&body=');
}



