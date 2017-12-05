import React, { Component } from 'react';
import LoginControl from './components/LoginControl';
import TemperatureCal from './components/TemperatureCalculator';
import FilterableProductTable from './components/FilterableProductTable';
import ReactStrapLearn from './components/ReactStrapLearn';
import './App.css';

// function NumberList(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>{number}</li>
//     );
//     return(
//         <ul>{listItems}</ul>
//     );
// }

class App extends Component {
  render() {
      // var PRODUCTS = [
      //     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      //     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      //     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      //     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      //     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      //     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      // ];
    return (
        <div>
            {/*<FilterableProductTable products={PRODUCTS}/>*/}
            <ReactStrapLearn/>

        </div>
    );
  }
}

export default App;
