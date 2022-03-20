
const goToSignup = document.getElementById(`make_acc`);
const goToLogin = document.getElementById(`already_acc`);


goToSignup.addEventListener("click", async (event) => {
  const url = window.location.href;
  location.href = location.href + '/login';

}
// goToLogin.addEventListener("click", async (event) => {

// }

// likeButton.addEventListener("click", async (event) => {
//     let counterVal = parseInt(counter.innerText);
//     console.log(typeof counterVal)
//     if (likeButton.innerText === 'Like Meme') {
//         likeButton.innerText = 'Unlike Meme'
//         counter.innerText = ++counterVal
//     } else {
//         likeButton.innerText = 'Like Meme'
//         counter.innerText = --counterVal
//     }

//     const url = window.location.href;
//     const strs = url.split('/');
//     const memeId = strs.at(-1)
//     // console.log(id)
//     // console.log(testing);
//     // const something = document.getElementsByClassName('likeButtonClass')[0];
//     // const memeId = event.target.split('-')[1];
//     // console.log(memeId);
//     // const likeFetch = await fetch(`/meme/${memeId}`, {
//     //     method: 'PATCH',
//     //     body: JSON.stringify({}),
//     //     headers: { 'Content-Type': 'application/json' }
//     // })

//     const likeFetch = await fetch(`/meme/${memeId}`, {
//         method: 'POST',
//         body: JSON.stringify({}),
//         headers: { 'Content-Type': 'application/json' }
//     })
//     const fetchedlikes = await likeFetch.json();
// })


// // id='already_acc' go to login

// // id='make_acc' go to signup
