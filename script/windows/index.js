const container=document.getElementById('container');
const width=1900,height=1000;
const boxW=100,boxH=100;

// const position=[]
// for(let i=1;i<=190;i++){
//     const ceilY=Math.ceil(i/19);// 当前行数
//     const ceilX=(i-1)%19
//     position.push(
//         {y:ceilY*100,x:ceilX*100}
//     )
// }


// position.forEach(item=>{
//     container.innerHTML+=`<p class="backs" ondrop="drop(event)" ondragover="dragOver(event)"></p>`
// })

for(let i=0;i<190;i++){
    container.innerHTML+=`<p class="back" id='back${i}' ondrop="drop(event)" ondragover="dragOver(event)"></p>`
}

const boxPosition=[
    {id:'box1',rank:1},
    {id:'box2',rank:10},
    {id:'box3',rank:15},
    {id:'box4',rank:21},
    {id:'box5',rank:74},
    {id:'box6',rank:3},
]

const back=document.querySelectorAll('.back')

boxPosition.forEach(item=>{
    back[item.rank].innerHTML=` <p id="${item.id}" class="box" draggable="true" ondragstart="drag(event)">${item.rank}</p>`
})


const box=document.querySelectorAll('.box');

// box.forEach(item=>{
//     /**
//      * 拖拽开始
//      */
//     item.addEventListener('dragstart',function(event){
//         console.log(event)
//     })
//     /**
//      * 拖拽中
//      */
//     item.addEventListener('drag',function(event){
//         item.style.left=`${event.offsetX}px`;
//         item.style.top=`${event.offsetY}px`;
//     })
//     /**
//      * 拖拽结束
//      */
//     item.addEventListener('dragend',function(event){
//         console.log(event.offsetX,event.offsetY)
//         item.style.left=`${event.offsetX}px`;
//         item.style.top=`${event.offsetY}px`;
//     })
// })


// container.addEventListener('mousemove',function(e){
//     const offsetX=event.offsetX;
//     const offsetY=event.offsetY;
//     console.log('mousemove',offsetX,offsetY)
// })






