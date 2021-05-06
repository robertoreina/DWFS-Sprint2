window.onload = () => {

    // fetch('https://api.github.com/users/roberto')
    //     .then((response) => {
    //         return response.json()
    //     }).then(
    //         (json) => {
    //             return json.followers_url;
    //         }
    //     ).then((followers_url) => {

    //     }
    // )

    // let lista = document.getElementById("lista");

    // fetch('https://api.github.com/users/roberto/followers')
    //     .then((response) => {
    //         return response.json()
    //     }).then(
    //         (json) => {
    //             for (let index = 0; index < 5; index++) {
    //                 let li = document.createElement("li");
    //                 li.innerHTML = json[index].login;
    //                 lista.appendChild(li)
    //             }
    //         }
    //     )



    // let lista = document.getElementById("lista");

    fetch('https://api.giphy.com/v1/trending/searches?api_key=lrnG9FoHoVNeYhrRPSGA1MtbbERL9qZL')
        .then((response) => {
            if (response.ok) {
            
                console.log(response.status, response.ok, response.statusText, response.message);
                return response.json()
            } else {
                console.log(response.status, response.ok, response.statusText);
            }

        }).then(
            (json) => {
                console.log(json);
            }
        ).catch(err => 
            console.log('Hubo un problema con la petición Fetch:' + err.message)
        )
}