const right = $(".pt__el--ilya").find(".right");
const left = $(".pt__el--ilya").find(".left");
var current = 0;

right.on("click", e => {
    let img = $(".pt__el--ilya").find(".pt__menu__el");
    
    $(img[current]).fadeOut(0);
    if (current < img.length-1) {
        current += 1;
    }
    else {
        current = 0; 
    }
    console.log (current);
    $(img[current]).fadeIn(500);
})
left.on("click", e => {
    let img = $(".pt__el--ilya").find(".pt__menu__el");
    
    $(img[current]).fadeOut(0);
    if (current > 0) {
        current -= 1;
    }
    else {
        current = img.length-1; 
    }
    console.log (current);
    $(img[current]).fadeIn(500);
})

const rightK = $(".pt__el--kate").find(".right");
const leftK = $(".pt__el--kate").find(".left");
currentK = 0;
rightK.on("click", e => {
    let img = $(".pt__el--kate").find(".pt__menu__el");
    
    $(img[currentK]).fadeOut(0);
    if (currentK < img.length-1) {
        currentK += 1;
    }
    else {
        currentK = 0; 
    }
    console.log (currentK);
    $(img[currentK]).fadeIn(500);
})
leftK.on("click", e => {
    let img = $(".pt__el--kate").find(".pt__menu__el");
    
    $(img[currentK]).fadeOut(0);
    if (currentK > 0) {
        currentK -= 1;
    }
    else {
        currentK = img.length-1; 
    }
    console.log (currentK);
    
    $(img[currentk]).fadeIn(500);
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
  