// const app = function(){
//
//   let catUl = document.createElement("ul");
//   catUl.classList.add("cat");
//
//   let name = document.createElement("li");
//   name.innerText = "Name: Mummy's Little Darling";
//
//   let favFood = document.createElement("li");
//   favFood.innerText = "Favourite Food: Dormice, little birds, assorted other innocents";
//
//   let photo = document.createElement("li");
//   photo.innerHTML = '<img width="500" src="../hangover-237197_640.jpg">';
//
//   catUl.appendChild(name);
//
//   catUl.appendChild(favFood);
//
//   catUl.appendChild(photo);
//
//   let cats = document.querySelector("#cats");
//   cats.appendChild(catUl);
//
// };
//
// window.onload = app;


var createCatUl = function(){
    let catUl = document.createElement("ul");
    catUl.classList.add("cat");
    return catUl;
};

var createName = function(cat){
    let name = document.createElement("li");
    name.innerText = cat;
    return name;
};

var createFavFood = function(food){
    let favFood = document.createElement("li");
    favFood.innerText = food;
    return favFood;
};

var createPhoto = function(pic){
    let photo = document.createElement("li");
    photo.innerHTML = pic;
    return photo;
};


var appendElements = function(catUl, name, favFood, photo){
  catUl.appendChild(name);
  catUl.appendChild(favFood);
  catUl.appendChild(photo);
  let cats = document.querySelector("#cats");
  cats.appendChild(catUl);
};



var addCat = function(cat, food, pic) {
  var catUl = createCatUl();
  var name = createName(cat);
  var favFood = createFavFood(food);
  var photo = createPhoto(pic);

  appendElements(catUl, name, favFood, photo);
}



window.onload = function(){
  addCat("Name: Mummy's Little Darling", 'Favourite Food: Dormice, little birds, assorted other innocents', '<img width="300" src="../hangover-237197_640.jpg">');
}
