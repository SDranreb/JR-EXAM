function getGitHubUserInfo() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a GitHub username.");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("github-result");
      resultDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching GitHub user information:", error);
    });
}

function getChuckNorrisJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("chuck-norris-result");
      resultDiv.innerHTML = `<p>${data.value}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching Chuck Norris joke:", error);
    });
}
