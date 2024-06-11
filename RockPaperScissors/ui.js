// selects the #container div 
const container = document.querySelector("#container");
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})

// creates a new div referenced in the variable content
const content0 = document.createElement("div");
// adds a class and some text to the content div
content0.classList.add("content0");
content0.textContent = "This is the glorious text-content!";
// appends that div to container
container.appendChild(content0);

const content1 = document.createElement("p");
content1.classList.add("content1");
content1.textContent = "Hey I'm red!";
container.appendChild(content1);

const content2 = document.createElement("h3");
content2.classList.add("content2");
content2.textContent = "I'm a blue h3!";
container.appendChild(content2);

const content3 = document.createElement("div");
content3.classList.add("content3");
content3.setAttribute("style", "border : solid 1px black; background : pink");
    
    const content4 = document.createElement("h1");
    content4.classList.add("content4");
    content4.textContent = "I'm in a div of content3!";
    content3.appendChild(content4);
    
    const content5 = document.createElement("p");
    content5.classList.add("content5");
    content5.textContent = "ME TOO!";
    content3.appendChild(content5);

container.appendChild(content3);

function alertFunctionButton3() {
    alert("Button3");
}

const button1 = document.querySelector("#button1");
button1.onclick = () => alert("Button1");

const button4 = document.querySelector("#button4")
button4.onclick =  alertFunctionButton4;
function alertFunctionButton4() {
    alert ("Button4")
}

const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {alert("Button2");});

const button5 = document.querySelector("#button5")
button5.addEventListener("click", alertFunctionButton5);
function alertFunctionButton5() {
    alert ("Button5"); 
}

const button6 = document.querySelector("#button6");
button6.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = "blue"; 
});