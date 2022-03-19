
const likeButtonClick = document.getElementById(`likeButton`);


likeButtonClick.addEventListener("click", async (event) => {
    const url = window.location.href;
    const strs = url.split('/');
    const memeId = strs.at(-1)
    // console.log(id)
    // console.log(testing);
    // const something = document.getElementsByClassName('likeButtonClass')[0];
    // const memeId = event.target.split('-')[1];
    // console.log(memeId);
    // const likeFetch = await fetch(`/meme/${memeId}`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({}),
    //     headers: { 'Content-Type': 'application/json' }
    // })

    const likeFetch = await fetch(`/meme/${memeId}`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    })
    const fetchedlikes = await likeFetch.json();
})

// console.log(likeButtonClick);
