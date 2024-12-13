import { useEffect } from "react";
import Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import { useDispatch,useSelector } from "react-redux";
import { add } from "./store/cartSlice"
import { getProducts } from "./store/productSlice";

const Product =()=>{
  const dispatch = useDispatch(); 
  const {data:products=[]} = useSelector(state=>state.products)
    // const [products ,getProducts] = useState([]);

    useEffect(()=>{
   
      dispatch(getProducts());
      // fetch('https://fakestoreapi.com/products')
        // .then(data=>data.json())
        // .then(result=>getProducts(result))
    },[dispatch]);

    const addToCart = (product) =>{
      console.log('Add to cart button clicked');
      dispatch(add(product))
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
      <Button variant="secondary" onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
    ))
    return(
        <>
        <h1>Producr Dash</h1>
        <div className="row">
        {cards}
        </div>
        </>
    )
}

export default Product; 