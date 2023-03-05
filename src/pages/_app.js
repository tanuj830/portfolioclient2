import Theme from '../styles/theme';
import 'react-quill/dist/quill.snow.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
   
    </>
  );
}
 