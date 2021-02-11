import "./style.css"
import { button, } from "react-bootstrap";


export const ItemCount = ({stock, onAdd, contador, onSubstract}) => {

    

    return(

            <>

                <button onClick={onSubstract} className="primary">-</button>

                <b>{contador}</b>

                    {(contador < stock) ?

                <button onClick={() => {onAdd(stock) }}>+</button>
                : <p>No Hay mas Stock</p>


                    }

            </>



    );





};