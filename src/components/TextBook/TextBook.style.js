import { makeStyles } from '@material-ui/core/styles';

const useTextBookStyles = makeStyles((theme) => ({
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

    '& .list--0': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#B185DB'
        : '#A1EF7A',
    },

    '& .list--1': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#A06CD5'
        : '#B0EF8E',
    },

    '& .list--2': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#9163CB'
        : '#BAF19C',
    },

    '& .list--3': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#815AC0'
        : '#D0F4BA',
    },

    '& .list--4': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#7251B5'
        : '#EAF8DA',
    },

    '& .list--5': {
      backgroundColor: theme.palette.type === 'dark'
        ? '#6247AA'
        : '#EFFAFB',
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
}));

export default useTextBookStyles;
