import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Okno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  geetPeople() {
    return axios.get("http://swapi.co/api/people")
      .then((response) => {
        console.log(response.data.results);
      });
  }
  render() {
    return (
      <div className={style.okno}>
        <div className={style.okno_parametr}>csd</div>
      </div>
    );
  }
}
Okno.propTypes = {
  children: PropTypes.node
};

export default Okno;
