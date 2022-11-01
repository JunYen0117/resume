const realAvatar = document.querySelector('.real_avatar');
const comicAvatar = document.querySelector('.comic_avatar')
realAvatar.addEventListener('click',()=>{
    if(realAvatar.className === 'real_avatar'){
        realAvatar.className = 'real_avatar fadeout';
    }else if(realAvatar.className === 'real_avatar fadein'){
        realAvatar.className = 'real_avatar fadeout';
    }else if(realAvatar.className === 'real_avatar fadeout'){
        realAvatar.className = 'real_avatar fadein';
    };
})
comicAvatar.addEventListener('click',()=>{
    comicAvatar.className = 'comic_avatar none';
    realAvatar.className = 'real_avatar';
})

const clickCarousel = document.querySelector('#click_carousel')
const carouselPrevBtn = document.querySelector('.carousel-control-prev');
const carouselNextBtn = document.querySelector('.carousel-control-next')
const carouselItems = document.querySelectorAll('.carousel-item'); //nodeList節點
const carouselText = document.querySelectorAll('.carousel_text')

const carouselArray = [...carouselItems] //把nodeList變純陣列

// 點擊預覽圖
clickCarousel.addEventListener('click',()=>{
    if(carouselArray[0].className.includes('active')){
        carouselText[0].className = 'carousel_text';
    };
});

// 點擊輪播裡面，左右方向的按鈕
carouselPrevBtn.addEventListener('click',Imghavecaption)
carouselNextBtn.addEventListener('click',Imghavecaption)
function Imghavecaption(){
    carouselArray.forEach((item,index)=>{
        carouselText[index].className = 'carousel_text'
        if(!item.getAttribute('class').includes('prev')&&
        !item.getAttribute('class').includes('next')){
            carouselText[index].className = 'carousel_text none'
        }
    })
}