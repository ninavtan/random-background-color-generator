var button = document.getElementById("press");

button.addEventListener("click", function(){
    randomBgColor();
})


function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(bgColor);
   document.body.style.background = bgColor;
   button.style.backgroundColor = bgColor;

} 
