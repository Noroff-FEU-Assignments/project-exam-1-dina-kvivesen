const container = document.querySelector(".post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const api_url = "http://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + api_url;
const url = corsFix + id;


async function getPost() {
    try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details),

document.title = details.title.rendered;

var breadcrumb = document.querySelector("#blogpost");

breadcrumb.innerHTML = document.title;

createHTML(details);
         
} catch (error) {
    console.log("error occurred", error);
    container.innerHTML = "Oops! Something went wrong, please try again later.";
}
}

getPost();

function createHTML(details)  {
    container.innerHTML = `
    <div class="postdetails">
    <h2>${details.title.rendered}</h2>
    ${details.content.rendered}
    </div>
    `;
}