import '../styles/Projects.css';

function Projects() {
    const projectsList = [
        {
            title: 'Quiz App',
            description: 'A simple 3-question quiz app using React Native',
            image: '/',
            link:'https://github.com/to236663/quiz-app',
        },
        {
            title: 'Exercise App',
            description: 'A simple exercise app created through React Native and features exercises based on duration and repetition.',
            image: '/',
            link: 'https://github.com/to236663/native-exercise-app',
        },
        {
            title: 'Marvel Rivals Character Randomizer',
            description: 'A site that randomly generates a character for you to play based on the character roster of the hit game Marvel Rivals. Created with HTML, CSS, and JavaScript.',
            image: '/rivals_randomizer.png',
            link: 'https://students.gaim.ucf.edu/~to236663/dig3716c/rivalsrandomizer/rivalsprogram/rivals.html',
        }
    ];
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={`${project.title} screenshot`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Click to View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
