const add_notes = document.getElementById("add_note");
const main=document.querySelector("#whole_page");
const green=document.querySelector('.greenbtn');
// const light_gray=document.querySelector('.light_graybtn');
const purple=document.querySelector('.purplebtn');
const yellow=document.querySelector('.yellowbtn');
const gray=document.querySelector('.graybtn');



/* Creating an empty array. */
// let colorarray=[];
    green.addEventListener('click',function(){
        // console.log(clicked);
       addnote("","green");
    })
    purple.addEventListener('click',function(){
       addnote("","purple");
    })
    yellow.addEventListener('click',function(){
       addnote("","yellow");
    })
    // light_gray.addEventListener('click',function(){
    //    addnote("","light_gray");
    // })
    gray.addEventListener('click',function(){
       addnote("","gray");
    })
   

add_notes.addEventListener("click", function () {
  addnote();
});
let addnote = (text="",color="") => {
  // console.log("clicked")
// colorarray.push(color);
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="toolbar ">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea class='${color}'>${text}</textarea>
    `;
    note.querySelector('.trash').addEventListener('click',function(){
        note.remove();
        savenotes();
    })
    note.querySelector('.save').addEventListener('click',function(){
        savenotes();
    })
    note.querySelector('textarea').addEventListener('focusout',function(){
        savenotes();
    })
    main.appendChild(note);
    savenotes();
}

const savenotes=()=>{
    const notes=document.querySelectorAll('.note textarea');
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
        )
        // console.log(data);
        if(data.length==0){
            localStorage.removeItem('notes');
        }
        else{
            localStorage.setItem("notes",JSON.stringify(data));
            // localStorage.setItem('colors',JSON.stringify(colorarray));
        }
}

(
function(){
const lsnotes=JSON.parse(localStorage.getItem('notes'));
// const col=JSON.parse(localStorage.getItem('colors'));
if(lsnotes==null){
    addnote("","white");
}
else{
    lsnotes.forEach(
        (lsnotes)=>{
            addnote(lsnotes);
        }
    )
}
}
)()
