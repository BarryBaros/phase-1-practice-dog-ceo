console.log('%c HI', 'color: firebrick')

 // Challenge 1
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  // Function to fetch dog images and render them to the DOM
  function dogImages() {
    fetch(imgUrl)
      .then((resp) => resp.json())
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
  window.addEventListener("load", dogImages);
});

// Challenge 2
// Function to fetch dog breeds and render them to the DOM
function dogBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      const breedList = document.getElementById("dog-breeds");
      // Loop through each breed and create list item elements
      for (const breed in data.message) {
        const listItem = document.createElement("li");
        listItem.textContent = breed;
        breedList.appendChild(listItem);

        // Challenge 3
        // Add event listener to change font color
        listItem.addEventListener("click", () => {
          listItem.style.color = "blue";
        });
      }
    })
    .catch((error) => console.error("Error fetching dog breeds:", error));
}

// Call the fetchDogBreeds function when the page loads
window.addEventListener("load", dogBreeds);

// Challenge 4
// Add Event Listener to Dropdown for Filtering Dog breeds
const dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener("change", function () {
  const selectedLetter = this.value;
  const breedList = document.getElementById("dog-breeds");
  const listItems = breedList.getElementsByTagName("li");

  // Loop through list items and show/hide based on selected letter
  for (const listItem of listItems) {
    if (listItem.textContent.startsWith(selectedLetter)) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }
});
