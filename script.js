// The elements from index.html are accessed through their id's here.
// The first search bar is for movies and the second one for actor/actress.

const API_Key ='k_bfwtv1du'
const API_KEY2 = 'k_d02b11k9';

const url = 'https://imdb-api.com/en/API/SearchMovie/k_bfwtv1du';
const url2 = 'https://imdb-api.com/en/API/SearchName/k_d02b11k9';

const btn_emt = document.querySelector("#submit1");
const inp_emt = document.querySelector("#movie1");
const btn_emt2 = document.querySelector("#submit2");
const inp_emt2 = document.querySelector("#movie2");
const movieSearchable = document.querySelector("#showmovies");


function movieSection(movies){
    return movies.map((Movie) => {

        //return code below can be customized using html and css

        return`
            <img src=${Movie.image} data-Movie-id=${Movie.id}/>
            <h1>${Movie.title}</h1>;
            <h4>${Movie.description}</h4>
        `   
        ;
    })
}


function createMovieContainer(movies){
                                             
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'Movie');

    const template = `
        <section class="section">
            ${movieSection(movies)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = template;
    return movieElement;
}

btn_emt.onclick = function(event){
    event.preventDefault();
    const value = inp_emt.value;
    
    const newurl = url + '/'+value;

    fetch(newurl)
  .then((response) => response.json())
  .then((data) =>{

    const movies =data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);

      console.log('Data:',data);
  })
  .catch(error => console.log('Error:', error));

    console.log("Value:",value);   

}



function nameSection(names){
    return names.map((Name) => {
        return`
            <img src=${Name.image} data-Name-id=${Name.id}/>
            <h1>${Name.title}</h1>;
            <h4>${Name.description}</h4>
        `   
        ;
    })
}

function createnameContainer(names){
                                             
    const nameElement = document.createElement('div');
    nameElement.setAttribute('class', 'Name');

    const template = `
        <section class="section">
            ${nameSection(names)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    nameElement.innerHTML = template;
    return nameElement;
}

btn_emt2.onclick = function(event){
    event.preventDefault();
    const value = inp_emt2.value;
    
    const newurl = url2 + '/'+value;

    fetch(newurl)
  .then((response) => response.json())
  .then((data) =>{

    const names =data.results;
    const movieBlock = createMovieContainer(names);
    movieSearchable.appendChild(movieBlock);

      console.log('Data:',data);
  })
  .catch(error => console.log('Error:', error));

    console.log("Value:",value);   

}