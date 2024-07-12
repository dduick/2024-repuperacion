const apiURL = "https://newsapi.org/v2/everything?q=apple&from=2024-07-11&to=2024-07-11&sortBy=popularity&apiKey=d1746d612e2d43edb41f9c59ea978e8c"

export default async function News() {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
}