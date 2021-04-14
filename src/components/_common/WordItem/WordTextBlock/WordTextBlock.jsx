import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const WordTextBlock = ({ text, translation, isTranslationOn }) => (
  <>
    <Typography variant="subtitle2">
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </Typography>
    {
      isTranslationOn && (
        <Typography variant="subtitle2">
          {` - ${translation}`}
        </Typography>
      )
    }
  </>
);

WordTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  isTranslationOn: PropTypes.string.isRequired,
};

export { WordTextBlock };
