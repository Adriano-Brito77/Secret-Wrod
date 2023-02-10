import "./StartScreen.css"

const StartScreen = ({startGameNew}) => {
  return (
    <div className = "start">
        <h1>Secret word</h1>
        <p>Clique no botão para começar a jogar</p>
        <button onClick={startGameNew} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen