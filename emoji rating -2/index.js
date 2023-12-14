let x1, x2, x3, x4;
x1 = document.getElementById("first");
x2 = document.getElementById("second");
x3 = document.getElementById("third");
x4 = document.getElementById("fourth");
let arr = [x1, x2, x3, x4];

document.getElementById("first").addEventListener('click', () => {
    updateStars(1);
    updateEmoji("angry");
});

document.getElementById("second").addEventListener('click', () => {
    updateStars(2);
    updateEmoji("meh");
});

document.getElementById("third").addEventListener('click', () => {
    updateStars(3);
    updateEmoji("smile");
});

document.getElementById("fourth").addEventListener('click', () => {
    updateStars(4);
    updateEmoji("laugh");
});

document.querySelector(".custom-textarea").addEventListener('click' ,()=>{
let z=document.querySelector(".Placeholder");
z.remove();
});

document.querySelector(".btn").addEventListener('click' ,()=>{
let z=document.querySelector(".main"); z.remove();
let x=document.createElement('div');
document.body.prepend(x);
x.classList.add('thankyou');
x.innerHTML="thank you for your review!"
})


function updateStars(ct){
    for(let j=0 ;j<4 ;j++){
    arr[j].style.color='gray';
    }
    for(let j=0 ;j<ct ;j++){
    arr[j].style.color='gold';
    }
    }

    function updateEmoji(state){
        let x=document.querySelector(".emoji");
        let z=document.querySelector(".text");
        if(z){
        z.remove();
        }
        if(x){
        x.outerHTML=`<i class="fa-solid fa-face-${state} emoji fa-7x"></i>`;
        }
        else{
        let z=document.createElement('i');
        document.querySelector(".first").append(z);
        z.outerHTML=`<i class="fa-solid fa-face-${state} emoji fa-7x"></i>`;
        }
        }
