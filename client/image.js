var imgDiv = document.getElementById("img");
console.log(imgDiv);

var imgDate = document.getElementById("imgSelect");
console.log(imgDate.value);

var selectedDate;
imgDate.addEventListener('change', (event) => {
    console.log(event.target.value);
    selectedDate = event.target.value;
    var fetchURL = "https://elasticbeanstalk-us-east-1-135815009727.s3.amazonaws.com/Sharing/Texas+Images/" + selectedDate + ".png";
    console.log(fetchURL);
    imgDiv.setAttribute('src', fetchURL)
});

