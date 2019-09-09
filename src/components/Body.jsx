import React from 'react';
import P_Alg_Lin from '../files/Algebra_Lineal_Prac3_10p.pdf';

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
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h4><a href={P_Alg_Lin} className="badge" download>Algebra_Lineal_Prac3_10p</a></h4>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
