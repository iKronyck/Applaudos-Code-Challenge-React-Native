import React, {Component} from 'react';
import moment from 'moment';

const date_released_format = (released, finished) => {
  if (released && finished) {
    return `Released ${moment(released).format('ll')} to ${moment(
      finished,
    ).format('ll')}`;
  } else if (released) {
    return `${moment(released).format('ll')}`;
  }
  return null;
};

export default date_released_format;
