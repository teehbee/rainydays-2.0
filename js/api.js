const url = "https://api.noroff.dev/api/v1/rainy-days/";

export async function getJackets() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        return result; 

        } catch {
          error();
        }
    }