import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const[atividade, setAtividade] = useState("");
   const[lista, setLista] = useState([]);

   const salvar = ( ) => {
    alert("Salvar");
   }

    return (
        <div>
            <h1>Lista de Atividades</h1>

            <p>{atividade}</p>
            
            <Link to="/">home</Link>
           <form onSubmit={salvar}>
            <input type="text" 
            onChange={(e)=>{setAtividade(e.target.value)}}/>
            <button>ADD</button>
            </form>
        </div>
    );
}