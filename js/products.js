

import { getJackets } from "./api.js";

const jacketFrontPageContainer = document.querySelector(".frontpage-products");

    async function frontPageJackets() {
        const jacket = await getJackets();
    

    for (let i = 0; i < 4; i++) {
        console.log(jacket[i]);

        jacketFrontPageContainer.innerHTML += `
        <div class="frontpage-products-lower"><a href="jacket-specific.html"><img src="${jacket[i].image}" alt="${jacket[i].title}"></a>
        <div class="frontpage-product-title-and-heart">
        <h4>${jacket[i].title}</h4>
        <i class="fa-regular fa-heart fa-lg"></i></div>
        <p>USD ${jacket[i].price}</p>
        </div>`

    }
}

frontPageJackets();