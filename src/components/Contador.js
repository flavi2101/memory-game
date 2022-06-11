import '../components/Contador.css'

export default function Contador({contagem}){
    return(
        <p className="contagem">Voce jogou {contagem} vezes </p>
    )
}