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
var count = 0;
$(".pt__el--ilya").find(".pt__text__content-before").on("click", e => {
    console.log("hi")
    if (count % 2 == 0) {
       $(".pt__el--ilya").find(".pt__text__content").css("position", "relative")
       $(".pt__el--ilya").find(".pt__text__content").css("height", "auto")
       $(".pt__el--ilya").find(".pt__text__content-before").css("background", "inherit");
       count += 1;
    }
    else {
        console.log (count)
       $(".pt__el--ilya").find(".pt__text__content").css("position", "absolute")
       $(".pt__el--ilya").find(".pt__text__content").css("height", "6rem")
       $(".pt__el--ilya").find(".pt__text__content-before").css("background", "linear-gradient(to bottom, rgba(255, 255, 255, 0), #dce0e0 75%)"); 
       count += 1;
   }
})
  
 $(".pt__el--kate").find(".pt__text__content-before").on("click", e => {
    console.log("hi")
    if (count % 2 == 0) {
       $(".pt__el--kate").find(".pt__text__content").css("position", "relative")
       $(".pt__el--kate").find(".pt__text__content").css("height", "auto")
       $(".pt__el--kate").find(".pt__text__content-before").css("background", "inherit");
       count += 1;
    }
    else {
        console.log (count)
       $(".pt__el--kate").find(".pt__text__content").css("position", "absolute")
       $(".pt__el--kate").find(".pt__text__content").css("height", "6rem")
       $(".pt__el--kate").find(".pt__text__content-before").css("background", "linear-gradient(to bottom, rgba(255, 255, 255, 0), #dce0e0 75%)"); 
       count += 1;
   }
})
const sanwich = $(".sandwich__linck");
const menu = $(".sandwich__menu");
sanwich.on("click", e => {
    e.preventDefault();
    menu.slideToggle(500, "linear");
    menu.css("background", "black")
    menu.css("border-radius", "5px")
    console.log ("hi")
})
const inputs = $(".input__row");
inputs.on("click", e => {
    e.currentTarget.value = " " 
})

var NAME;
var Nomber;
const btn = $(".btn__title");
btn.on("click", e => {
    e.preventDefault();
    if (ValidPhone()) {
        NAME = document.getElementById('name').value;
        Nomber = document.getElementById('input__row').value;
        console.log (NAME+ ' '+ Nomber)
        document.getElementById('name').value = "";
        document.getElementById('input__row').value = "";
        fetch(`https://api.telegram.org/bot5001139628:AAERqrJSwZI4zVjH5O6qBIXVHnyB8ZAnxYo/sendMessage?chat_id=-794730103&text=имя ${NAME} телефон ${Nomber}`) 
    }
})
function ValidPhone(f) {
    var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var myPhone = document.getElementById('input__row').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    console.log (valid);
    return valid; 
}