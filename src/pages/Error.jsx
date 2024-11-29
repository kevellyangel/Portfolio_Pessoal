import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Error;
