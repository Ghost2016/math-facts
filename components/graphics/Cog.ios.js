'use strict';

import React from 'react-native';
import ReactART from 'ReactNativeART';

const {
    Group,
    Shape,
} = ReactART;

const CogIcon = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
  },
  render: function() {
    return (
      <Group>
        <Shape fill={this.props.color} d="M10.3,4.4v1.5c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1L8.9,6.3C8.8,6.6,8.7,6.8,8.6,6.9C8.8,7.2,9,7.5,9.3,7.9
          C9.4,7.9,9.4,8,9.4,8s0,0.1-0.1,0.2C9.2,8.3,9,8.6,8.7,8.9C8.3,9.2,8.1,9.4,8,9.4c-0.1,0-0.1,0-0.2-0.1L6.9,8.6
          C6.7,8.7,6.5,8.8,6.3,8.9c-0.1,0.6-0.1,1-0.2,1.2c0,0.1-0.1,0.2-0.2,0.2H4.4c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.1L4,8.9
          C3.8,8.8,3.6,8.7,3.4,8.6L2.4,9.3c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1C1.5,8.8,1.2,8.4,1,8.2c0,0,0-0.1,0-0.2
          C0.9,8,1,7.9,1,7.9c0.1-0.1,0.2-0.2,0.3-0.4S1.6,7.1,1.7,7C1.6,6.7,1.5,6.5,1.4,6.3L0.2,6.1c-0.1,0-0.1,0-0.1-0.1C0,6,0,5.9,0,5.9
          V4.4c0-0.1,0-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.1L1.4,4c0.1-0.2,0.1-0.4,0.3-0.6C1.5,3.1,1.3,2.8,1,2.4c0-0.1-0.1-0.1-0.1-0.2
          c0,0,0-0.1,0.1-0.2c0.1-0.2,0.3-0.4,0.7-0.7c0.3-0.3,0.5-0.5,0.6-0.5c0.1,0,0.1,0,0.2,0.1l0.9,0.7C3.6,1.6,3.8,1.5,4,1.4
          c0.1-0.6,0.1-1,0.2-1.2C4.2,0.1,4.3,0,4.4,0h1.5C5.9,0,6,0,6.1,0.1s0.1,0.1,0.1,0.1l0.2,1.2c0.2,0.1,0.4,0.2,0.6,0.2l1-0.7
          c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1c0.6,0.5,0.9,0.9,1.1,1.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.2C9.2,2.5,9.1,2.7,9,2.9
          C8.8,3.1,8.7,3.2,8.6,3.3C8.7,3.6,8.8,3.8,8.9,4l1.2,0.2c0.1,0,0.1,0,0.1,0.1S10.3,4.4,10.3,4.4z M6.4,6.4C6.7,6,6.9,5.6,6.9,5.1
          S6.7,4.3,6.4,3.9C6,3.6,5.6,3.4,5.1,3.4c-0.5,0-0.9,0.2-1.2,0.5C3.6,4.3,3.4,4.7,3.4,5.1S3.6,6,3.9,6.4c0.3,0.3,0.7,0.5,1.2,0.5
          C5.6,6.9,6,6.7,6.4,6.4z"/>
      </Group>
    );
  }
});

module.exports = CogIcon;