//Selete item//

const form = document.querySelector(".form")
const alert = document.querySelector(".alert")
const option = document.getElementById("info")
const submit = document.querySelector(".btn")
const container = document.querySelector(".details")
const subcontainer = document.querySelector(".item")
const clear= document.querySelector(".clear")

//Edit Opition
let editElement;
let editFlag = false;
let editID = "";

//Event Lisiten
form.addEventListener("submit", addItem)
clear.addEventListener("click", clearGoods)
//function
function addItem(e){
e.preventDefault()
// console.log(option.value)
const Mvalue = option.value
const id = new Date().getTime().toString()

if( Mvalue !== "" && editFlag===false){
  // console.log("inpute")
  const element = document.createElement("article")
  element.classList.add("article-list")

  const atri = document.createAttribute("data-id")
  atri.value= id
  element.setAttributeNode(atri)

  element.innerHTML = `<p class="list">${Mvalue}</p>
  <div class="btn-container">
    <button class="rewrite" type="button"> <i class="fas fa-edit"></i></button>
    <button class="delete" type="button"> <i class="fas fa-trash"></i></button>
  </div>`;

  //edit and delete funtion
   const editBtn = element.querySelector(".rewrite")
   const deleteBtn = element.querySelector(".delete")

   editBtn.addEventListener("click", editItem)
   deleteBtn.addEventListener("click", deleteItem)
   //display
  subcontainer.appendChild(element)
  displayAlet("Item has been added to the list", "sucess")
   container.classList.add("showMan")
  // console.log(Mvalue)
  addToLocalSrorage(id, Mvalue)
  setBackToDefult()
}

else if(Mvalue !== "" && editFlag === true){
    // console.log("editinf")
    editElement.innerHTML = Mvalue

    displayAlet("The Value Has Been Changed", "sucess")
    // setBackToDefult()

    
}

else{
   displayAlet("Please Enter A Value", "danger")
}
setBackToDefult()
}

function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id
  subcontainer.removeChild(element)
  if(subcontainer.children.length == 0){
    container.classList.remove("showMan")
  }
  setBackToDefult()
  displayAlet("Please Enter A Value", "danger")
  // console.log("call my name")
}

//editing function
function editItem(e){

  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling
  option.value = editElement.innerHTML
 editFlag = true;
 editID = element.dataset.id
 submit.textContent = "edit"

  // console.log("this is boss")
  // setBackToDefult()
}
//another 


//displayalet
function displayAlet(text,action){
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  setTimeout(function(){
 
  alert.textContent = ""
  alert.classList.remove(`alert-${action}`)

  }, 1000)
}
// }

function clearGoods (){
  const foodlist = document.querySelectorAll(".article-list")
  if(foodlist.length > 0){
    foodlist.forEach(function(food){
    subcontainer.removeChild(food)
    })
  }
  container.classList.remove("showMan")
  displayAlet("Please Enter A Value", "danger")
  setBackToDefult()
}

function setBackToDefult(){
  option.value = "";

  let editFlag = false;
  let editID = "";
  submit.textContent = "submit"
  // console.log("this boy is fine oo")
}

//trying function
function resloveEdit(){
  option.value !== editElement()
}

//
//local storage
function addToLocalSrorage(id, Mvalue){
  console.log("leave")
}
console.log(editElement())
//setup items