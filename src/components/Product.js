import React from 'react'
import './Product.css'
import primepic from '../images/prime.png';
export  function Product({name,image,rating,price,prime}) {
    const addtobasket = ()=> {
        alert(name+" added to baset");
    }

    return (
        <>
    
            <div className="product-card">
            <img src={image} alt="name" />
                <div className="product-info">
                    <div className="title">{name}</div>
                    <div className="product-price">
                        <strong>&#x20b9;{price}</strong>
                        {prime && <img src={primepic} alt="prime" class="prime"/>}
                    </div>

                    <div className="product-rating">
                        <span className="stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                            <i className="fa fa-star-o" />
                        </span> ({rating})reviews
                    </div>
                </div>
                <div >
                    <button className="button" onClick={addtobasket}>Add to cart</button>
                   
                </div>
               
            </div>
        </>
        
    )
}


/*
    id (not displayed)
    title
    image
    rating
    cost
    add to cart
*/