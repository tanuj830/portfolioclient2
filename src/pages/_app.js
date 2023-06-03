import Theme from '../styles/theme';
import 'react-quill/dist/quill.snow.css'
import '../styles/globals.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Theme>
   
    </>
  );
}
 