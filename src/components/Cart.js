import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap/";
import Button from "react-bootstrap/Button";
import { remove } from "./store/cartSlice";

const Cart = () =>{
    const products = useSelector(state=>state.cart)

    const dispatch = useDispatch()
    const removeToCart=(id)=>{
         dispatch(remove(id)); 
    }

    const cards = products.map(product=>(
        <div className="col-md-3">
        <Card key={product.id} className="h-100">
            <div className="text-centre">
          <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
             NRS: {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{background:'white'}}>
          <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove</Button>
          </Card.Footer>
        </Card>
        </div>
        ))
    return(
        <>
        <div className="row">
        {cards}
        </div>
        </>
    )
}

export default Cart;