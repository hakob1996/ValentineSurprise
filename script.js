var textWrapper = document.querySelector('.ml13');
var btn = document.querySelector("#btn")
var nameVal = document.querySelector("#fname")
var nameSpace = document.querySelector("#fillName")
var main = document.querySelector("#main")
var reload = document.querySelector("#reload")
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });


  var textWrapper2 = document.querySelector('.ml14 .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



btn.addEventListener("click", function(){

    
    var h1= document.createElement("h1");
    
    event.preventDefault();
    h1.innerHTML=("My" +" " + nameVal.value);
    h1.id = "name";
    main.appendChild(h1);
    main.style.display = "block";
    nameSpace.style.display = "none";

    console.log(textWrapper);

})


reload.addEventListener("click", function(){
    location.reload();
})
    

nameVal.addEventListener("keyup", function(event){

    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("btn").click();
    }
    
});