import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const EndiannessTypography = ({ endianness }) => {
  switch (endianness) {
    case 'big':
      return (
        <Typography color="textPrimary" variant="h5">
          Big Endian
        </Typography>
      );
    case 'middleBig':
      return (
        <Typography color="textPrimary" variant="h5">
          Middle Big Endian
        </Typography>
      );
    case 'middleLittle':
      return (
        <Typography color="textPrimary" variant="h5">
          Middle Little Endian
        </Typography>
      );
    case 'little':
      return (
        <Typography color="textPrimary" variant="h5">
          Little Endian
        </Typography>
      );
    default:
      return (
        <Typography color="textPrimary" variant="h5">
          Unknown
        </Typography>
      );
  }
};

EndiannessTypography.propTypes = {
  endianness: PropTypes.oneOf(['big', 'middleBig', 'middleLittle', 'little']).isRequired,
};

export default EndiannessTypography;
