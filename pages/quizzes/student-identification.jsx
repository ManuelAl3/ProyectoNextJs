import Layout from '../../components/layout/Layout';
import Nabvar from '../../components/navbar';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';

export default function StudentIdentification(){
    return(
        <Layout>
            <Nabvar />

            <div className="title-main-quizz block">
                <p className="title is-2">Ficha de identificación de alumnos</p>
            </div>

            <MessageInfo />

            <div className="quizz-main m-auto">
                {/* Módulo periodo de egreso y año de egreso*/}
                <div className="field is-horizontal box">
                    <div className="tags">
                        <label className="label has-text-light">Datos de egreso<span className="forma"></span></label>
                    </div>
                    <label className="label">Periodo de egreso:</label>
                    <div className="section-check block">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Enero - Abril
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Mayo - Agosto
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Septiembre - Diciembre
                            </label>
                        </div>
                    </div>
                    <label className="label">Año de egreso:</label>
                    <div className="select">
                        <select>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                        </select>
                    </div>
                </div>
                {/* Módulo datos generales*/}
                <div className="field is-horizontal box">
                    <div className="tags">
                        <label className="label has-text-light">Datos generales<span className="forma"></span></label>
                    </div>
                    {/* Matrícula*/}
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Matrícula: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <label className="label">Fecha de nacimiento: <span className="span-req">*</span></label>
                        <form>
                            <input className="input is-purple" type="date" name="day" />
                        </form>
                    </div>
                    {/* Género*/}
                    <div className="block">
                        <label className="label">Género: <span className="span-req">*</span></label>
                        <div className="section-check">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    Femenino
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    Masculino
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    otro
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* CURP*/}
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">CURP: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Correo electrónico alternativo*/}
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Correo electrónico alternativo: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Teléfono de contacto*/}
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Teléfono de contacto: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block ">
                                <div className="field">
                                    <p className="control input-width-small">
                                        <input className="input is-purple" type="number" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Módulo domicilio actual*/}
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Domicilio actual </label>
                            </div>
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Calle: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>

                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label" type="number">Número exterior: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label" type="number">Número interior: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Colonia/Fraccionamiento: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>

                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Localidad: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>

                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Estado: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>

                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Municipio: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  Módulo enfermedad/discapacidad*/}
                <div className="field is-horizontal box">
                    <div className="tags">
                        <label className="label has-text-light">Datos de emergencia<span className="forma"></span></label>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Si padeces alguna enfermedad o discapacidad favor de indicarla: <span
                                className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  Módulo checkbox*/}
                    <div className="block">
                        <label className="label">En caso de padecer alguna enfermedad ¿recibes tratamiento?: </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Si
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                {/*  Módulo de contactos*/}
                <div className="field is-horizontal box">
                    <div className="tags">
                        <label className="label has-text-light">Favor de indicar dos contactos en caso de emergencia<span className="forma"></span></label>
                    </div>
                    {/*  Contacto 1*/}
                    <div className="block subsection">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Contacto 1 </label>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Nombre(s): <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Apellido Paterno: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Apellido Materno: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Parentesco: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Teléfono de contacto: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block ">
                            <div className="field">
                                <p className="control input-width-small">
                                    <input className="input is-purple" type="number" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        {/*  Módulo domicilio actual*/}
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Domicilio actual: </label>
                        </div>
                        <div className="section-check field">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Mismo domicilio que el mio
                            </label>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Calle: </label>
                        </div>
                        <div className="field-body block block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Número exterior: </label>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Número interior: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Colonia/Fraccionamiento:
                            </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Localidad: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Estado: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Municipio: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  Contacto 2*/}
                    <div className="block subsection">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Contacto 2 </label>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Nombre(s): <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Apellido Paterno: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Apellido Materno: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Parentesco: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>

                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Teléfono de contacto: <span className="span-req">*</span></label>
                        </div>
                        <div className="field-body block ">
                            <div className="field">
                                <p className="control input-width-small">
                                    <input className="input is-purple" type="number" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        {/*  Módulo domicilio actual*/}
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Domicilio actual: </label>
                        </div>
                        <div className="section-check field">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Mismo domicilio que el mio
                            </label>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Calle: </label>
                        </div>
                        <div className="field-body block block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Número exterior: </label>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label" type="number">Número interior: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Colonia/Fraccionamiento:
                            </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Localidad: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Estado: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Municipio: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Botón de guardar encuesta*/}
                <ButtonSave />
            </div>
        </Layout>
    );
}
