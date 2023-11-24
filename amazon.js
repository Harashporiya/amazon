const sidebar = document.getElementById('sidebar');
sidebar.style.display = 'none';
const black = document.getElementById('black')
const hamIcon = document.getElementById('icon')
black.style.display = 'none'
hamIcon.onclick=function(){
     sidebar.style.display = 'block'
     black.style.display = ''
}
const body = document.getElementById('sidebar');
black.onclick=function(){
    sidebar.style.display = 'none';
    black.style.display = 'none'
}


const miniTV =document.getElementById('minitv')
const amazonMini=document.getElementById('amazonminiTv')
const document2=document.getElementById('document')
amazonMini.style.display='none'
miniTV.onclick=function(){
    amazonMini.style.display=''
    document2.style.display='none'

}
const body2=document.getElementById('amazonminiTv')
body2.onclick=function(){
    amazonMini.style.display='none'
    document2.style.display=''

}

const mobilesPhone=document.getElementById('mobiles')
const realmePhone=document.getElementById('realme')
const document3=document.getElementById('document')
realmePhone.style.display='none'
mobilesPhone.onclick=function(){
    realmePhone.style.display=''
    document3.style.display='none'
}


const body3=document.getElementById('realme')
body3.onclick=function(){
    body3.style.display='none'
    document3.style.display=''
}
const sell =document.getElementById('sell')
const sellCar=document.getElementById('sell_car')
sellCar.style.display='none'
sell.onclick=function(){
    sellCar.style.display=''
    document3.style.display='none'
}
const body4=document.getElementById('sell_car')
body4.onclick=function(){
    body4.style.display='none'
    document3.style.display=''
}