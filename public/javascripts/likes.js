const likeButtonClick = document.getElementById('likeButton');

likeButtonClick.addEventListener("click", async (event) => {
    console.log(event);
    const likeFetch = await fetch('/meme/3/upLike');
    console.log(likeFetch);

})

// console.log(likeButtonClick);
