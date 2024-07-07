function ProductCard({name, price,address}) {
    return (

        
        <div className="product-card">
            <div className="card-food-picture"><img src={address} alt="" /></div>
            <div className="card-food-name">{name}</div>
            <div className="card-food-price">{price}€</div>
            <div className="card-addtocart-btn"><button>Add to cart</button></div>
        </div>
        
    
    );

}

export default ProductCard;