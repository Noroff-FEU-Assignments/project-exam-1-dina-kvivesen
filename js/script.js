const url = "http://dinakvivesen.com/sugarandspice/wp-json/wp/v2/posts/";
const corsFix = "https://noroffcors.herokuapp.com/" + url;

const productContainer = document.querySelector(".slider");

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

    for (let i = 0; i < posts.length; i++) {
        if(i ==+ 4) {
            break;
        }
       var post = posts[i];
        console.log(posts[i]);
        productContainer.innerHTML += `<section><a href="blogspecific.html?id=${post.id}" class="container">
                                        <div>
                                        <img src="${post.featured_media_src_url}">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.excerpt.rendered}<p>
                                        </div></section>`;
         
    } 

    /* posts.forEach(function(post){
        productContainer.innerHTML += `<section><a href="blogspecific.html?id=${post.id}" class="container">
                                        <div>
                                        <img src="${post.featured_media_src_url}">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.excerpt.rendered}<p>
                                        </div></section>`;
                    
                                        
    }) */
    
} 

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

