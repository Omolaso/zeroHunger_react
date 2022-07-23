import React from 'react';


const Cart_Item = ({id, name, price, product_img}) => {
  
  return (
    <section>
      <article>
        <img src={product_img} alt={name}/>
        <p>{name}</p>
        <p>₦{price}</p>
      </article>
      {/* <div className='cart'>
          <button> - </button>
          <span id='cart'>Add to cart</span>
          <button> + </button> <br /> <br />
      </div> */}
    </section>
  )
}

export default Cart_Item