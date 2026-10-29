import { useParams } from "react-router"
import { useEffect, useState } from "react";
function Product() {
    const [product, setProduct] = useState({})

    const {productId} = useParams();

const ApiUrl = `https://fakestoreapi.com/products/${productId}`;


    const fetchProduct = async () => {
        
        const response = await fetch(ApiUrl)
        let data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct();

    }, [])

   



    
    console.log(productId)
  return (
      <div className="product-item">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price ? product.price.toFixed(2) : "N/A"}</p>
      </div>
  )
}

export default Product
