const element = document.getElementById("myH1");
let text = element.getAttribute("democlass");
document.getElementById("demo").innerHTML = text;


function myFunction(){
    document.getElementById("myH1").setAttribute("class", "democlass")
}


// Create Element
// const heading = document.createElement("h2");
// //get the parent
// const bodytag = document.getElementByTagName("body");
// //add element at the position using append method
// bodytag[0].append(heading);
// heading.innerText="Hello";headingstyle.background-color="red"


// function practice(){
//     document.open();
//     document.write("<h1>")
// }



// function onMouseOver(){
//     console.log("ON Mouse Over")
// ;}


// const x = document.querySelector("input");
// x.addEventListener("focus", onhandlefocus);
// x.addEventListener("blur", onhandleblur);

// function onhandlefocus(){
//     x.style.background="Red";
// }
// function onhandlefocus(){
//     x.style.background="Yellow";
//     x.style.background="Green";
// }