import { useEffect } from 'react';

const useCounter = ({
  timeForAnswer, setTimeForAnswer, timeOutAnswer,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeForAnswer > 0) {
        setTimeForAnswer(timeForAnswer - 1);
      } else {
        timeOutAnswer();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeForAnswer]);
};

export default useCounter;
