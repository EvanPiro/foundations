import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';
import Layout from '../components/layout';

const App = ({Component, pageProps}) => {
  return (
    <Layout>
      <title>Two Devs</title>
      <Component {...pageProps}/>
    </Layout>
  )
};

export default App;
