import React from 'react';


const style = {
    height: '100%',
    width: '160px',
    position: 'fixed',
    zIndex: '0',
    top: '5',
    left: '0',
    backgroundColor: 'rgba(255,255,255,.7)',
    overflowX: 'hidden',
    paddingTop: '20px',
    borderTop: '2px solid black',

}
export default class Sidebar extends React.Component {
  render() {
    if(this.props.open === true){
    return (
      <div style={style}>
        Sidebar
      </div>
    )
    }else{return null}

  }
}