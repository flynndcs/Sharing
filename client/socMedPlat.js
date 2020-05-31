var postList = document.getElementById("postList");

var submitButton = document.getElementById("postSubmit");
//send form info and anon name to server/db

submitButton.addEventListener('click', submitHandler);

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
                postDiv.appendChild(content);
                postList.appendChild(postDiv);
                postList.appendChild(likeButton);
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

window.addEventListener('load', getPosts);
