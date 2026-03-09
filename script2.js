var myinfo = new Array();
var myinfo1 = Array();
console.log(myinfo, myinfo1);

let collection = [
    {},
    [],
    true,
    "John",
    function(){},
    9000098,
    undefined,
    null,new String("abc"),
    new Date(),
];
console.log(collection);
collection.teacherName = "John Mac";
collection.phoneNo = 983896589427;
console.log(collection[4]);


const result = document.getElementById("para");
result.innerHTML = "my self";
result.title = "myname";
console.log(result)


const result2 = document.getElementsByClassName("heading");
result2.innerHTML = "hii";
console.log(result2)