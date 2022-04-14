const APIPath = "https://raw.githubusercontent.com/Tiemoue/new_project/main/content.json";
const numberOfResults = 3;
const cartoonGrid = document.querySelector('#cartoon-grid');
const searchBtn = document.querySelector('#btn-search');
const selectBtn = document.querySelector('#genre-option');
const genreValue = document.querySelector('#genre-option').value;
let cartoons = [];

fetch("https://raw.githubusercontent.com/Tiemoue/new_project/main/content.json")
    .then(response => response.json())
    .then((data) => {
        cartoons = data;
        updateCartoons(data);
    });

function updateCartoons(cartoons) {
    let allCardsDom = '';
    cartoons.forEach((cartoon)=>{
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="${cartoon.image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cartoon.title}</h5>
                        <p class="card-text">${cartoon.genre}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    cartoonGrid.innerHTML = allCardsDom;
}


function filterByName() {
    const searchInput = document.querySelector('#search-input').value;
    let filteredArray = [];
    if(searchInput && searchInput.length){
        cartoons.forEach((cartoon) => {
            if(cartoon.title.toLowerCase()
                .includes(searchInput.toLowerCase()))
                filteredArray.push(cartoon);
        });
    }else {
        return cartoons;
    }
    console.log({searchInput});
    console.log(filteredArray);
    return filteredArray;
}

function filterByGenre() {
    const searchInput = document.querySelector('#genre-option').value;
    let filteredArray = [];
    if (searchInput === "Genre") {
        return cartoons;
    }
    if(searchInput && searchInput.length){
        cartoons.forEach((cartoon) => {
            if(cartoon.genre
                .includes(searchInput))
                filteredArray.push(cartoon);
        });
    }else {
        return cartoons;
    }
    console.log({searchInput});
    return filteredArray;
}




searchBtn.addEventListener('click',(e)=>{
    console.log('Search button clicked...');
    let filteredList = filterByName();
    updateCartoons(filteredList);
});

selectBtn.addEventListener('click',(e)=>{
    console.log('Genre button clicked');
    let filteredList = filterByGenre();
    updateCartoons(filteredList);
});
