import React from 'react';

/* Links */
import Alg0 from '../files/Algebra_Lineal_Prac3_10p.pdf';
import Cri1 from '../files/Cripto_EJER1.pdf';
/* Links */

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App-body">

        <div className="list-group">                  
                  
        <input type='hidden'/>

           <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h4><a href={Alg0} className="badge" download>Algebra_Lineal_Prac3_10p.pdf</a></h4>
                <small>X days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </div>
            
           <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h4><a href={Cri1} className="badge" download>Cripto_EJER1.pdf</a></h4>
                <small>X days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </div>
            
        <input type='hidden'/>

        </div>

      </div>
    );
  }
}

export default Body;