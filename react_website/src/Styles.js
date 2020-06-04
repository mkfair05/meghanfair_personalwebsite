import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardRoot: {
      width: '30%',
      margin: '15px',
      height: '75%'
    },
    cardMedia: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    header: {
      backgroundColor: '#3c3c3c'
    },
    headerIcons: {
      display: 'inline-flex',
      justifyContent: 'space-evenly',
      position: 'relative',
    },
    headerItems: {
      display: 'flex',
      justifyContent: 'space-between'
    },
});

export default useStyles