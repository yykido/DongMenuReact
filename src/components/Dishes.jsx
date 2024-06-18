function Dishes({name, price}) {
    return (
        // picture
        
        // foodname
        // food price
        // fooddescription
        
        <div className="one-dish">
            <div className="food-name">{name}</div>
            <div className="food-dot"></div>
            <div className="food-price">{price}€</div>
        </div>
        
        

    );

}

export default Dishes;