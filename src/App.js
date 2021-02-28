import './App.css';
import userData from './userData/userData.json'
import { useState, useEffect } from 'react';
import User from './User/User';
import Cart from './Cart/Cart';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(userData)  
  }, [])

  const [cart, setCart] = useState([])
  const handlerEvent = (clickedUser) =>{
    const newCart = [...cart, clickedUser]
    setCart(newCart)
  }
  return (
    <div className="App">
      <h1>Welcome Our Random User Information Site</h1>
      <Cart cart={cart}></Cart>
      <ul>
        {
          data.map(user => <User user={user} handlerEvent={handlerEvent} key={user.id}></User>)
        }
      </ul>
    </div>
  );
}

export default App;
