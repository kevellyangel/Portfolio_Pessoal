function Contato() {
    return (
        <div className="contact">
            <h1>Contato</h1>
            <form action="https://formspree.io/f/xvgobyok" method="POST">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;