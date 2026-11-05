const projects_area = $(".projects-area");
const projects = $.getJSON("./projects.json", (json) => {
    const numProjects = json.projects.length;
    for (let i = 0; i < numProjects; i++) {
        const project = json.projects[i];
        const name = project.name;
        const description = project.description;
        const link = project.link;
        const isFeatured = project.isFeatured;
        let button = `<div class="project-links">
                                <form class="project-form" action="${link}" target="_blank">
                                    <input class="project-link" type="submit" value="Go to Project" />
                                </form>
                            </div>`
        if (link === "") {
            button = "";
        }
        let featuredIcon;
        if (!isFeatured) {
            featuredIcon = "";
            const projectCard = `<div class="project-card">
                <div class="project-text">
                    ${featuredIcon}
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>
                ${button}
            </div>`;
            projects_area.append(projectCard);
        } else {
            featuredIcon = `<svg id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>`;
            const projectCard = `<div class="project-card">
                <div class="project-text">
                    ${featuredIcon}
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>
                ${button}
            </div>`;
            projects_area.prepend(projectCard);
        }
    }

});