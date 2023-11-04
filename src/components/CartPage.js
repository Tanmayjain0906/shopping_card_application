import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_from_cart, checkout } from "../redux/actions/shoppingAction";

const CartPage = () => {

    const cartItem = useSelector(state => state);
    const [check, setCheck] = useState(false);
    let totalAmount = 0;
    for (let i = 0; i < cartItem.length; i++) {
        totalAmount += cartItem[i].price;
    }
    console.log(cartItem);
    const dispatch = useDispatch();


    return (
        <div className="cart-pg">

            <h1 className="cart-header">My Cart</h1>

            <div className="cart-detials">

                <div className="cart-card-container">
                    {
                        cartItem.length > 0 && cartItem.map((product) => (
                            <div className="card">
                                <img src={product.images[0]} />
                                <p><b>Title: {product.title}</b></p>
                                <p><b>Price: {`$${product.price}`}</b></p>
                                <button id="add-btn" onClick={() => dispatch(remove_from_cart(product.id))}>Remove From Cart</button>
                            </div>
                        ))
                    }
                </div>

                {
                    cartItem.length > 0 && <div className="amounts">
                        <div>
                            <h3 className="amount-header">Checkout List</h3>
                        </div>
                        <div className="all-products">

                            {
                                cartItem.map((product) => (
                                    <div>
                                        <span>1. {product.title}</span>
                                        <span>{`$${product.price}`}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <hr></hr>
                            <div className="total-price">
                                <span>Total</span>
                                <span>${totalAmount}</span>
                            </div>
                            <hr></hr>
                        </div>

                        <div>
                            <button id="check-btn" onClick={() => {
                                dispatch(checkout())
                                setCheck(true)
                            }}>Click To Checkout</button>
                        </div>
                    </div>
                }


            </div>

            {
                check && alert("Items have been checkout out.")
            }

            {
                cartItem.length == 0 && <h1 className="empty">Your card is empty</h1>
            }

        </div>
    )
}

export default CartPage;