

let totalSlides = document.querySelectorAll(".slider--item").length;    //[0,1,2] = 3
let currentSlide = 0;                                                   //[0,1,2] = 3

document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSlides})`;

document.querySelector(".slider--controls").style.height = 
    `${document.querySelector(".slider").clientHeight}px`;

document.querySelectorAll(".slider--control").forEach((element) => {
    element.style.fontWeight = "bold";
    element.style.fontSize = "30px";
})

document.querySelector(".slider--control.goBack").addEventListener("click", goBack);
document.querySelector(".slider--control.goFoward").addEventListener("click", goFoward);

function goBack() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goFoward(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {  //se currentSlide > 2
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {

    //recupera a largura dos .slider--item (estao com 100vw no css)
    let sliderItemWidth = document.querySelector(".slider--item").clientWidth;

    //calcula os valores de margin:    
    let newMargin = (currentSlide * sliderItemWidth);     
    //0 * 1024 = 0px
    //1 * 1024 = 1024px
    //2 * 1024 = 2048px    
    
    //coloca a margin-left do slider--width, conforme o calculo acima, para deslocamento do slide
    document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`; 
}

setInterval(goFoward, 5000);    //5s para disparar automaticamente o goFoward()












































































