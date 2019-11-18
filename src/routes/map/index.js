
import React, { PureComponent } from 'react';
import { Map} from 'react-amap';
import { connect } from 'react-redux';


class MapScreen extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
  
    }
  }

  componentWillMount () {  
    const {dispatch} = this.props;
    this.props.dispatch({
      type:'LOGIN_REQUEST'
    })  
  }

  render () {
    return (
        <div style={{width:'700px',height:'600px'}}>
          <Map amapkey='70c5b4389cc8554a807c541c7807ec7a' ></Map>
        </div>
        
    );
  }
}


const mapDispatchToProps = (state) => {
  return {
    map:state.map
  }
}

export default connect(mapDispatchToProps)(MapScreen);









