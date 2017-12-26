import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin'
// import { NavToggleButton } from '../styled/NavDrawer';


injectTapEventPlugin();


class RightIcon extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <Link to={'/profile'}>
          <MenuItem
            primaryText="Profile"
          />
        </Link>
        <Link to={'/logout'}>
          <MenuItem
            primaryText="Logout"
          />
        </Link>
      </IconMenu>
    );
  }
}


class NavDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      width: 250,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Mamta Masala"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<RightIcon />}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <Link to={'/'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Home'}
            />
          </Link>
          <Link to={'/about'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'About'}
            />
          </Link>
          <Link to={'/products'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Products'}
            />
          </Link>
          <Link to={'/careers'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Careers'}
            />
          </Link>
          <Link to={'/contacts'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Contacts'}
            />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
