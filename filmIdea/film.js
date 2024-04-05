console.log("Hello World !");

const title = document.getElementsByClassName("title")[0];
const text = document.getElementsByClassName("content")[0];
const title1part = document.getElementsByClassName("part1")[0];
const title2part = document.getElementsByClassName("part2")[0];
const title3part = document.getElementsByClassName("part3")[0];
const blob = document.querySelector('.blob');
const body = document.body;
const bloblur = document.querySelectorAll(".bloblur");

let loginsList = ["bla","bli","log","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","123","456","789","0"];

//console.log(title.innerText);
//console.log(text.innerText);

title.addEventListener('mouseover',()=>{
    //console.log("over");
    text.classList.add('low-opacity');

    title1part.classList.remove('hidden');
    title1part.classList.add("appear");
    //second part apparition
    title2part.classList.remove("hidden");
    title2part.classList.add("appear-after");
    //third
    title3part.classList.remove("hidden");
    title3part.classList.add("appear-after-after");

});

title.addEventListener('mouseout',()=>{
    //console.log('out');
    text.classList.remove('low-opacity');

    title1part.classList.remove("appear");
    title1part.classList.add("hidden");

    title2part.classList.remove("appear-after");
    title2part.classList.add("hidden");

    title3part.classList.remove("appear-after-after");
    title3part.classList.add("hidden");
});


title.addEventListener('click',()=>{
    title.classList.add("totally-disappear");
    text.classList.add("totally-disappear");
    body.style.backgroundColor = "#08020e";
    bloblur.forEach((e)=>{
        e.style.display = "block";
    })
});



document.body.onpointermove = (e) => {//animation du blob qui suit la souris
    const {clientX, clientY} = e;
    blob.animate({
        left :` ${clientX}px`,
        top: `${clientY}px`
    },{duration:2000,fill:'forwards'});

};

//create a div at a random position
function createDiv(){
    loginsList.forEach((login)=>{
        const div = document.createElement("div");
        div.classList.add("on-top");
        div.style.left = `${Math.random()*window.innerWidth}px`;
        div.style.top = `${Math.random()*window.innerHeight}px`;
        div.style.color ="white";
        div.style.opacity = "0";
        body.appendChild(div);
        div.innerText = login;
        div.addEventListener('mouseover',()=>{
            div.style.opacity = "1";
            setTimeout(()=>{
                div.style.opacity = "0";
                div.style.transition = "opacity 1s";
            },1000);
        });
    });
}



let intervalSpawn = ((n)=>{
    for(let i = 0; i<n;i++){
        setTimeout(()=>{
            createDiv();
        },1000);
        console.log("spawned");
    }
});


intervalSpawn(loginsList.length);

