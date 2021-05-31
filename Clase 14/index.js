
window.onload = () => {
    let imagesOne = document.getElementById("images-one");
    let quoteOne = document.getElementById("quote-one");
    let titOne = document.getElementById("tit-one");


    // se ejecuta servicio para obtener trending gifos desde GIPHY
    getRequestQuote();

    // funcion de que ejecuta fetch para obtener los trending Gifos 
    async function getRequestQuote() {
        const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=8";
        let response = await fetch(url);
        let data = await response.json();
        renderQuote(data);
    }

    let listQuote = document.getElementById("list-quote");
    let li;
    let newQuote;

    function renderQuote(quote) {
        console.log(quote);
        for (let i = 0; i < quote.length; i++) {
            if (i == 0) {
                imagesOne.setAttribute("src", quote[i].image);
                quoteOne.innerHTML = quote[i].quote;
                // titOne.innerHTML = [i].quote;
               continue;
            }

            li = document.createElement("li");
            li.innerHTML = `<img id="quote${i}"/> <p>${quote[i].quote}</p> `;
            listQuote.appendChild(li);
            document.getElementById(`quote${i}`).setAttribute("src", quote[i].image)

        }
    }
}