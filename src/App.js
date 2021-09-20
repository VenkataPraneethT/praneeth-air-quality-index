import { useStyles } from './styles/styles';
import Home from './components/Home/Home';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
};

export default App;
