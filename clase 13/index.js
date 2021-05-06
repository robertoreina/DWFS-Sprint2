window.onload = () =>{

    buscarPelicula();

  let plot = document.getElementById("plot");
  let poster = document.getElementById("poster");
  let titulo = document.getElementById("titulo");


  async function buscarPelicula() {
     let url = "http://www.omdbapi.com/?apikey=7fb789f2&t=The+lord+of+the+rings"
     let response = await fetch(url)
     let info = await response.json();
  
        renderizarPeli(info)
    } 

function renderizarPeli(infoPeli) {
    poster.setAttribute("src", infoPeli.Poster)
    titulo.innerHTML = infoPeli.Title
    plot.innerHTML = infoPeli.Plot;
}

}