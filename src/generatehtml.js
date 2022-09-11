
function buildManagerCard(manager) {
    return `<div class="manager">
        <h2>${manager.getName()}</h2>
        <p class="position">Position: Manager</p>
        <p>ID:${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office Number:  ${manager.getOfficeNum()}</p>
    </div>`
};

function buildEngineerCard(engineer) {
    return `<div class="engineer">
        <h2>${engineer.getName()}</h2>
        <p class="position">Position: Engineer</p>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
    </div>`
};

function buildInternCard(intern) {
    return `<div class="intern">
        <h2>${intern.getName()}</h2>
        <p class="position">Position: Intern</p>
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
    </div>`
};



function buildCards(team) {
    let html = []
    html.push(team.filter(emp => emp.getRole() === "Manager").map(manager => buildManagerCard(manager)).join(""));
    html.push(team.filter(emp => emp.getRole() === "Engineer").map(engineer => buildEngineerCard(engineer)).join(""));
    html.push(team.filter(emp => emp.getRole() === "Intern").map(intern => buildInternCard(intern)).join(""));

    if (html.length === 0) {
        return "Waiting for team"
    };

    return html.join("")

}

function buildPage(team) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <h1>Please get familiar with our team:</h1>
    </header>
    <main>
        <div>
            <!-- team members -->
            <div class="members">  
            ${buildCards(team)}

            </div>

        </div>
    </main>

</body>

</html>`

}

module.exports = buildPage;