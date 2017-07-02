import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Hosts from './Hosts.jsx';
import Vendors from './Vendors.jsx';
import utils from '../utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'landing'
    }
  }

  ComponentDidMount() {
    console.log('hi');
    var that = this
    utils.getUserId( (data) => 
      console.log(data)
    )
    console.log('hi');
    console.log(this.state.userId);
  }

  changeView(page) {
    this.setState({
      currentPage: page
    })
  }
  render () {
    return (
      <div>
        {console.log(this.state.currentPage)}
        <div className="container">
          <h1>Evently</h1>
          <div className="container">

            <div className="ui pointing menu">

              <div className="item">
                <a onClick={()=>this.changeView('host')} href='#'>Host</a>
              </div>
              <div className='item'>
                <a onClick={()=>this.changeView('vendor')} href='#'>Vendor</a>
              </div>
            </div>  
          
          </div>
          <div>
            {this.state.currentPage === 'host' ? <Hosts /> : null}
            {this.state.currentPage === 'vendor' ? <Vendors user={this.state.userID}/> : null}
          </div>
        </div>
      </div>
    )
  }

}

export default App; 