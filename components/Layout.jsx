import Nabvar from './navbar';
import Head from 'next/head';

export default function Layout({ children, title, description, props}) {
    return (
      <>
        <Head>
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />
          {/*GOOGLE FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
            rel="stylesheet"
          />
          <title> {title} </title>
        </Head>

        <Nabvar />

        <main> {children} </main>

        {/*SCRIPTS*/}
        <script src="/javascripts/particles.min.js"></script>
        <script src="/javascripts/particles.min.js"></script>
        <script src="/javascripts/app-particles.js"></script>
        <script src="/javascripts/register.js"></script>
        <script src="/javascripts/navbar.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </>
    );
}
Layout.defaultProps = {
  title: "Inicio de sesión",
  description: "Hola"
}
