const age=34;
console.log(age);

function addnumber( num1 ,num2){
     this.num1=num1;
     this.num2=num2;
     const vai=num1+num2;
     return vai;
}
addnumber(2,3);