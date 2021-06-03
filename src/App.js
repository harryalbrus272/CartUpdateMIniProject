import CartItem from './CartItem';
function App() {
  const name = 'Shashwat Kumar Singh';
  const isLoggedIn = true;
  return (
    <div className="App">
      <h1>Cart</h1>
      <CartItem />
    </div>
  );
}

export default App;
