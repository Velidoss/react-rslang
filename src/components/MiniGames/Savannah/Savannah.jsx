import React from 'react';
import { Container, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getWordsFromAPI } from '../../../store/savannahReducer/savannahReducer';
import savannahSelector from '../../../store/selectors/savannahSelector';

const Savannah = () => {
  const state = useSelector(savannahSelector);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <Container>
      <Button onClick={() => dispatch(getWordsFromAPI())}>
        Start
      </Button>
    </Container>
  );
};

export default Savannah;
