import React, { useEffect, useState } from "react";
import axios from "axios";
import { add_to_cart } from "../redux/actions/shoppingAction";
import {useDispatch } from "react-redux";

const HomePage = () => {

    const [items, setItems] = useState(null);
    const dispatch = useDispatch();

useEffect(() => {
  fetchData();
}, [])

    async function fetchData() {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            console.log(response.data.products);
            setItems(response.data.products)
        }
        catch (err) {
            console.log(err);
        }
    }

    
    return (
        <div className="home-pg">

            <h1 className="home-header">All Items</h1>

            <div className="card-container">

                {
                    items !== null && items.map((product) => (
                        <div className="card">
                            <img src={product.images[0]} />
                            <p><b>Title: {product.title}</b></p>
                            <p><b>Price: {`$${product.price}`}</b></p>
                            <button id="add-btn" onClick={() => dispatch(add_to_cart(product))}>Add To Cart</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default HomePage;