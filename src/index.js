import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Count';
import Head from './components/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
  return (
    <>
    <div id="co"> 
    <Head title="counter" />
    <Counter />
    </div>
    </>
  )
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
