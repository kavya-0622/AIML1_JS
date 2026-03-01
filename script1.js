//Conditional Statement: if
var age = 20;
if(age>18){
    document.write("<br>You are eligible to cast the vote.</br>");
}

//Conditional Statement: if....else
let age = 20;
if(age >=18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}

//Switch Case
var grade='A';
document.write("Entering switch block</br>");
switch(grade){
    case'A':document.write("Good Job</br>");
    break;
    case'B':document.write("Pretty Good</br>");
    break;
    case'C':document.write("Passed</br>");
    break;
    case'D':document.write("Not so good</br>");
    break;
    case'F':document.write("Failed</br>");
    break;
    default:document.write("Unknown grade</br>");
}
document.write("Exiting switch block");


//Function w/o(without) Parameter
function myFunction(){
    alert("Hello World!");
}

//Function with Parameter
function sayHello(name,age){
    document.write(name + " is " + age + " years old.");
}


//Function Return
var res = mul(12,30);
function mul(x,y){
    return x*y;
}
document.write(res);

//Arrow Function
//normal func
function add(a,b){
    console.log(a+b);
};
add(10,20);

//arrow func
var add2 = (a,b) => {
    console.log(a+b);
};
add2(102,20);

//arrow func for single line parameters
var add3 = (a,b) => console.log(a+b);
add3(30,20);

//Object
var person = {
    name:'John Mac',
    age:30,
    isMarried:true,
    adress:{
        street:'Vijay Nagar',
        flatNo:201,
    }
};
console.log(person);

//Creating Object using new keywords 
var person2 = new Object();
person2.name = 'Krishnkant';
person2.age = 32;
person2.isMarried = true ;
person2.address = {} ;
person2.address.street = "nagar road";
person2['address']['flatNo'] = 33;
console.log(person2)

//Accessing Object Properties
var person = {
    name:'John Mac',
    age:30,
    isMarried:true,
    child:['Cheeku'],
    getInfo:function(){
    },
    adress:{
        street:'Vijay Nagar',
        flatNo:201,
    }
};