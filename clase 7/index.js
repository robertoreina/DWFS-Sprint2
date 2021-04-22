let byId = document.getElementsByTagName("li");

for (let index = 0; index < byId.length; index++) {
    console.log(byId[index].innerHTML);
    byId[index].innerHTML = 'Elemento' + index + "modificado con .js";
}



