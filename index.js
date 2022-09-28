fetch('https://api.github.com/users/herrera-daniel/repos')
    .then(res => res.json().then(j => {
        console.log(j);
        j.forEach(repo => {
            const content = `
                <div class='repo'>
                    <div class='repoName'>
                        <a href='${repo.html_url}'>
                            ${repo.name}
                        </a>
                    </div>
                    <div class='repoDesc'>
                        ${repo.description}
                    </div>
                    <div class='repoDetails'>
                        ${repo.forks_count}
                    </div>
                </div>
            `
            document.getElementById("repos").innerHTML += content;
        });
    }));


