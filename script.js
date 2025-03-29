// document.onmousemove=(e) => {
//     let img =document.createElement("img")
//     img.src = "pikachu-adventure-png-05032024-0lcddwjhg2f7ycf2.png";
//     img.style.position="absolute"
//     img.style.left=e.pageX +"px"
//     img.style.top=e.pageY +"px"
//     img.animate([{opacity:0}], {duration :600}).onfinish=()=> img.remove();
//     document.body.append(img);};

let starting = document.querySelector('.starting')
let easy= document.querySelector('#Easy')
let medium= document.querySelector('#Medium')
let hard= document.querySelector('#Hard')
let model= document.querySelector('.model')
let scoru= document.querySelector('#scoru')

let img1 =document.createElement("img1")
let img2 =document.createElement("img2")
let img3 =document.createElement("img3")
let img4 =document.createElement("img4")
let img5 =document.createElement("img5")
let img6 =document.createElement("img6")

img1.src = "pikachu-adventure-png-05032024-0lcddwjhg2f7ycf2.png";
img2.src = "pikachu-angry-png-pbv-m1cs24lccs3l13s3.png";
img3.src = "pikachu-christmas-png-44-2cijvkgupm98dtpp.png";
img4.src = "pikachu-face-png-kfi-fxsy0kbf1itwtn1x.png";
img5.src = "pikachu-with-scarf-png-fqb17-b1d9g3gwwr2aih9g.png";
img6.src = "pikachu-in-costume-png-25-w9r9lw2fx1o3cr4w.png";

let score=0;
let f=0

let audio = new Audio();
audio.src="./025-kanto-pikachu (1).mp3"

let images=[img1,img2,img3,img4,img5,img6]

hard.addEventListener(`click` ,() =>{
    let f=600
    starting.style.display=`none`
})
medium.addEventListener(`click` ,() =>{
    let f=800
    starting.style.display=`none`
})
easy.addEventListener(`click` ,() =>{
    let f=1000
    starting.style.display=`none`
})




function run (){
// model.style.background =`${images[4]}

model.addEventListener(`click`,function(){

    // let a=Math.floor(Math.random()*images.length )
    // console.log(a)
    // model.computedStyleMap.backgroundImage =`${images[a]}`
    
    
    intervalId = setInterval(() => {
        
        
        let l =Math.floor(Math.random()*85)
        let m =Math.floor(Math.random()*85)
        console.log(l,m);
        
        model.style.position=`absolute`
        model.style.left=`${l}%`
        model.style.top=`${m}%`
    }, f);
    
    
    if (intervalId) {
        clearInterval(intervalId);
      }


   
     score ++ 
     scoru.innerHTML= `Score : ${score}`
      



})
}

easy.addEventListener(`click`,run);
medium.addEventListener(`click`,run);
hard.addEventListener(`click`,run);









 

