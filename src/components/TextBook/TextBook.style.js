import { makeStyles } from '@material-ui/core/styles';

const useTextBookStyles = makeStyles({
  root: {
    '& .header-wrapper': {
      margin: '1rem 0',
    },

    '& .list-wrapper': {
      margin: '1rem 0',
    },

    '& .list': {
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    },

    '& .pagination-wrapper': {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'center',
    },

    '& .links-wrapper': {
      margin: '1rem 0',
    },
  },
});

export default useTextBookStyles;
