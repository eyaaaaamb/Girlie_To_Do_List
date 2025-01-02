//variables
const form = document.querySelector('form');
const input = document.querySelector("input");
const clearButton = document.querySelector('#clearAll');
const ul =document.querySelector("ul");
const items=JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
const data=JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
const createLi = (text) => {
    const li = document.createElement("li"); // Create the li element
    li.textContent = text; // Set its text
    ul.appendChild(li); // Append the actual li element to ul
}
//loop through data 
data.map((item) =>{
  createLi(item);
}
);

form.addEventListener('submit',function(e)
{

  e.preventDefault();
    //add to localStorage
    items.push(input.value);
    localStorage.setItem("tasks",JSON.stringify(items));

   //add to ul 
   createLi(input.value);
   input.value= "";

})
clearButton.addEventListener('click',function(){
  ul.textContent="";
  localStorage.clear();
})