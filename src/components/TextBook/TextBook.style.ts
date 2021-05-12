import { makeStyles, Theme } from '@material-ui/core/styles';

const useTextBookStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .header-wrapper': {
      margin: '1rem 0',
    },

    '& .stats-wrapper': {
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
      backgroundColor: theme.palette.type === 'dark' ? '#43373D' : '#F6F4F5',
    },

    '& .list--1': {
      backgroundColor: theme.palette.type === 'dark' ? '#2A4879' : '#C3D2EA',
    },

    '& .list--2': {
      backgroundColor: theme.palette.type === 'dark' ? '#595B33' : '#D1D3B1',
    },

    '& .list--3': {
      backgroundColor: theme.palette.type === 'dark' ? '#A36A00' : '#FFE1A8',
    },

    '& .list--4': {
      backgroundColor: theme.palette.type === 'dark' ? '#6F4B0B' : '#F1BF6A',
    },

    '& .list--5': {
      backgroundColor: theme.palette.type === 'dark' ? '#651523' : '#F1BCC5',
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
