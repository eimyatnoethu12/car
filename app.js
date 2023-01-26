const Dino = document.getElementById("car");
const Tree = document.getElementById("tree");
var load = document.getElementById('load');
var text = document.getElementById('text-container');
Dino.addEventListener("click", Jump);
function Jump() {
    Dino.classList.toggle("Jump");
}
document.addEventListener('click', function () {
    Jump();
})
let alive = setInterval(function () {
    let DinoTop = parseInt(window.getComputedStyle(Dino).getPropertyValue('top'));
    let Dinoleft = parseInt(window.getComputedStyle(Dino).getPropertyValue('left'));
    let Treeleft = parseInt(window.getComputedStyle(Tree).getPropertyValue('left'));
    if (Treeleft > 70 && DinoTop == 143 && Treeleft < Dinoleft) {
        Dino.style.animation = "paused";
        Tree.style.animation = "paused";
        alert("Oops ! Game Over:");
        window.location.reload();
    }
    document.addEventListener('keydown', function () {
        Jump();
    })
});

window.addEventListener("load", function () {
    load.style.display = 'none';
    text.style.display = 'none';
});
window.addEventListener('click', function () {
    document.getElementById('song').play();
});
