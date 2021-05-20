const url = "https://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + url;

const productContainer = document.querySelector(".posts");

async function getPosts() {
    try{
        const response = await fetch(corsFix);
        const getResults = await response.json();
        productContainer.innerHTML = "";
        createHTML(getResults);

    }
    catch(error){
        console.log(error);
        productContainer.innerHTML = "Oops! Something went wrong, please try again later.";;
    }
}
getPosts();

function createHTML(posts){
    posts.forEach(function(post){

        productContainer.innerHTML += `<a href="blogspecific.html?id=${post.id}" class="container">
                                        <div>
                                        <img src="${post.featured_media_src_url}">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.excerpt.rendered}<p>
                                        </div>`;


    })
}
 


 const urlPagetwo = "http://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts?page=2";
const corsFixpagetwo = "https://noroffcors.herokuapp.com/" + urlPagetwo;

const loadAllButton = document.querySelector(".load-all-btn");

async function getPostspagetwo() {
    try{
        const response = await fetch(corsFixpagetwo);
        const getResultspagetwo = await response.json();
       
         createHTMLpagetwo(getResultspagetwo);
    }
    catch(error){
        console.log(error);
        productContainer.innerHTML = "Oops! Something went wrong, please try again later.";
    }
}


 function createHTMLpagetwo(posts) {
    
    posts.forEach(function(post){
        productContainer.innerHTML += `<a href="blogspecific.html?id=${post.id}" class="container">
                                        <div>
                                        <img src="${post.featured_media_src_url}">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.excerpt.rendered}<p>
                                        </div>`;
    })
  
} 
loadAllButton.addEventListener("click", getPostspagetwo);

loadAllButton.onclick = function() {
    loadAllButton.disabled = true;
    
}