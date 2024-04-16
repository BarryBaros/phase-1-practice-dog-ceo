console.log('%c HI', 'color: firebrick')

 // Challenge 1
document.addEventListener("DOMContentLoaded", () => {
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

   // Function to fetch dog images and render them to the DOM
   function fetchDogImages() {
     fetch(imgUrl)
       .then((response) => response.json())
       .then((data) => {
         const dogImageContainer = document.getElementById(
           "dog-image-container"
         );
         // Loop through each image URL and create image elements
         data.message.forEach((imageUrl) => {
           const img = document.createElement("img");
           img.src = imageUrl;
           dogImageContainer.appendChild(img);
         });
       })
       .catch((error) => console.error("Error fetching dog images:", error));
   }

   // Call the fetchDogImages function when the page loads
   window.addEventListener("load", fetchDogImages);
});


