import React from 'react'

export default class Calculator extends React.Component{
  state ={
    number1: "",
    number2: "",
    inputfunction: null,
    output: "",
  }

  inputFunction(e){
    const num = /^[0-9\._b]+$/
    if(num.test(e.target.value)){
      if(this.state.number1.length === 0 || this.state.inputfunction === null){
        this.setState({number1: this.state.number1 + e.target.value})
      }
    }
    if(e.target.value === "/" || e.target.value === "*" || e.target.value === "+" || e.target.value === "-" ){
      this.setState({inputfunction: e.target.value})
    }
    if(num.test(e.target.value)){
    if(this.state.number1.length !== 0 && this.state.inputfunction !== null){
      this.setState({number2: this.state.number2 + e.target.value})
      }
    }
    if(this.state.number2.length !== 0 && this.state.inputfunction !== null && this.state.number1.length !== 0){
      this.setState({output: 0})
    }
  }

  equalHandler(e){
    if(e.target.value === "="){
        if(this.state.inputfunction === "-"){
          console.log(parseFloat(this.state.number1,10))
          this.setState({output: parseFloat(this.state.number1,10) - parseFloat(this.state.number2,10)})
          console.log(this.state.out)
        }
        if(this.state.inputfunction === "*"){
          this.setState({output: parseFloat(this.state.number1,10) * parseFloat(this.state.number2,10)})
        }        
        if(this.state.inputfunction === "/"){
          this.setState({output: parseFloat(this.state.number1,10) / parseFloat(this.state.number2,10)})
        }        
        if(this.state.inputfunction === "+"){
          this.setState({output: parseFloat(this.state.number1,10) + parseFloat(this.state.number2,10)})
        }       
      }
  }

  clearhandler(e){
    if(e.target.value === "clear"){
      this.setState({
        number1: [],
        number2: [],
        inputfunction: null,
        output: 0,
      })
    }
  }
  getNumber1(){
    const num1 = this.state.number1
    if(num1 === ""){
      return 0
    }else{
      return num1
    }
  }
  getNumber2(){
    const num2 = this.state.number2
    if(num2 === ""){
      return 0
    }else{
      return num2
    }
  }
  getOperater(){
    if(this.state.inputfunction === null){
      return "function"
    }else{
      return this.state.inputfunction
    }
  }
  negative(){
    if(this.state.number1.length === 0 || this.state.inputfunction === null){
      this.setState({number1: this.state.number1 * -1})
    }
    else{
        this.setState({number2: this.state.number2 * -1})
    }
  }

  render(){
    return(
      <div className='Calculator'>
      <div><h1>{this.getNumber1()} {this.getOperater()} {this.getNumber2()}</h1></div>
        <div className='CalcButtons'>
        <button className='divide' onClick={(e)=>{this.inputFunction(e)}} value="/">/</button>
        <button className='multiply' onClick={(e)=>{this.inputFunction(e)}} value="*">X</button>
        <button className='minus' onClick={(e)=>{this.inputFunction(e)}} value="-">-</button>
        <button className='negative' onClick={(e)=>{this.negative(e)}} value="-">+/-</button>
        <button className='plus' onClick={(e)=>{this.inputFunction(e)}} value="+">+</button>
        <button className='seven' onClick={(e)=>{this.inputFunction(e)}} value="7">7</button>
        <button className='eight' onClick={(e)=>{this.inputFunction(e)}} value="8">8</button>
        <button className='nine' onClick={(e)=>{this.inputFunction(e)}} value="9">9</button>
        <button className='four' onClick={(e)=>{this.inputFunction(e)}} value="4">4</button>
        <button className='five' onClick={(e)=>{this.inputFunction(e)}} value="5">5</button>
        <button className='six' onClick={(e)=>{this.inputFunction(e)}} value="6">6</button>
        <button className='one' onClick={(e)=>{this.inputFunction(e)}} value="1">1</button>
        <button className='two' onClick={(e)=>{this.inputFunction(e)}} value="2">2</button>
        <button className='three' onClick={(e)=>{this.inputFunction(e)}} value="3">3</button>
        <button className='zero' onClick={(e)=>{this.inputFunction(e)}} value="0">0</button>
        <button className='period' onClick={(e)=>{this.inputFunction(e)}} value=".">.</button>
        <button className='equal' onClick={(e)=>{this.equalHandler(e)}} value="=">=</button>
        <button className='clear' onClick={(e)=>{this.clearhandler(e)}} value="clear">Clear</button>
        </div>
          <h1>{Math.round(this.state.output * 100)/100}</h1>
      </div>
    )
  }
}