const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
});



// const resultArtist = document.getElementById("result-artist");
// const playlistContainer = document.getElementById("result-playlists");
// const searchInput = document.getElementById("search-input");

// function requestApi(searchTerm) {
//     fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
//         .then((response) => response.json())
//         .then((results) => displayResults(results));
// }

// function displayResults(results) {
//     hidePlaylists();
//     const artistImage = document.getElementById("artist-img");
//     const artistName = document.getElementById("artist-name");

//     results.forEach((element) => {
//         artistImage.src = element.urlImg;
//         artistName.innerText = element.name;
//     });

//     resultArtist.classList.remove("hidden");
// }

// function hidePlaylists() {
//     playlistContainer.classList.add("hidden");
// }

// searchInput.addEventListener("input", function () {
//     const searchTerm = searchInput.value.toLowerCase();
//     if (searchTerm === "") {
//         resultArtist.classList.add("hidden");
//         playlistContainer.classList.remove("hidden");
//         return;
//     }
//     requestApi(searchTerm);
// });