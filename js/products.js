const jacketFrontPageContainer = document.querySelector(".frontpage-products");

const url = "https://api.noroff.dev/api/v1/rainy-days/";

async function getJackets() {

    const response = await fetch(url); 

    const jacket = await response.json();

    for (let i = 0; i < jacket.length; i++) {
        console.log(jacket[i]);

        if (i === 4) {
            break;
        }

        jacketFrontPageContainer.innerHTML += `
        <div class="frontpage-products-lower"><a href="jacket-specific.html"><img src="${jacket[i].image}" alt="${jacket[i].title}"></a>
        <div class="frontpage-product-title-and-heart">
        <h4>${jacket[i].title}</h4>
        <i class="fa-regular fa-heart fa-lg"></i></div>
        <p>USD ${jacket[i].price}</p>
        </div>`

    }
}

getJackets();