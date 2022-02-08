// test curls 
// curl https://www.geeksforgeeks.org 

/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {   // TODO: Make an ajax request to the searchShows api.  Remove   // hard coded data.
  let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);  //console.log(res.data);
  let showPop = [];   
    for (id in res.data){
      if (res.data[id].show.image === null || res.data[id].show.image.medium === undefined){
        res.data[id].show.image = {medium: 'https://tinyurl.com/tv-missing'}
      } 
      showPop.push(res.data[id].show)
    }
  return showPop;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) { //console.log(shows);
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) { 
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>             
             <img class="card-img-top" src="${show.image.medium}">
             <button data-button-id="${show.id * 2}" class="button" id="button">Episodes</button>
           </div>
         </div>
       </div>
      `);      
    $showsList.append($item); 
  }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val(); //console.log(query);
  if (!query) return;
  $("#episodes-area").hide();

  let shows = await searchShows(query); //console.log(shows);
  
  populateShows(shows)
});

$(document).on("click", "#button", function(){
  document.getElementById("episodes-list").innerText = ""; //console.log("Clicked");
  const currButt = this.dataset.buttonId; //console.log(currButt); 
  getEpisodes(currButt)
}); 

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) { //console.log(id);
  try {
  let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  document.getElementById("episodes-area").setAttribute("style", "block");
  let parent = document.getElementById("episodes-list");
  parent.setAttribute('style', 'block'); //  console.log(parent); console.log(res.data); console.log(res.data[0].season); console.log(res.data[0].number);
  for (id in res.data){
    let child = document.createElement("li")
    child.innerText = ("season " + res.data[id].season + ", number " + res.data[id].number);
    child.innerText = (`season ${res.data[id].season}, number ${res.data[id].number}`);
    parent.appendChild(child);
  } 
} catch(err) {
  document.getElementById("episodes-area").setAttribute("style", "block");
  let parent = document.getElementById("episodes-list");
  parent.setAttribute('style', 'block'); 
  console.log("nerp");
  let child = document.createElement("p")
  child.innerText = "No Episode List Available"
  parent.appendChild(child);
  }
}
 