window.onload = () =>{

    let pokemones = [23, 52, 53, 120, 44, 445, 320, 112, 333, 222]

    function buscarPokemones(numero) {
        return new Promise((resolve, reject) => {

            console.log(numero)
            fetch('https://pokeapi.co/api/v2/pokemon/' +  numero)
            .then((response) => {
              return response.json(); 
            //   console.log(response.json()) 
            }).then((json) => {
                // console.log(json)
                resolve(json);
            })
        })
    }

    let num    
    num = Math.floor(Math.random() * pokemones.length);
    // console.log(num)

    let lista = document.getElementById("lista");

    Promise.race([buscarPokemones(pokemones[Math.floor(Math.random() * pokemones.length)]),
         buscarPokemones(pokemones[Math.floor(Math.random() * pokemones.length)]
         ), buscarPokemones(pokemones[Math.floor(Math.random() * pokemones.length)])])
    .then( response =>{
        let li = document.createElement("li");
        li.innerHTML = `<span>${response.name}</span> <img src="${response.sprites.front_default}">`
        console.log(response.name)
        console.log(response.sprites.front_default)
        lista.appendChild(li);

        // let img = document.createElement("img");

        // img.attributes.src = response.sprites.front_default;
        // console.log(img.attributes.src)
        // li.appendChild(img);



    })

}