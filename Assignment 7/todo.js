const tasks = [];
const activeTasks = 0;
const doneTasks = 0;

document.getElementById("active").innerHTML = activeTasks;
document.getElementById("done").innerHTML = doneTasks;

document.getElementById("newTask").addEventListener(
  "click",
  (addTask = obj => {
    if (document.getElementById("todo").value == "") {
      alert(
        "Please write something in the input field or this 'to do' list won't have much purpose..."
      );
    } else {
      var activeTasks = 0;
      let inputVerdi = document.getElementById("todo").value;

      let checkbox = document.createElement("input"); //Creates a input element.
      checkbox.type = "checkbox"; //Makes the created input element a checkbox.
      checkbox.id = inputVerdi.date; //Gives the checkbox a unique ID.
      checkbox.name = "todo[]";

      let node = document.createElement("LI"); //Creates a li element.
      let label = document.createElement("label"); //Creates a label element.
      label.htmlFor = checkbox.id; //Gives the label a for attribute with the unique checkbox' ID so they are linked.
      let textnode = document.createTextNode(inputVerdi); //Defines what will be writen in one of the other elements.

      node.appendChild(checkbox); //Inserts the checkbox into the li element.
      label.appendChild(textnode); //Inserts the text into the label element.
      node.appendChild(label); //Inserts the label into the li element, but after the checkbox element.

      let todoList = document.getElementById("activeTasks"); //Defines the space where the list is meant to be writen.
      todoList.insertBefore(node, todoList.firstChild); //Will insert the li element into the ul element but before what has already been writen there. Will aslo only write first child which will be the text.

      newTask();

      tasks.forEach(function(element, i) {
        activeTasks++;
      });

      document.getElementById("active").innerHTML = activeTasks;
    }
  })
);

const newTask = () => {
  text = document.getElementById("todo").value;
  let taskObj = {
    text: text,
    date: Date.now()
  };

  tasks.push(taskObj);
  console.log(tasks);
};

document.getElementById("activeTasks").addEventListener(
  "click",
  (checkboxes = () => {
    var inputElems = document.getElementsByTagName("INPUT"),
      doneTasks = 0;

    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
        doneTasks++;
      }
    }

    document.getElementById("done").innerHTML = doneTasks;

    var checkbox = document.getElementsByName("todo[]");

    if (checkbox.length == doneTasks) {
      endOwo();
    }
  })
);

//Not important

const endOwo = () => {
  document.body.style.background = "black";
  var audio = new Audio("megalovania.mp3");
  audio.play();
  var surprise = document.getElementById("s4nsOmegalul");
  if (surprise.style.display === "none") {
    surprise.style.display = "flex";
  } else {
    surprise.style.display = "none";
  }
};

const getPrankedlmao = () => {
  window.open("https://store.steampowered.com/app/391540/Undertale/");
};
