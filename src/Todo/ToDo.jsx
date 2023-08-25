import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const[atividade, setAtividade] = useState("");
   const[lista, setLista] = useState([]);
const [id, setId] = useState()
   const salvar = (e) => {
    e.preventDefault();
    setLista([...lista,{
       atividade:atividade, id:id}]);
        console.log(lista)
        setId(1+1)
    };

    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>

           
           <form onSubmit={salvar}>
            <input type="text" 
            onChange={(e)=>{setAtividade(e.target.value)}}/>
            <button>ADD</button>
            </form>
            {id.map((id)=> <p>{id.id}</p>)}
            {lista.map((ativ)=> <p>{ativ.atividade}</p>)}
        </div>
    );
}