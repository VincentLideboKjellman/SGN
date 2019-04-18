import React, {Component} from 'react';


class ActivitiesSecondaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/secondary-flik-aktivitet.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default ActivitiesSecondaryFlap;
