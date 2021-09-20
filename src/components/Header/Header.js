import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Title from '../Title/Title';
import { APP_CONFIG } from '../../utils/config/app.config';
import { useStyles } from '../../styles/styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={classes.primaryColor}>
        <Title data={APP_CONFIG.TITLE} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
