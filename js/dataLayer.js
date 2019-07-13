var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://cors-anywhere.herokuapp.com/http://www.fulek.com/VUA/SUPIT/GetCategoriesAndFoods',
    true);
xhr.onload = function () {
    if (this.status == 200) {
        processResponse(this.responseText)
    }
};

xhr.send();

function processResponse(responseText) {
    var menu = JSON.parse(responseText);
    

    let menuDivContainer = document.getElementById("container")

    for (var i = 0; i < menu.length; i++) {
        let menuItem = menu[i]
        // Get desired objects
        let id = menuItem.Id
        let name = menuItem.Naziv
        let offerArray = menuItem.Ponuda

        // Create menu item div with class
        let menuDivItem = document.createElement("div")
        menuDivItem.innerHTML = `${id}: ${name}`
        menuDivItem.classList.add("menu")

        // Append menuDivItem in menuDivContainer
        menuDivContainer.appendChild(menuDivItem)

        // Loop in offerArray
        for (var j = 0; j < offerArray.length; j++) {

            // Get objects from offer
            let offer = offerArray[j]
            let offerId = offer.JeloId
            let offerName = offer.Naziv
            let price = offer.Cijena
            let description = offer.Opis
            

            // Cuisine div
            let offerDiv = document.createElement("div")
            offerDiv.innerHTML = `${offerId}: ${offerName} ${price} Kn`
            offerDiv.classList.add("cuisine")

            // Naruči button
            let orderButton = document.createElement("button")
            orderButton.classList.add("naruci")
            let order = 'Naruči'
            orderButton.innerHTML = `${order}`
            offerDiv.appendChild(orderButton)

            // Append offerDiv in menuDivItem
            menuDivItem.appendChild(offerDiv)

            orderButton.addEventListener("click", function() {
                var orderList = document.getElementById('orderList').append(offerName + '\n');
            })
        }
    }
    
    
}

/* Loading */

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });
  