import React, {useState} from 'react';

const Contador = () => {

    const [count, setCount] = useState(0);

    


    return(

        <div>
            <button onClick={() => setCount(count - 1)}>Restar curso</button>
            <p>Llevas {count} cursos</p>
            <button onClick={() => setCount(count + 1)}>Agregar curso</button>
        </div>
    );
}

export default Contador;