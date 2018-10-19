import {connect} from 'react-redux'
import Main from '../routes/index'


const mapStateToProps=(state)=>{
  return{ test: state.test
  }
}

const mainContainer = connect(mapStateToProps)(Main)
export default mainContainer;