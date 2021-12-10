const right = $(".pt__el--ilya").find(".right");
const left = $(".pt__el--ilya").find(".left");
var current = 0;

right.on("click", e => {
    let img = $(".pt__el--ilya").find(".pt__menu__el");
    if (current < img.length-1) {
        current += 1;
    }
    else {
        current = 0; 
    }
    console.log (current);
    $(".pt__el--ilya").find(".pt__menu__el--active").removeClass("pt__menu__el--active")
    $(img[current]).toggleClass("pt__menu__el--active")
})
left.on("click", e => {
    let img = $(".pt__el--ilya").find(".pt__menu__el");
    if (current > 0) {
        current -= 1;
    }
    else {
        current = img.length-1; 
    }
    console.log (current);
    $(".pt__el--ilya").find(".pt__menu__el--active").removeClass("pt__menu__el--active")
    $(img[current]).toggleClass("pt__menu__el--active")
})

const rightK = $(".pt__el--kate").find(".right");
const leftK = $(".pt__el--kate").find(".left");
currentK = 0;
rightK.on("click", e => {
    let img = $(".pt__el--kate").find(".pt__menu__el");
    if (currentK < img.length-1) {
        currentK += 1;
    }
    else {
        currentK = 0; 
    }
    console.log (currentK);
    $(".pt__el--kate").find(".pt__menu__el--active").removeClass("pt__menu__el--active")
    $(img[currentK]).toggleClass("pt__menu__el--active") 
})
leftK.on("click", e => {
    let img = $(".pt__el--kate").find(".pt__menu__el");
    if (currentK > 0) {
        currentK -= 1;
    }
    else {
        currentK = img.length-1; 
    }
    console.log (currentK);
    $(".pt__el--kate").find(".pt__menu__el--active").removeClass("pt__menu__el--active")
    $(img[currentK]).toggleClass("pt__menu__el--active")
})
 
  
 $(function() {
  
 $(window).scroll(function() {
  
 if($(this).scrollTop() != 0) {
  
 $('.footer__inter').fadeIn();
  
 } else {
  
 $('.footer__inter').fadeOut();
  
 }
  
 });
  
 $('.footer__inter').click(function() {
  
 $('body,html').animate({scrollTop:0},800);
  
 });
  
 });
  