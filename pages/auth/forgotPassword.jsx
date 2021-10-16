export default function ForgotPassword() {
    return(
        <div className="block main-box-card">
            <form className="box box-card-second m-auto">
                <div className="block">
                    <lable className="label title is-3">Ingresa tu cuenta de correo electrónico</lable>
                    <p>Te enviaremos un link a tu correo para que puedas recuperar tu cuenta</p>
                </div>
                <div className="block">
                    <input className="input" type="email" name="email" placeholder="Correo electrónico" />
                </div>
                <div className="field block">
                    <label className="label">
                        <p className="control">
                            <button className="button is-purple is-rounded">
                                Enviar
                            </button>
                        </p>
                    </label>
                </div>
                <button className="button is-rounded is-redounded-main">Cancelar</button>
            </form>
        </div>
    );
}