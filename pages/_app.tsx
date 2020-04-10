import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/lily.css';
import Layout from '../components/layout';

const App = ({Component, pageProps}) => {
  return (
    <Layout>
      <title>Foundations</title>
      <Component {...pageProps}/>
    </Layout>
  )
}


export default App;
