import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>BrincaLetra</h1>
            <p>Vamos aprender brincando? Clique no botão para começar!</p>
            <button onClick={startGame}>Iniciar Jogo!</button>
        </div>
    )
}

export default StartScreen;