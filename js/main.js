const elList = document.querySelector(".films-inner");
const elInput = document.querySelector(".input");
const elForm = document.querySelector(".form");  



function geTime(time){
    const date = new Date(time);
    var year = date.getFullYear();
    
    return year;
}


function renderFilm(film){
    elList.innerHTML ="";
    for (let i = 0; i < film.length; i++) {
        const newDiv = document.createElement("div");
        const filmsTime = geTime(film[i].release_date * 1000)    
        
        
        newDiv.className = "col-4";
        
        newDiv.innerHTML = `
        <div class="card">
        <div class="col-6 mx-auto p-3">
        <img class="card-img"    
        src="${film[i].poster}" alt="#">
        </div>
        <button class="delete btn btn-danger rounded-circle position-absolute end-0 m-2" data-id="${film[i].id}">X</button>
        
        <div class="p-3">
        <div class="title-div">
        <h3 class="text-danger fw-bold fs-3">${film[i].title}</h3>
        </div>
        <div class="text-div">
        <p class="card-text  text-white">${film[i].overview}</p></div>
        <div class="d-flex align-items-center">
        <p class="text-danger">${film[i].genres.join("/")}</p>
        <p class="text-white ms-auto">${filmsTime}</p>
        </div>
        </div>
        </div>`;
        
        elList.appendChild(newDiv);
        
    }
}
renderFilm(films);


elForm.addEventListener("input", function(evt){
    evt.preventDefault();
    const input = elInput.value;
    
    var filter = films.filter((arr) => {
        if  (arr.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
            return arr;
        }
    });
    
    renderFilm(filter);
});


elList.addEventListener("click", function (evt) {
    const del = evt.target;
    
    if (del.className.includes("delete")) {
        const id = Number(del.dataset.id);

        const newArray = []
        for (let i = 0; i < films.length; i++) {
            const element = films[i];
            
            if (element.id != id) {
                newArray.push(element);
                console.log("delete")
            }
        }
        console.log(id)
        films = newArray
        renderFilm(films)
    }
});


