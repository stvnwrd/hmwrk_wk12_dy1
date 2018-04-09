const app = function(){

  let catUl = document.createElement("ul");
  catUl.classList.add("cat");

  let name = document.createElement("li");
  name.innerText = "Name: Mummy's Little Darling";


  let favFood = document.createElement("li");
  favFood.innerText = "Favourite Food: Dormice, little birds, assorted other innocents"

  let photo = document.createElement("li");
  photo.innerHTML = '<img width="500" src="../hangover-237197_640.jpg">';




  catUl.appendChild(name);

  catUl.appendChild(favFood);

  catUl.appendChild(photo);


  let cats = document.querySelector("#cats");
  cats.appendChild(catUl);

    // debugger;
};

window.onload = app;
