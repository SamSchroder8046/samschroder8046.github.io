const projects_area = $(".projects-area");
const projects = $.getJSON("./projects.json", (json) => {
    const numProjects = json.projects.length;
    for (let i = 0; i < numProjects; i++) {
        const project = json.projects[i];
        const name = project.name;
        const description = project.description;
        const link = project.link;
        projects_area.append(
            `<div class="project-card">
                <div>
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>
                <div class="project-links">
                    <form class="project-form" action="${link}" target="_blank">
                        <input class="project-link" type="submit" value="Go to Project" />
                    </form>
                </div>
            </div>`
        );
    }

});