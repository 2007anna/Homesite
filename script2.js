let point = document.querySelectorAll('.point')
let imgSlider = document.querySelectorAll('.imgSlider')
let leftBtn = document.getElementById('.leftBtn')
let rightBtn = document.getElementById('.rightBtn')

point[0].classList.add('activeImage')
imgSlider[0].classList.add('activeImage')

let counter = 0;

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imgSlider.length; k++){
            point[k].classList.remove('activeImage')
            imgSlider[k].classList.remove('activeImage')
        }
        counter = i;
        imgSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    })
}

leftButn.addEventListener('click',()=>{
    for(let k=0; k<imgSlider.length; k++){
        point[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0){
        counter = imgSlider.length-1
    }
    imgSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

rightButn.addEventListener('click',()=>{
    for(let k = 0; k<imgSlider.length; k++){
        point[k].classList.remove('activeImage')
        imgSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imgSlider.length){
        counter = 0
    }
    imgSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

