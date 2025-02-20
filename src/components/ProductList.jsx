import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-4">${product.price}</p>
                    <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
