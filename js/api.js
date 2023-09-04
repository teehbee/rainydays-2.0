const url = "https://api.noroff.dev/api/v1/rainy-days/";

async function getJackets() {

const response = await fetch(url);

const jacket = await response.json();

return jacket;
}

export { getJackets };