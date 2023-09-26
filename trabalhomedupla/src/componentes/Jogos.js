import './Jogos.css';

function Jogos(props) {
    return(
    <div className='container'>
        <div className='retangulo'></div>
        <h1>Grand Theft Auto VI</h1>
        <p className='descricao'>O jogo mais aguardado da década chegou!! Garanta o seu GTA VI para todas as Plataformas!</p>
        <h4>R$ 299,99</h4>
        <p className='categoria'><span className='negrito'>Categoria do jogo: </span> {props.categoria}</p>
        <div className='retangulo2'></div>
    </div>
    )
}

export default Jogos