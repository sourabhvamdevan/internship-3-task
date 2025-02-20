import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 100 },
    { id: 3, name: 'Product 3', price: 150 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container mx-auto p-6 justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-center mb-8 ">Product Catalog</h1>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
    </div>
  );
};

export default App;
