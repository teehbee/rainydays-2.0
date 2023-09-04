import { getJackets } from "../js/api.js";

const jacketWomenContainer = document.querySelector(".jackets-for-sale");

  async function womanPageJackets() {
    try {
      const jacketForWomen = await getJackets();
      const fetchLoader = document.querySelector(".loader");
      fetchLoader.classList.remove("loader");

      for (let i = 0; i < 6; i++) {
        console.log(jacketForWomen[i]);

        jacketWomenContainer.innerHTML += `
        <div class="jacket-tile"><a href="../jacket-specific.html"><img src="${jacketForWomen[i].image}" alt="${jacketForWomen[i].title}"></a>
        <div class="frontpage-product-title-and-heart">
          <h3>${jacketForWomen[i].title}</h3>
          <i class="fa-regular fa-heart fa-lg"></i>
        </div>
        <p>USD ${jacketForWomen[i].price}</p>
      </div>`
    }
    } catch(error) {
      console.log("Something is wrong");
      jacketWomenContainer.innerHTML = `<p>Something went wrong!</p>`;
    }
  
  }

  womanPageJackets();
