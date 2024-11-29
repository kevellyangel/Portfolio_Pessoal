function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao meu Portfólio!</h1>

            <div className="info-box">
                <p>
                    Olá, meu nome é Camila!
                    <br />
                    Atualmente, estou em busca de expandir meus conhecimentos e aplicar minhas habilidades em um ambiente profissional. Sou uma pessoa dedicada, organizada e com grande vontade de aprender. Tenho uma formação acadêmica em <strong>Jogos Digitais</strong> e estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>, sempre em busca de novos desafios. Além disso, sou flexível, pontual e adoro trabalhar em equipe.
                </p>
            </div>

            <h2>Minhas Principais Habilidades:</h2>
            <div className="skills-box">
                <ul>
                    <li><strong>Programação:</strong> Python, C, Java, HTML, CSS, JavaScript</li>
                    <li><strong>Banco de Dados:</strong> MySQL e noções básicas de administração de banco de dados</li>
                    <li><strong>Certificação em Testes:</strong> CTFL-Certified Tester Foundation Level</li>
                    <li><strong>Ferramentas de Produtividade:</strong> Microsoft Excel (do básico ao avançado)</li>
                </ul>
            </div>

            <div className="info-box">
                <p>
                    Tenho um inglês intermediário e estou sempre me aprimorando para oferecer o melhor em qualquer ambiente profissional.
                </p>
            </div>

            <div className="info-box">
                <p>
                    Estou disponível para trabalhar em horário integral ou parcial e tenho preferência para contato via Email.
                </p>
            </div>

            <div className="avatar-box">
                <img src="assets\avatar.jpg" alt="Meu Avatar" />
            </div>

        </div>
    );
}

export default Home;