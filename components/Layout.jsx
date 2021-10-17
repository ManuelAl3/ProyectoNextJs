import Nabvar from './navbar';
import Head from 'next/head';

export default function Layout({ children, title, description }) {
    return (
      <>
        <Head>
          <tittle> {title} </tittle>
        </Head>

        <Nabvar />

        <main> {children} </main>
      </>
    );
}
Layout.defaultProps = {
  title: "Inicio de sesión",
  description: "Hola"
}
