import PCards from "../components/PCards";

const projects = [
    {
        name: "Pokedex",
        description: "Este é o primeiro projeto.",
        image: "assets/Pokedex.jpg",
        link: "https://meusite.com/projeto1", // URL do site
    },
    {
        name: "TodoList",
        description: "Este é o segundo projeto.",
        image: "assets/TodoList.jpg",
        link: "https://meusite.com/projeto2", // URL do site
    },
];


function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfólio</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <PCards key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
