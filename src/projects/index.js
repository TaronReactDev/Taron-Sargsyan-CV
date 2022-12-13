import React from "react";
import "./projectsStyle.scss"
import ProjectElement from "./projectElem";
import backgroundImage2 from "./Projectimages/tic-tac-toe.jpg";
import backgroundImageClicker from "./Projectimages/clicker.jpg";
import backgroundImageGym from "./Projectimages/gym.jpeg";
import backgroundImageCodding from "./Projectimages/codding.jpg";


export default function Projects() {
    const imagesForProjects = [
        [backgroundImageCodding, "Codding Examples", "codding_examples"],
        [backgroundImage2, "Tic-tac-toe", "tictactoe"],
        [backgroundImageClicker, "Clicker", "clicker" ],
        [backgroundImageGym, "Gym", "gym"],
    ];
    const projects = imagesForProjects.map((elem) => {
        return <ProjectElement images={elem[0]} text={elem[1]} url={elem[2]}/>;
    });

    return (
        <main className="projectsContainer">
            <header>MY PROJECTS</header>
            <div className="projectElementDiv">
                {projects}
        </div>
        </main>
    );
}