import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [get, setGet] = useState([]);
  function getProduct(){
    axios.get('https://zerohunger-backend.herokuapp.com/api/products')
    .then((res) => {
      setGet(res.data)
      // console.log(res.data);
    })
  }

  useEffect(() => {
    getProduct()
  }, [get])

  if(get.length === 0){
    return(
      <h1 className='wait'>Please Wait...</h1>
    )
  }
  const results = get.results
  // console.log(results);

  return (
    <div>
      <section className='product'>
        {
          results.map((result) => (
              <div key={result.id}>
                <img src={result.product_img} alt={result.name} id='product_img' />
                <p id='product_name'>{result.name}</p>
                <p id='product_price'>₦{result.price}</p>
                <Link to={`/Products/${result.id}`} id='product_info'>More Info</Link>
              </div>
          ))
        }
      </section>
    </div>
  )
}

export default Products