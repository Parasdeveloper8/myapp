import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Head from './components/header';
import Counter from './components/Count';
import ApiComponent from "./components/ApiComponent";
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
  const [visible,setVisible] = useState(true);
  return (
    <>
    <div id="co"> 
    <Head title="counter" />
    <Counter/> 
    {visible ?  <Counter /> : <></>}
    <button onClick={()=>setVisible(!visible)}>toggle</button>
    </div>
    <ApiComponent/>
    </>
  )
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
