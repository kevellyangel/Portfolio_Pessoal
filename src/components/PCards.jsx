function PCards({ name, description, image, link }) {
    return (
        <div className="project-card">
            <img 
                src={image} 
                alt={name} 
                className="project-image" 
                loading="lazy" 
            />
            <div className="project-content">
                <h2>{name}</h2>
                <p>{description}</p>
                {link && (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                    >
                        Ver Projeto
                    </a>
                )}
            </div>
        </div>
    );
}

export default PCards;
