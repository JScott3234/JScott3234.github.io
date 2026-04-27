var FullStackProjects = [{}];
var GameDevProjects = [{}];

// Fullstack and Network Projects

var p1 = {
    Title: "FlowState : AI Enhanced Scheduling App",
    Description: "Hacklahoma Award Winning Calendar Application that integrates a RAG system to provide time and cost estimates for tasks.",
    Link: "https://devpost.com/software/flowstate-ksg7d2",
    Image: "./custom_images/flowstate.png",
    LinkTitle: "Check Our DevPost!"
};

var p2 = {
    Title: "Competitive Pokemon Team Builder",
    Description: "Web App that uses the Pokemon API to allow users to build Competitive Pokemon Teams and analyze their weaknesses.<br /> Still under development.",
    Link: "https://github.com/JScott3234/PkmnTeamMaker",
    Image: "",
    LinkTitle: "Check the GitHub!"
};

var p3 = {
    Title: "Ubuntu Linux Home Lab",
    Description: "Repurposed Dell PowerEdge T320 now being used for Personal Drive Storage and Home Lab Projects. Implemented Paper Software for Game Hosting, established Linux Security Protocols for SSH for protected remote access.",
    Link: "",
    Image: "",
    LinkTitle: "Learn to Make Your Own!"
};

var p4 = {
    Title: "CodeSphere : Web-Based, Collaborative IDE",
    Description: "Web-Hosted coding environment for classes to streamline programming lessons. React.js/Node.js environment incorporating O-Auth systems via Passport.js Microsoft Strategy and Supabase.",
    Link: "https://github.com/ricardoMulino/OSU-Codesphere",
    Image: "",
    LinkTitle: "Check the GitHub!"
};

FullStackProjects.push(p1);
FullStackProjects.push(p2);
FullStackProjects.push(p3);
FullStackProjects.push(p4);

// Game Development and VR Projects

var g1 = {
    Title: "Pan-Optics : VR Optics Experiment",
    Description: "VR Experiment meant to manipulate the user's Field of View to create optical illusions.",
    Link: "https://devpost.com/software/pan-optics",
    Image: "./custom_images/argus.jpg",
    LinkTitle: "Check My DevPost!"
};

var g2 = {
    Title: "Wandor : 2D Grid Puzzle Game",
    Description: "A 2D Puzzle Game made in Unity where players move two characters in a Grid Based environment.",
    Link: "https://drthunderbuckle.itch.io/wandor",
    Image: "./custom_images/wandor.png",
    LinkTitle: "Check Out the Game!"
};

var g3 = {
    Title: "Shadow Switch Runner",
    Description: "Unity 2D Platformer: OSUVGDC Officer Project from the 2025 Fall Game Jam. I made a tool for plaform animation and player adherence.",
    Link: "https://daarkswoord.itch.io/shadow-switch-runner",
    Image: "./custom_images/ssr.png",
    LinkTitle: "Check Out the Game!"
};

var g4 = {
    Title: "3D Graphics Renderer",
    Description: "Simple Java-based graphics renderer.",
    Link: "https://github.com/JScott3234/3D-Renderer",
    Image: "./custom_images/tetraRender.png",
    LinkTitle: "Check My GitHub!"
};

GameDevProjects.push(g1);
GameDevProjects.push(g2);
GameDevProjects.push(g3);
GameDevProjects.push(g4);

function createProjectCard(project) {
    return `<div class="col-md-3">
    <div class="card">
        <div class="card-body">
            <img src="${project.Image}" class="card-img-top" alt="${project.Title}">
            <h5 class="card-title">${project.Title}</h5>
            <p class="card-text">${project.Description}</p>
            <a href="${project.Link}" target="_blank" class="btn btn-primary">${project.LinkTitle}</a>
        </div>
    </div>
</div>`;
}

function displayProjects(projects, className) {
    var projectsRow = document.getElementById(className);
    if (!projectsRow) return; // Safeguard if element not found

    projects.forEach(function (project) {
        // Skip empty objects like the initial [{}]
        if (!project.Title) return;

        // Append the HTML string to the row
        projectsRow.innerHTML += createProjectCard(project);
    });
}

// Display projects for each section
displayProjects(FullStackProjects, "fullStackProjects");
displayProjects(GameDevProjects, "gameDevProjects");