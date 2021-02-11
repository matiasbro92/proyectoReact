import { useState } from "react";
import { Card, Button, } from "react-bootstrap";
import {ItemCount} from '../components/ItemCount';


const ItemListContainer = (props) => {

    const [contador, setContador] = useState (1)

    const onAdd = () => {

        setContador(contador +1);
        
    }

    const onSubstract = () =>{



        if (contador > 1){

               setContador = (contador -1)
        } else{
            console.log("El valor es menor a lo que puede vender")
        }
    }

    return(

    <Card style={{ width: '18rem' }}>
        
        <Card.Body>
            <Card.Title><p>{props.product}</p> </Card.Title>
            <Card.Text>

              <p>{props.productDescription}</p> 

            </Card.Text>

            <Card.Text>
                <p>{props.price}</p>
            </Card.Text>

            <ItemCount stock={5} contador={contador} onAdd={onAdd} onSubstract={onSubstract}/>

        </Card.Body>
    </Card>

    )
};


    export default ItemListContainer;