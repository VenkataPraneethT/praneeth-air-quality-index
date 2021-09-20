import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/styles';

const Title = ({ data }) => {
  const classes = useStyles();

  return (
    <Typography color='secondary' variant='h6' className={classes.grow}>
      {data}
    </Typography>
  );
};

export default Title;
