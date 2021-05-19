const url = "http://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + url;

const productContainer = document.querySelector(".posts");

async function getPosts() {
    try{
        const response = await fetch(corsFix);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error){
        console.log(error);
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