import Link from 'next/link';

export default function Signup() {
    return (
      <>
        <div className="section-register">
          <div className="container-register-left" id="particles-js"></div>
          <div className="container-register-right" id="container-right">
            <span className="img-wave-top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#863f92"
                  fill-opacity="0.8"
                  d="M0,224L40,234.7C80,245,160,267,240,234.7C320,203,400,117,480,90.7C560,64,640,96,720,122.7C800,149,880,171,960,154.7C1040,139,1120,85,1200,90.7C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg>
            </span>
            <form
              className="container-register m-auto"
              action="/auth/signup"
              method="POST"
            >
              <div className="label">
                <h1 className="label title is-2">Registro</h1>
              </div>
              <div className="label">
                <label className="label">Nombre(s)</label>
                <div className="control">
                  <input
                    className="input is-purple"
                    type="text"
                    name="username"
                    placeholder="Tu Nombre(s)"
                  />
                </div>
              </div>
              <div className="label">
                <label className="label">Primer apellido</label>
                <div className="control">
                  <input
                    className="input is-purple"
                    type="text"
                    name="first_last_name"
                    placeholder="Tu Apellido(s)"
                  />
                </div>
              </div>
              <div className="label">
                <label className="label">Segundo apellido</label>
                <div className="control">
                  <input
                    className="input is-purple"
                    type="text"
                    name="second_last_name"
                    placeholder="Tu Apellido(s)"
                  />
                </div>
              </div>
              <div className="label">
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
              <div className="label">
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
              <div className="control field">
                <label className="label">Rol </label>
                <div className="select">
                  <select type="rol" name="rol">
                    <option>Aspirante</option>
                    <option>Alumno</option>
                    <option>Egresado</option>
                    <option>Docente</option>
                    <option>Administrador</option>
                  </select>
                </div>
              </div>
              <div className="label">
                <label className="label">
                  <p className="control">
                    <button className="button is-purple is-rounded">
                      Aceptar
                    </button>
                  </p>
                </label>
              </div>
              <div className="section-login-clic">
                <Link href="/">
                  <p>
                    ¿Ya tienes una cuenta?<a>Inicia sesión</a>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}