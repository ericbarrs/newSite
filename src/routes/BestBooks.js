import React from 'react'
import {connect} from 'react-redux'
import {getBooks} from '../action'
import { Card, Button, CardTitle, CardText , Row, Col } from 'reactstrap';

class BestBooks extends React.Component{
componentDidMount(){
  this.props.getBooks()
}

CardHandler(){
    const array = this.props.books.map((value, index)=>{
    return(
      <Col key={index} sm="4">
        <Card  body>
          <CardTitle>{value.book_details[0].title}</CardTitle>
          <CardText>{value.list_name}</CardText>
          <CardText>Published date: {value.published_date}</CardText>
          <CardText>{value.book_details[0].description}.</CardText>
          <CardText>Rank: {value.rank}</CardText>
          <Button href={value.amazon_product_url}>Order Now</Button>
        </Card> 
      </Col>
    )
  })
  const newArray = []
  if(array.length > 0){
  for(let i =0; i <= array.length;){
    const test = <div key={i}style={{height:'500px'}}><Row>{array[i]}{array[1+i]}{array[2+i]}</Row></div>
    i+=3
    newArray.push(test)
    }
  }
  return newArray
}

render(){
  return(
    <div>
          {this.CardHandler()}
    </div>
  )
}
}

const mapStateToProps =(state)=> {
  return {
    books: state.books
  }
}

const BooksContainer = connect(mapStateToProps, {getBooks})(BestBooks)
export default BooksContainer;