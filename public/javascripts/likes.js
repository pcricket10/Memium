
const likeButton = document.getElementById(`likeButton`);
const counter = document.getElementById('counter')


likeButton.addEventListener("click", async (event) => {
    let counterVal = parseInt(counter.innerText);
    console.log(typeof counterVal)
    if (likeButton.innerText === 'Like Meme') {
        likeButton.innerText = 'Unlike Meme'
        counter.innerText = ++counterVal
    } else {
        likeButton.innerText = 'Like Meme'
        counter.innerText = --counterVal
    }

    const url = window.location.href;
    const strs = url.split('/');
    const memeId = strs.at(-1)

    const likeFetch = await fetch(`/meme/${memeId}`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    })
    const fetchedlikes = await likeFetch.json();
})
