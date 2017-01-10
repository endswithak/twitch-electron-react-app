// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media from 'react-md/lib/Media';
import {Link} from 'react-router';

class CommunityCard extends Component {
  render() {
    return (
      <div className="md-cell md-cell--2-phone md-cell--2-tablet md-cell--2-desktop">
        <Link to={`/communities/${encodeURIComponent(this.props.community._id)}`}>
          <Card raise={true}>
            <Media className="md-media--3-4">
              <img src={this.props.community.avatar_image_url} role="presentation" />
            </Media>
            <CardTitle className="md-card-title--ellipsis"
                       title={this.props.community.name}
                       subtitle={`${this.props.community.viewers.toLocaleString()} viewers`}
            />
          </Card>
        </Link>
      </div>
    );
  }
}

CommunityCard.propTypes = {
  community: React.PropTypes.object,
}

export default CommunityCard;
