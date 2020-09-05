import React, { Component } from 'react';
import Button from './component/Button';
import './css/style.css';

class Application extends Component {
     constructor(props) {
          super(props);

          this.state = {
               current: '',
               previous: [],
               nextIsReset: false,
          }
     }


     reset = () => {
          this.setState({
               current: '',
               pervious: [],
               nextIsReset: false,
          });
     }
     
     addToCurrent = (symbol) => {
          console.log(symbol)
          if(["%", "-", "+", "*"].indexOf(symbol) > -1){
               let {previous} = this.state;
               console.log(previous)
               previous.push(this.state.current + symbol);
               //will use this as Key:Value pair or you can riet {pervious:pervious}
               this.setState({previous, nextIsReset: true});
               this.setState({current: ''})
          } else {
               if(this.state.current === '0' && symbol != '.'){
                    this.setState({current: symbol, nextIsReset: false});
               } else {
                    this.setState({current: this.state.current + symbol});
               }
               
          }
     }
     
     calculate = (symbol) => {
          let {current, pervious, nextIsReset} = this.state;
          if(pervious.length > 0){
               current = eval(String(this.state.previous + current));
               this.setState({current, pervious: [], nextIsReset:true});
          } 
     }

     render () {
          const buttons = [
               {symbol: 'AC', cols:3, action: this.reset},
               {symbol: 'C', cols:3, action: this.clearLast},
               {symbol: '%', cols:1, action: this.addToCurrent},
               {symbol: '7', cols:1, action: this.addToCurrent},
               {symbol: '8', cols:1, action: this.addToCurrent},
               {symbol: '9', cols:1, action: this.addToCurrent},
               {symbol: '*', cols:1, action: this.addToCurrent},
               {symbol: '4', cols:1, action: this.addToCurrent},
               {symbol: '5', cols:1, action: this.addToCurrent},
               {symbol: '6', cols:1, action: this.addToCurrent},
               {symbol: '-', cols:1, action: this.addToCurrent},
               {symbol: '1', cols:1, action: this.addToCurrent},
               {symbol: '2', cols:1, action: this.addToCurrent},
               {symbol: '3', cols:1, action: this.addToCurrent},
               {symbol: '+', cols:1, action: this.addToCurrent},
               {symbol: '0', cols:2, action: this.addToCurrent},
               {symbol: '.', cols:1, action: this.addToCurrent},
               {symbol: '=', cols:1, action: this.calculate},
               ];

          return (
               <div className="application container">
                    {
                         this.state.previous.length > 0 ? 
                              <div className="float-last">{this.state.previous}</div>
                         : null
                    }
                    <input className="result" type="text" value={this.state.current} />
                   
                   {buttons.map((btn, i)=>{
                    return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol)=> btn.action(symbol)} />
                   })}
               </div>
          );
     }
}

export default Application;