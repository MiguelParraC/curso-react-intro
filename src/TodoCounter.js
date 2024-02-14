
import './TodoCounter.css';


function TodoCounter({ total, completed }) {
  return (
    // se abren llaves para enviar variables y las segundas son para el objeto
    <h1 className="TodoCounter"> 
      Has completado {completed} de {total} ToDo
    </h1>
  );
}

export { TodoCounter };