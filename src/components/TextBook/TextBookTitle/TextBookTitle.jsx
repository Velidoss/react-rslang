import React from 'react';
import PropTypes from 'prop-types';

const TextBookTitle = ({ switchPage, switchGroup }) => (
  <Grid container>
    <Grid item>
      123
    </Grid>
  </Grid>
);

TextBookTitle.propTypes = {
  switchPage: PropTypes.func.isRequired,
  switchGroup: PropTypes.func.isRequired,
};

export default TextBookTitle;
