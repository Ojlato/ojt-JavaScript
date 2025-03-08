const switchbtn=document.getElementById("theme-switcher");
const body=document.querySelector("body");
const addbtn=document.getElementById("add-btn");
const inbt=document.getElementById("addt");
const ul=document.querySelector(".todos");
const filters=document.querySelector(".filter");
const takmil=document.querySelector("#clear-completed")

function main() {
  switchbtn.addEventListener('click',()=> {
    body.classList.toggle("light");
    const Thimg=switchbtn.children[0];
    Thimg.setAttribute("src",
      Thimg.getAttribute("src")==="/src/images/icon-sun.svg"
       ? "/src/images/icon-moon.svg"
        : "/src/images/icon-sun.svg");
  });maketodo(JSON.parse(localStorage.getItem("Todos")));
  
  ul.addEventListener('dragover',(e)=> {
    e.preventDefault();
    if(e.target.classList.contains("card") 
      && !e.target.classList.contains("dragging")) {
        const drag=document.querySelector(".dragging");
        const card=[...ul.querySelectorAll(".card")];
        const curpos=card.indexOf(drag);
        const newpos=card.indexOf(e.target);
        if(curpos>newpos) {
          ul.insertBefore(drag,e.target)
        }else {
          ul.insertBefore(drag,e.target.nextSibling)
        }const t=JSON.parse(localStorage.getItem("Todos"));
        const remow=t.splice(curpos,1);
        t.splice(newpos,0,remow[0]);
        localStorage.setItem("Todos",JSON.stringify(t));
    }
  });
  addbtn.addEventListener('click',()=> {
    const item=inbt.value.trim();
    if(item) {
      inbt.value="";
      const Todo=!localStorage.getItem("Todos") ? [] : JSON.parse(localStorage.getItem("Todos"));
      const current={
        item:item,
        isCompleted:false
      };Todo.push(current);
      localStorage.setItem("Todos",JSON.stringify(Todo));
      maketodo([current]);
    }
  });
  inbt.addEventListener('keydown',(e)=> {
    if(e.key=='Enter') {
      addbtn.click();
    }
  });

  filters.addEventListener('click',(e)=> {
    const id=e.target.id;
    if(id) {
      document.querySelector(".on").classList.remove("on");
      document.getElementById(id).classList.add("on");
      document.querySelector('.todos').className=`todos ${id}`;
    }
  });
  takmil.addEventListener('click',()=> {
    var Delete=[];
    document.querySelectorAll(".card.checked").forEach((Card)=> {
      Delete.push([...document.querySelectorAll(".todos .card")].indexOf(Card));
      Card.classList.add("fall");
      Card.addEventListener('animationend',()=> {
        Card.remove();
      });
    })
    removeall(Delete);
  })
}

function removetodo(index) {
  const deltodo=JSON.parse(localStorage.getItem("Todos"));
  deltodo.splice(index,1);
  localStorage.setItem("Todos",JSON.stringify(deltodo));
}
function tik(index,isComplete) {
  const todoss=JSON.parse(localStorage.getItem("Todos"));
  todoss[index].isCompleted=isComplete;
  localStorage.setItem("Todos",JSON.stringify(todoss));
}

function removeall(indexes) {
  var all=JSON.parse(localStorage.getItem("Todos"));
  all=all.filter((todo,index)=> {
    return !indexes.includes(index);
  });localStorage.setItem("Todos",JSON.stringify(all));
}

function maketodo(todoArray) {
  if(!todoArray) {
    return null;
  };const baghi=document.querySelector("#items-left");
todoArray.forEach(todoobj => {
  const li=document.createElement("li");
  const div=document.createElement("div");
  const input=document.createElement("input");
  const span=document.createElement("span");
  const p=document.createElement("p");
  const Btn=document.createElement("button");
  const img=document.createElement("img");

  li.classList.add("card");
  div.classList.add("cb-container");
  input.classList.add("cb-input");
  span.classList.add("check");
  p.classList.add("item");
  Btn.classList.add("clear");

  li.setAttribute("draggable",true);
  input.setAttribute("type","checkbox");
  img.setAttribute("src","src/images/icon-cross.svg");
  img.setAttribute("alt","Clear It");
  p.textContent=todoobj.item;

  if(todoobj.isCompleted) {
    li.classList.add("checked");
    input.setAttribute('checked','checked');
  }

  li.addEventListener('dragstart',()=> {
    li.classList.add("dragging");
  });li.addEventListener('dragend',()=> {
    li.classList.remove("dragging");
  });input.addEventListener('click',(e)=> {
    const currcard=input.parentElement.parentElement;
    const checked=input.checked;
    const curindex=[...document.querySelectorAll(".todos .card")].indexOf(currcard);
    tik(curindex,checked);
    checked ? currcard.classList.add("checked") : currcard.classList.remove("checked")
    baghi.textContent=document.querySelectorAll(
      ".todos .card:not(.checked)"
    ).length;
  })
  Btn.addEventListener('click',(e)=> {
    const curcard=Btn.parentElement;
    curcard.classList.add('fall');
    const indeks=[...document.querySelectorAll(".todos .card")].indexOf(curcard);
    removetodo(indeks);
    curcard.addEventListener('animationend',()=>{
      setTimeout(()=> {
        curcard.remove();
        baghi.textContent=document.querySelectorAll(
          ".todos .card:not(.checked)"
        ).length;
      },100);
    });
  })

  Btn.appendChild(img);
  div.appendChild(input);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(p);
  li.appendChild(Btn);
  document.querySelector(".todos").appendChild(li);
  });
  baghi.textContent=document.querySelectorAll(
    ".todos .card:not(.checked)"
  ).length;
}
document.addEventListener("DOMContentLoaded",main);