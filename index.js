fetch('https://api.github.com/users/herrera-daniel/repos')
    .then(res => res.json().then(j => {
        console.log(j);
        j.forEach(repo => {
            const content = `
                <div class='repo'>
                    <a href='${repo.html_url}'>
                        <div class='repoName'>
                            ${repo.name}
                        </div>
                    </a>
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


