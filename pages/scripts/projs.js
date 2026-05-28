var FullStackProjects = [{}];
var GameDevProjects = [{}];

// Fullstack and Network Projects

// I want to move these to .json files
var p1 = {
    Title: "FlowState",
    subText: "AI-Enhanced Scheduling App",
    Description: "Hacklahoma Award Winning Calendar Application that integrates a RAG system to provide time and cost estimates for tasks.",
    Link: "https://devpost.com/software/flowstate-ksg7d2",
    Image: "../images/flowstate.png",
    LinkTitle: "Check Our DevPost!",
    md: "flowstate"
};

var p2 = {
    Title: "Pokemon Team Maker",
    subText: "React.js Web App using the Pokemon API",
    Description: "Analytics-Focused Web App for users to optimize their Pokemon's Stats and build Competitive Pokemon Teams.<br /><br /> Still under development.",
    Link: "https://github.com/JScott3234/PkmnTeamMaker",
    Image: "../images/teamMakerCode.png",
    LinkTitle: "Check the GitHub!",
    md: "teammaker"
};

var p3 = {
    Title: "Ubuntu Linux Home Lab",
    subText: "Personal Storage and Home Lab Server",
    Description: "Repurposed Dell PowerEdge T320 used for Drive Storage and Web Hosting. Implements Linux Security Protocols for SSH for protected remote access and game hosting.",
    Link: "https://linuxblog.io/home-lab-beginners-guide-hardware/",
    Image: "../images/ubuntu-linux.jpg",
    LinkTitle: "Learn to Make Your Own!",
    md: "homeLab"
};

var p4 = {
    Title: "CodeSphere",
    subText: "React.js Collaborative IDE",
    Description: "IDE for classes to streamline programming lessons.<br /> <br/>Contributed O-Auth Systems (Supabase, passport.js), System Design, and some Frontend.",
    Link: "https://github.com/ricardoMulino/OSU-Codesphere",
    Image: "../images/TeamCodeSphere.jpg",
    LinkTitle: "Check the GitHub!",
    md: "codesphere"
};

FullStackProjects.push(p1);
FullStackProjects.push(p2);
FullStackProjects.push(p3);
FullStackProjects.push(p4);

// Game Development and VR Projects

var g1 = {
    Title: "Pan-Optics",
    subText: "VR Optics Experiment",
    Description: "Manipulates the user's Field of View to create optical illusions.<br/><br/>Unfinished HackKU Project - soon to return to...",
    Link: "https://devpost.com/software/pan-optics",
    Image: "../images/argus.jpg",
    LinkTitle: "Check My DevPost!",
    md: "panoptics"
};

var g2 = {
    Title: "Wandor",
    subText: "2D Grid Puzzle Game",
    Description: "A 2D Puzzle Game made in Unity where players move two characters in a Grid Based environment.<br/><br/>Developed the Game Mechanics and everything programming.",
    Link: "https://drthunderbuckle.itch.io/wandor",
    Image: "../images/wandor.png",
    LinkTitle: "Check Out the Game!",
    md: "wandor"
};

var g3 = {
    Title: "Shadow Switch Runner",
    subText: "2D Platformer Game",
    Description: "OSUVGDC Officer Project from the 2025 Fall Game Jam. <br/><br/>Contributed by creating a tool for platform creation and animation.",
    Link: "https://daarkswoord.itch.io/shadow-switch-runner",
    Image: "../images/ssr.png",
    LinkTitle: "Check Out the Game!",
    md: "ssr"
};

var g4 = {
    Title: "3D Graphics Renderer",
    subText: "Java Graphics Renderer",
    Description: "Object-oriented shape rendering system.",
    Link: "https://github.com/JScott3234/3D-Renderer",
    Image: "../images/tetraRender.png",
    LinkTitle: "Check My GitHub!",
    md: "renderer"
};

GameDevProjects.push(g1);
GameDevProjects.push(g2);
GameDevProjects.push(g3);
GameDevProjects.push(g4);

function createProjectCard(project) {
    return `<div class="col-md-3 mb-4">
    <div class="card projContainer editor-container h-100" data-tab="${project.md}.md">
        <img src="${project.Image}" class="card-img-top" alt="${project.Title}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.Title}</h5>
            <p class="card-subtitle mb-2 orange">${project.subText}</p>
            <p class="card-text">${project.Description}</p>
            <a href="${project.Link}" target="_blank" class="btn btn-primary mt-auto">${project.LinkTitle}</a>
        </div>
    </div>
</div>`;
}

function displayProjects(projects, className) {
    var projectsRow = document.getElementById(className);
    if (!projectsRow) return;
    projects.forEach(function (project) {
        if (!project.Title) return;
        projectsRow.innerHTML += createProjectCard(project);
    });
}

displayProjects(FullStackProjects, "fullStackProjects");
displayProjects(GameDevProjects, "gameDevProjects");