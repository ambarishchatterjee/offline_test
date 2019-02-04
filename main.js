const fetchData = (url='https://picsum.photos/list') => {
    fetch(url)  //Fetching URL
    .then((resp) => resp.json())   // Converting to json
    .then((data) => {  
        let photos = {data};    //Assign object to a variable
        let photosData = photos.data;

        let randomPhotosArr = [];   //Creating a blank array
        for (let i = 0; i < 10; i++) {  //Start loop from array

            let photoArray  = Object.keys(photosData);  // Keys of all object
            let randomNumber = Math.random();   //Random number
            let photoIndex  = Math.floor(randomNumber * photoArray.length); //Getting a random index from array
            let randomKey    = photoArray[photoIndex];  //Return the value of the randomKey
            let randomValue  = photosData[randomKey];   //Return the value of the randomValue
            //Updating the array with required value
            randomPhotosArr.push(randomValue);
        }
        //console.log(randomPhotosArr);
        //Create dot navigation template
        const dotsNav = `   
        <div style="text-align:center">
            ${randomPhotosArr.map(() =>
                `<span class="dot"></span>
                `
            ).join('')}
        </div>
        `;
        //Create Slider template
        const createSlider = (imgHeight=200,imgWidth=300) => {
            const slider = `
            <h1>Photo Slider</h1>
            <div class="slideshow-container">
                ${randomPhotosArr.map(randomPhotosArr => 
                    `<div class="mySlides fade">
                    <div class="numbertext">ID: ${randomPhotosArr.id}</div>
                    <img src="https://picsum.photos/${imgHeight}/${imgWidth}?image=${randomPhotosArr.id}" style="width:100%">
                    <div class="text">${randomPhotosArr.author}</div>
                    </div>
                    `
                ).join('')}
                </div>
                <br>
                ${dotsNav}
            `;
            //Create global variable to access globally
            newFunction(slider);
        };
        createSlider(200,300);

        //Document ready function
        const domReady = () => {
            let slideIndex = 0;
            //Showslide function
            const showSlides = () => {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1;}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 5000); // Change image every 5 seconds
            };
            //Call slide function
            showSlides();
        };
        //Call document ready function
        domReady();
    })
    .catch((error) => { //Catch errors
        console.log(error);
    });
};
fetchData();

function newFunction(slider) {
    //Assign template to body
    document.getElementById('main').innerHTML = slider;
}