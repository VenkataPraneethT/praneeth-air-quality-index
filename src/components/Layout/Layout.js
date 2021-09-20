import Appbar from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
};

export default Layout;
