import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';


const homeIcon = <FontIcon className="material-icons">Home</FontIcon>;
const careerIcon = <FontIcon className="material-icons">Career</FontIcon>;
const contactIcon = <FontIcon className="material-icons">Contact</FontIcon>;


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.select = this.select.bind(this);
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Careers"
            icon={careerIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Contact"
            icon={contactIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
