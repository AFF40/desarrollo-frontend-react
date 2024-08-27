// Temas.js
const Temas = ({ temas }) => {
    return (
        <div className="LP-temas">
            <h2>Temas</h2>
            <ul>
                {temas.map((tema, index) => (
                    <li key={index}>{tema.descripcion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Temas;
