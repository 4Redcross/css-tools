// Script by Abhijeet -> https://github.com/4Redcross
let YOUR_API_KEY = "AIzaSyBlYRnP8S6CfxVzX7-IZSoHIOj5M2lMz6w";

let googleurl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${YOUR_API_KEY}`;
let fontLoaded = false;
document.addEventListener("DOMContentLoaded", function () {
  const fontSelector = document.getElementById("fontSelector");
  const selectedFontDisplay = document.getElementById("selectedFont");

  // Function to dynamically load and apply the selected font
  function loadAndApplyFont(fontFamily) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      fontFamily
    )}`;

    // Create a new link element for the font
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.id = "google-font-preview";
    fontLink.href = fontUrl;

    // Append the link to the document's head
    if (fontLoaded) {
      document.getElementById("google-font-preview").outerHTML = "";
    }
    document.head.appendChild(fontLink);
    fontLoaded = true;
    // Apply the selected font to the "selectedFontDisplay" span
    selectedFontDisplay.style.fontFamily = fontFamily;
  }

  // Fetch the list of available fonts from Google Fonts API
  fetch(googleurl)
    .then((response) => response.json())
    .then((data) => {
      const fonts = data.items;

      // Populate the select field with font options
      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.text = font.family;
        option.value = font.family;
        fontSelector.appendChild(option);
      });

      // Listen for changes to the select field
      fontSelector.addEventListener("change", function () {
        const selectedFont = fontSelector.value;
        selectedFontDisplay.textContent =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut metus eget ante imperdiet congue a venenatis lectus. Aenean cursus ex purus, id malesuada dui finibus at. Proin rutrum felis metus, ac lacinia lorem elementum efficitur. Aenean tempor a ex et varius. Sed fringilla neque eu arcu euismod, vitae faucibus augue volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec feugiat nisl.";

        // Load and apply the selected font
        loadAndApplyFont(selectedFont);
      });
    })
    .catch((error) => {
      console.error("Error fetching Google Fonts:", error);
    });
});
