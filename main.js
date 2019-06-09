window.addEventListener("load"  ,()=>{
    const sounds=document.querySelectorAll(".sounds");
    const beatsContainer=document.querySelectorAll(".beats_container div");
    const visual=document.querySelector(".visual");
    const colors=["rgb(24, 118, 241)","rgb(92, 231, 37)","rgb(250, 155, 12)","rgb(255, 0, 179)","rgb(236, 34, 19)","rgb(180, 28, 226)"];



    beatsContainer.forEach((beat,index) => {
        beat.addEventListener("click",function() {
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
            
        });
        beatsContainer[index].style.boxShadow="rgb(60, 47, 95) 0px 0px 17px 7px";       
    });
    const createBubbles = (index) =>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation=`jump 1s ease`;
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
          });
    };
});