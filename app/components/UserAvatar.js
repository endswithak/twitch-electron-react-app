// @flow
import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';

class UserAvatar extends Component {
  render() {
    return (
      <Avatar role="presentation"
              iconSized={this.props.iconSized}
              src={this.props.logo}
              style={this.props.style}
      >
        {
          this.props.logo ?
            ''
            :
            this.props.username ?
              this.props.username.charAt(0).toUpperCase()
              :
              'E'
        }
      </Avatar>
    )
  }
}

UserAvatar.propTypes = {
  iconSized: React.PropTypes.bool,
  logo: React.PropTypes.string,
  username: React.PropTypes.string,
};

export default UserAvatar;
