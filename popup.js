let userTag = document.getElementById("user");
let bulletRatingTag = document.getElementById("bullet");
let blitzRatingTag = document.getElementById("blitz");
let rapidRatingTag = document.getElementById("rapid");

let bulletBestTag = document.getElementById("bullet-best")
let blitzBestTag = document.getElementById("blitz-best")
let rapidBestTag = document.getElementById("rapid-best")

const getUserStats = async (user) => {
    let url = `https://api.chess.com/pub/player/${user}/stats`
    const response = await fetch(url);
    const stats = await response.json();
    updateStats(stats)
    console.log(stats)
}

const updateStats = (stats) =>{
    bulletStats = stats["chess_bullet"]
    blitzStats = stats["chess_blitz"]
    rapidStats = stats["chess_rapid"]

    bulletRatingTag.innerHTML = bulletStats["last"]["rating"];
    blitzRatingTag.innerHTML = blitzStats["last"]["rating"];
    rapidRatingTag.innerHTML = rapidStats["last"]["rating"];

    bulletBestTag.innerHTML = bulletStats["best"]["rating"];
    blitzBestTag.innerHTML = blitzStats["best"]["rating"];
    rapidBestTag.innerHTML = rapidStats["best"]["rating"];
}

chrome.storage.sync.get("user", ({ user }) => {
    userTag.innerHTML = user;
    getUserStats(user)
});


