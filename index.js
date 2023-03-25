import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class Csbs extends React.Component{
  constructor(){
    super()
    this.state({sub:"reacts"})
  }
  Gostraight =()=>{
    this.setState({dept:"ise"})
  }
  Goleft =()=>{
    this.setState({dept:"ece"})
  }
   render(){
    return (<div>
      <MyFun />
      <App />
      <h1 style ={inlineStyle}> hello word</h1>
    <h2 class="outlineStyle">i am ram</h2>
    </div>)
  }
};

function MyFun()
{
  return <h1>hello</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <my classcomponent dept="Csbs" />
);
var inlineStyle={color:'red',font:'italic',}