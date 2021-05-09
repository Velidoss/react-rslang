import * as React from 'react';
import { Typography } from '@material-ui/core';

interface WordtextBlockProps {
  text: string;
  translation: string;
  isTranslationOn: boolean;
}

const WordTextBlock: React.FC<WordtextBlockProps> = ({ text, translation, isTranslationOn }) => (
  <>
    <Typography variant="subtitle2">
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </Typography>
    {
      isTranslationOn && (
        <Typography variant="subtitle2">
          {translation}
        </Typography>
      )
    }
  </>
);

export { WordTextBlock };
