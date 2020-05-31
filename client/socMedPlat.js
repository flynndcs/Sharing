var postList = document.getElementById("postList");

var submitButton = document.getElementById("postSubmit");
//send form info and anon name to server/db

submitButton.addEventListener('click', submitHandler);

let likeButtonEventListeners = [];

function getPosts(event){
    fetch('/select/posts')
        .then(response => {
            console.log(response);
            return response.json();
        }
        )
        .then((res) => {
            console.log(res);
            console.log(res[0]);
            console.log(res[0].post);
            for (let i = 0; i < res.length; i++){
                var postDiv = document.createElement("div");
                var likeButton = document.createElement("button")
                likeButton.innerHTML = 'Like';
                likeButton.setAttribute("id", "like" + i);

                var content = document.createTextNode(res[i].post);
                var likeContent = document.createTextNode(res[i].likes);
                postDiv.appendChild(likeContent);
                postDiv.appendChild(content);

                postList.appendChild(postDiv);
                postList.appendChild(likeButton);

                var likeListener = document.getElementById(`like${i}`)
                console.log(likeListener);
                likeButtonEventListeners.push(likeListener);
                console.log(likeButtonEventListeners);
            }
            for (let j = 0; j < likeButtonEventListeners.length; j++){
                likeButtonEventListeners[j].addEventListener("click", submitLike);
            }

        }

        )
}

function submitHandler(event){
    var postElement = document.getElementById("post");
    var data = {"post": postElement.value}
    console.log(postElement.value);
    fetch('create/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    .then(res => res.json())
        .then((data) => {
        //event.preventDefault();
        //event.stopImmediatePropagation();
        console.log('success: ', data);
        //return false;
});
}

function submitLike(event){
    console.log("inside submit like");
    var post_id = 1 + parseInt(event.target.id.replace("like", ""));
    const data = {"post_id": post_id}
    fetch("/create/like", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
        .then((data) => {
            console.log("success: ", data);
        })
}
window.addEventListener('load', getPosts);
