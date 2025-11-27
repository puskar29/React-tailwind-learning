import logo from './assets/kanung_newlogo.svg'

function Card(){
    return(
        <div className="card">
            <img alt="Kanung logo" src={logo} className="card-image"></img>
            <h2 className='card-title'>Kanung</h2>
            <p className='card-text'>Not Others, Its Ours</p>
        </div>
    )
}

export default Card