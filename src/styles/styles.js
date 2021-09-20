import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../utils/config/theme.config';

export const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto',
    backgroundColor: COLORS.SECONDARY,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    padding: '2vw',
    backgroundColor: COLORS.SECONDARY,
  },
  header: {
    fontWeight: 'bolder',
  },
  headerLight: {
    fontWeight: 'bolder',
    margin: '0 0 10px 5px'
  },
  loadContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  singleCardContent: {
    display: 'flex',
  },
  buttonLight: {
    backgroundColor: COLORS.SECONDARY,
    fontWeight: 'bolder',
    border: 'none',
    margin: '2vw',
    width: '10vw',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCityCard: {
    borderRadius: 20,
    width: '38vw',
    height: '50vh',
  },
  singleCityValue: {
    position: 'absolute',
    marginTop: '15vh !important',
    fontWeight: 'bolder !important',
  },
  singleCityHeader: {
    display: 'flex',
    fontWeight: 'bolder',
    position: 'absolute',
    marginTop: '27vh',
    width: '20vw',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY01,
  },
  liveDataCard: {
    width: '55vw',
    height: '50vh',
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY01,
    marginLeft: '2vw'
  },
  liveData: {
    color: '#f0f0f7',
    margin: '1vw',
    borderRadius: 10,
    padding: '1vw',
    width: '8vw',
  },
  liveCardContent: {
    flexWrap: 'wrap',
    height:'100%',
    padding: 0,
  },
  columnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height:'100%'
  }
});
