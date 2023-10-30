import './App.css'
import messageList from './components/Data';
import CardMessages from './components/cardMessages';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [messageIndex, setmessageIndex] = useState(0);

  return (
    <div className='container'>
      <Header />
      <NavBar messageIndex={messageIndex} setmessageIndex={setmessageIndex} messageList={messageList} />
      <CardMessages card={messageList[messageIndex]} />
      <Footer />
    </div>
  )
}

export default App;
