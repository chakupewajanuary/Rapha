const age=34;
console.log(age);

function addnumber( num1 ,num2){
     this.num1=num1;
     this.num2=num2;
     const vai=num1+num2;
     return vai;
}
addnumber(2,3);

const Form=document.querySelector('.form');
const Name=document.getElementById('name');
const Email=document.getElementById('email');
const Btn=document.querySelector('.Btn');

Form.addEventListener('submit',onSubmit);

function onSubmit(e){
     e.preventDefault();
     if(Name.value===''||Email.value===''){
          console.log("there is one who trying to access a web without filling the requires creditial")

     }
}
const may="2024-03-15";
console.log(may.FullYear());

