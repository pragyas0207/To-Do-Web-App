const inputBox=document.getElementById("input-box");
const listBox=document.getElementById("list-box");
function addTask(){
    if(inputBox.value==="")     //Checking if input is empty
        {
        alert("You must add a Task!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listBox.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";  //to display a cross(x) at the end of li...in order to cancel out the task
        li.appendChild(span)   //we hav to add css for this 'x'
    }
    //Now, after we write a task into input box and add...task is added and the text is still there in input box so...we have to clear it once task is added
    inputBox.value="";  //Here, after loop is done, set input to empty
    saveData();
}

listBox.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");   //everytime u click on the <li>ele, it toggles b/w 'checked'(in CSS u see) and ntg
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();   //if we click on 'span' tag ele, it removes the parent ale i.e., the corresponding 'li' tag
        saveData();
    }
},false);

//Whenever we refresh...all tasks added r gone so...
function saveData(){
    localStorage.setItem("data",listBox.innerHTML)   
    //listBox.innerHTML is the entire content to save
    //data is the name(or var) in which u r storing content
//And when u add new data/task again, it shud save it so...add this to addTask()
}

//To display this data whenever the website opened again
function showData(){
    listBox.innerHTML=localStorage.getItem("data");
}
showData();