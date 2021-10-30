import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function GraduateSurvey() {
    // FRONTEND
    const { register,handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    //let forms = data;

    const alertActivated = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Finalizado",
        showConfirmButton: false,
        timer: 1600,
      });
      setTimeout(() => {
        router.replace("/polls");
      }, 1600);
    };

    const onSubmit = () => {
        console.log();
        createEncuesta();
        alertActivated();
    }
    return(
        <Layout>
            <div className="title-main-quizz block">
                <p className="title is-2">Encuesta de egresados</p>
            </div>

            <MessageInfo />

            <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
                {/* Módulo periodo de egreso y año de egreso*/}
                <div className="box">
                    <div className="tags">
                        <label className="label has-text-light">Datos de egreso<span className="forma"></span></label>
                    </div>
                    <label className="label">Periodo de egreso:</label>
                    <div className="section-check block">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" className="m-rght" name="answer" />
                                Enero - Abril
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" className="m-rght" name="answer" />
                                Mayo - Agosto
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" className="m-rght" name="answer" />
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
                <div className="field is-horizontal box">
                    <div className="tags">
                        <label className="label has-text-light">Desempeño profesional<span className="forma"></span></label>
                    </div>
                    <div className="field-is is-normal" id="field-quizz">
                        <label className="label">Empresa en dónde realizaste Estancias I: </label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                    </div>
                    <div className="field-is is-normal" id="field-quizz">
                        <label className="label">Empresa en dónde realizaste Estancias II: </label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                    </div>
                    <div className="field-is is-normal" id="field-quizz">
                        <label className="label">Empresa en dónde realizaste Estadías: </label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                    </div>
                    {/* Checkbox*/}
                    <div>
                        <div className="block">
                            <label className="label">¿Realizaste proceso de dualidad? </label>
                            <div className="section-check">
                                <label className="checkbox">
                                    <input type="checkbox" className="m-rght" />
                                    Si
                                </label>
                            </div>
                            <div className="section-check">
                                <label className="checkbox">
                                    <input type="checkbox" className="m-rght" />
                                    No
                                </label>
                            </div>
                        </div>
                        {/*  Checkbox*/}
                        <div className="block">

                            <label className="label">En qué cuatrimestre(s): </label>
                            <div className="section-check">
                                <label className="checkbox">
                                    <input type="checkbox" className="m-rght" />
                                    7mo
                                </label>
                            </div>
                            <div className="section-check">
                                <label className="checkbox">
                                    <input type="checkbox" className="m-rght" />
                                    8vo
                                </label>
                            </div>
                            <div className="section-check">
                                <label className="checkbox">
                                    <input type="checkbox" className="m-rght" />
                                    9no
                                </label>
                            </div>
                        </div>
                        <div className="block">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">Empresa(s) en los que realizaste dualidad: </label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Módulo checkbox*/}
                <div className="box">
                    <div className="tags">
                        <label className="label has-text-light">Empleo<span className="forma"></span></label>
                    </div>
                    <div className="block">
                        <label className="label">¿Trabajas actualmente en algún perfil relacionado a tu licenciatura? </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" className="m-rght" />
                                Si
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" className="m-rght" />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Perfil de LinkedIn: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Considerando del 1 al 5, donde 1 es insuficiente y
                                4 es bueno, cómo consideras el desarrollo de habilidades para: </label>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Analizar, diseñar y desarrollar proyectos de ingeniería de software mediante el uso
                                de
                                metodologías para automatizar y optimizar los procesos de negocio de las empresas.</label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Validar las arquitecturas de software mediante el análisis de requerimientos para
                                eficientar los procesos de negocio de la empresa.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Formular soluciones integrales de software mediante el uso de normas, tecnologías y
                                estándares para elevar la calidad tecnológica de la empresa.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Proponer tecnologías de información mediante el análisis detallado de las
                                tecnologías
                                de información existentes en la empresa para optimizar el uso de recursos tecnológicos.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Desarrollar tecnologías de información mediante técnicas de reingeniería para
                                optimizar.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Comunicar de manera efectiva sus ideas, con adecuada expresión oral y escrita en
                                español e inglés, apoyado en tecnologías de información y comunicación, dirigido a diferentes tipos
                                de
                                interlocutores o audiencias.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                        <div className="field-is is-normal" id="field-quizz">
                            <label className="label">Reconocer la importancia del trabajo grupal y se integra y participa en forma
                                efectiva
                                en equipos multidisciplinarios y multilingües de trabajo.
                            </label>
                        </div>
                        <div className="section-check block">
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    1 Insuficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    2 Deficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    3 Suficiente
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input type="radio" className="m-rght" name="answer" />
                                    4 Bueno
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Botón de guardar encuesta*/}
                <ButtonSave />
            </form>
        </Layout>
    );
}