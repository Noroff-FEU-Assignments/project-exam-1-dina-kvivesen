const container = document.querySelector(".post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const api_url = "https://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + api_url;
const url = corsFix + id;

async function getPost() {
    try {
    const response = await fetch(url);
    const details = await response.json();

document.title = details.title.rendered;
var breadcrumb = document.querySelector("#blogpost");
breadcrumb.innerHTML = document.title;

const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".wp-block-image size-large is-resized");


document.addEventListener("click", function(event) {
    if (!event.target.matches("figure img")) return;

    let imageClone = event.target.cloneNode(true);
   
    modal.classList.add("open");

    imageClone.classList.add("open");
    modal.appendChild(imageClone);
})

modal.addEventListener("click", function(e) {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove("open");
    }
})

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


 


