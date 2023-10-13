## Type Ahead

Certainly! Here's a beginner-friendly code-along guide to create a "Type Ahead" search functionality for cities and states using HTML, JavaScript, and CSS:

**Step 1: Set up your project**

1. Create a project folder on your computer.

2. Save your HTML file (e.g., `index.html`) inside the project folder.

3. Create a `style.css` file and save it in the same folder for styling.

4. Prepare your JSON data file (e.g., `data.json`) with the city and state information. Place it in the project folder.

**Step 2: HTML Structure**

In your `index.html` file, set up the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Type Ahead Search</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form class="search-form">
      <input type="text" class="search" placeholder="City or State" />
      <ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
    <script src="script.js"></script>
  </body>
</html>
```

**Step 3: JavaScript for Fetching and Displaying Data**

Create a new JavaScript file (e.g., `script.js`) in your project folder and add the following code:

```javascript

  const endpoint = "./data.json"; // Update with the correct path to your JSON file

  const cities = [];

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => cities.push(...data))
    .catch((error) => console.error("Error fetching data:", error));

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function displayMatches() {
    const matchedArray = findMatches(this.value, cities);
    const html = matchedArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `<li>
          <span class="name"> ${cityName}, ${stateName}</span>
          <span class="population"> ${numberWithCommas(place.population)}</span>
        </li>`;
      })
      .join("");
    const suggestions = document.querySelector(".suggestions");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  searchInput.addEventListener("input", displayMatches);

```

**Step 4: CSS Styling**

In your `style.css` file, you can add CSS to style the search form and results according to your preferences.

```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.search-form {
  text-align: center;
  margin-top: 20px;
}

.search {
  width: 100%;
  padding: 10px;
  font-size: 18px;
}

.suggestions {
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
}

.suggestions li {
  background: white;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hl {
  background: yellow;
}
```

**Step 5: Testing**

1. Open your `index.html` file in a web browser.

2. Start typing in the search input, and you should see matching cities and states displayed below the input field, with highlighting for matched text.

3. Ensure that your `data.json` file is correctly formatted with city and state data.

Congratulations! You've successfully created a "Type Ahead" search functionality for cities and states using HTML, JavaScript, and CSS. You can further enhance this project by adding more features or customizing the styling to your liking.