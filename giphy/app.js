console.log("Let's get this party started!");

// giphy api key: oTSnkrNo0T11r3cs9HmkvZyTP9ND87IZ
// app: niftygiphy
// http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=oTSnkrNo0T11r3cs9HmkvZyTP9ND87IZ

// globals

const prevSub = document.getElementById('gifForm');
const sKey = document.querySelector('#searchKey');
const clearBtn = document.getElementById('clear');

//event listeners
prevSub.addEventListener('submit', e => {
    e.preventDefault();
    console.log("SUBMIT!");
    getGifs(sKey.value); 
    sKey.value = '';
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log("SUBMIT!");
    clear();
})

// function 
async function getGifs(searchKey) {
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=oTSnkrNo0T11r3cs9HmkvZyTP9ND87IZ`);
    // console.log(res.data.data.length);
    let gifIndex = (Math.floor(Math.random() * (res.data.data.length + 1)));
    // console.log(gifIndex);
    let resGif = (res.data.data[gifIndex].url);

    let embedURL = (res.data.data[gifIndex].embed_url);
    // console.log(resGif + embedURL);
    let parent = document.getElementById('newGif');
    let child = document.createElement('span');    
    // console.log(parent + "" + child);
    let addGif = `<iframe src=${embedURL} height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href=${resGif}></a>`;
    // document.getElementById("newGif").innerHTML = addGif;
    child.innerHTML = addGif;
    parent.appendChild(child); 
}

function clear(){
    document.getElementById('newGif').innerHTML = "";
}

 

 