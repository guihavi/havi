var heart = document.querySelector('.heart'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
   heartAnime = document.querySelector('.heart.anime')
const typewrite = document.querySelector (".type-writer");
const content = document.querySelector(".container");
const radio = document.querySelector(".radio");
const contenthihi = document.querySelector(".container")
const nextBtn = document.querySelector(".next-button");
const agree = document.querySelector("#toggle-heart");
const disagree = document.querySelector(".disagree-button")
agree.addEventListener("change",()=> {
    if(!content.classList.contains("disappear"));
    radio.classList.toggle("disappear")
    if(!radio.classList.contains("disappear"));
    content.classList.toggle("disappear");
    
    if(agree.checked) {
        disagree.classList.add("disappear2")
    }
    else {
        disagree.classList.remove("disappear2")
    }
})


const listbtn = document.querySelector(".bttn");

heart.addEventListener('click', animation);
heart.addEventListener('click', ()=>{
    setTimeout(()=>{
        typewrite.classList.add("typeActive");
    },2000)
    setTimeout(()=>{
        listbtn.classList.add("act")
    },105000)
});




function animation() {
   heart.classList.add("active");
   heartAnime.style.opacity = "0";

   allHearts.forEach(function(element) {
      element.classList.add("active");
   })
}

function refresh() {
  heart.classList.remove("active");
      reload.setAttribute("style", "opacity: 0; pointer-events: none;");
   heartAnime.style.opacity = "1";;

   allHearts.forEach(function(element) {
      element.classList.remove("active");
   })
   
}

//==================================================================\
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

heart.onclick = setTimeout(()=> {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}
, 7000);
 
