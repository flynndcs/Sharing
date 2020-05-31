var imgDiv = document.getElementById("img");

var imgDate = document.getElementById("imgSelect");

var citySelector = document.getElementById("citySelect");

var selectedDate;
var selectedCity;

citySelector.addEventListener('change', (event) => {
    console.log(event.target.value);
    selectedCity = event.target.value;
});

imgDate.addEventListener('change', (event) => {
    console.log(event.target.value);
    selectedDate = event.target.value;
    var fetchURL = "https://elasticbeanstalk-us-east-1-135815009727.s3.amazonaws.com/Sharing/" + selectedCity + "Images/" + selectedDate + ".png";
    console.log(fetchURL);
    imgDiv.setAttribute('src', fetchURL)
});



