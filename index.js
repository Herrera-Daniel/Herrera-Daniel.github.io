document.getElementById("hello").replaceWith("whats up");

fetch('https://api.github.com/users/herrera-daniel/repos')
    .then(res => res.json().then(j => console.log(j)));


