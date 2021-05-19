const container = document.querySelector(".post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);
const api_url = "http://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + api_url;
const url = corsFix + id;


async function getPost() {
    try {
    const response = await fetch(url);
    const details = await response.json();

console.log(details);

for (let i = 0; i < details.length; i++) {
    console.log(details[i]);
    
    document.title = details[i].title;

}
createHTML(details);
         
} catch (error) {
    console.log("error occurred", error);
    container.innerHTML = "An error occurred, please try again later.";
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