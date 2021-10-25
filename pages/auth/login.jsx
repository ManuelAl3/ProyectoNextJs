import Link from 'next/link';

export default function Login() {

    return (
      <>
        <div className="section-login">
          <div className="container-login-left" id="particles-js"></div>
          <div className="container-login-right" id="container-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#863f92"
                fill-opacity="1"
                d="M0,128L30,154.7C60,181,120,235,180,218.7C240,203,300,117,360,90.7C420,64,480,96,540,106.7C600,117,660,107,720,90.7C780,75,840,53,900,37.3C960,21,1020,11,1080,16C1140,21,1200,43,1260,42.7C1320,43,1380,21,1410,10.7L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
            <form
              className="container-login m-auto"
              action="/login"
              method="POST"
            >
              <div className="field">
                <h1 className="label title is-2">Inicia sesión</h1>
              </div>
              <div className="field">
                <label className="label">Correo electrónico</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-purple"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electronico"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label">
                  Contraseña
                  <p className="control has-icons-left">
                    <input
                      className="input is-purple"
                      type="password"
                      name="password"
                      placeholder="Ingresa una contraseña"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </label>
              </div>
              <div className="field">
                <a className="hashtag" href="/password-recovery">
                  Olvidé mi contraseña
                </a>
              </div>
              <div className="field">
                <label className="label">
                  <p className="control">
                    <button className="button is-purple is-rounded">
                      Aceptar
                    </button>
                  </p>
                </label>
              </div>
              <div className="section-register-clic">
                <Link href="/auth/signup">
                  <p>
                    ¿No tienes una cuenta?<a>Regístrate</a>
                  </p>
                </Link>
              </div>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#863f92"
                fill-opacity="1"
                d="M0,64L60,106.7C120,149,240,235,360,224C480,213,600,107,720,80C840,53,960,107,1080,117.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </>
    );
}