
let btns=document.querySelectorAll(".button");
let newbtn=document.querySelector("#new-btn");
let resetbtn=document.querySelector("#reset-btn");
let para=document.querySelector(".para");

let turnO=true;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
]
let newgame=()=>{
  for(let btn of btns){
     btn.disabled=false;
     btn.innerText="";
  }
  turnO=true;
  para.classList.add("hide");
}
const disabled=()=>{
  btns.forEach((btn)=> {
    btn.disabled=true;
  });
}
const checkwinner=()=>{
  for(patterns of winPatterns){
   let pos1val= btns[patterns[0]].innerText;
   let pos2val =btns[patterns[1]].innerText;
   let pos3val= btns[patterns[2]].innerText;
   if( pos1val !=""&& pos2val !="" && pos1val !=""){
    if( pos1val === pos2val && pos2val === pos3val){
       disabled();
       para.classList.remove("hide");
       para.innerText="Congratulations Winner is:" +pos1val; 
    }
   }
  }
}


btns.forEach((btn)=> {
    btn.addEventListener("click", () => {
      if(turnO){
        btn.innerText="O";
        turnO=false;
      }
      else{
        btn.innerText="X";
        turnO=true;
      }
      btn.disabled=true;
      checkwinner();
    });
});
newbtn.addEventListener("click", newgame);
resetbtn.addEventListener("click", newgame);