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

const taboos=[{
     id:1,
     name:'',
     address:{
          ciy:"mwanza",
          street:'usagara',
          school:'usagara sec school'
     },
     hobies:['music','dances']
}];
const tai=taboos.hobies[1];
console.log(tai);

class Sum{
     constructor(n1,n2){
          this.n1=n1;
          this.n2=n2;
     }
     computeSum(){
          const add= this.n1+this.n2;
          return add;
     }
     computeRinder(){
          const reminder=this.n1-this.n2;
          return reminder;
     }
     
}
const leo=new Sum(1,3);
let naa=leo.computeRinder();
let na=leo.computeSum();
console.log(naa);
console.log(na);
console.log('mdogo mdogo nitajua tu one day yes');
console.clear();
let yes;
yes="waliochelewa pita mbele"
alert('man of the people enter his offisssi to look the demands of the people')