const likeButtonClick = document.getElementById('likeButton');

likeButtonClick.addEventListener("click", async (event) => {
    console.log(event);
    const likeFetch = await fetch('/meme/4/upLike');

})

// console.log(likeButtonClick);
