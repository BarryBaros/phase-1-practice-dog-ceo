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


// Challenge 2
 // Function to fetch dog breeds and render them to the DOM
    function fetchDogBreeds() {
      const breedUrl = "https://dog.ceo/api/breeds/list/all";
      
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breedList = document.getElementById("dog-breeds");
          // Loop through each breed and create list item elements
          for (const breed in data.message) {
            const listItem = document.createElement("li");
            listItem.textContent = breed;
            breedList.appendChild(listItem);
          }
        })
        .catch(error => console.error("Error fetching dog breeds:", error));
    }

    // Call the fetchDogBreeds function when the page loads
    window.addEventListener("load", fetchDogBreeds);