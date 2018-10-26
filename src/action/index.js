export function getBooks(){
  return function (dispatch){
    fetch(process.env.APIKEY || 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=8bcabc805b2b47e58f798d43f76fa369')
    .then(res => res.json())
    .then(data => dispatch(loadedBooks(data)))
  }
}

function loadedBooks(data){
  return {
    type: 'LOADEDBOOKS',
    payload: data.results.map((value,index)=>{
      value.key={index}
      return value
    })
  }
}