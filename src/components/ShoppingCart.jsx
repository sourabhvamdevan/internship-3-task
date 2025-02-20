import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, calculateTotal }) => {
    return (
        <div className="mt-8 justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-700">Your cart is empty.</p>
            ) : (
                cart.map(product => (
                    <div key={product.id} className="bg-gray-100 border border-gray-200 shadow-sm rounded-lg p-4 mb-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-gray-700">${product.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
                            Remove
                        </button>
                    </div>
                ))
            )}
            <div className="mt-4">
                <h3 className="text-lg font-bold">Total: ${calculateTotal()}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;
