import Nabvar from '../../components/navbar';
import ButtonSave from '../../components/buttonSave';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

export default function GraduateFollowUp(){
    return(
        <>
            <Nabvar />
            <div className="title-main-quizz block">
                <p className="title is-2">Encuesta de seguimiento de egresados</p>
            </div>

           {/*message - info*/}

            <div className="quizz-main m-auto">
                <div className="box">
                     Checkbox
                    <div className="block">
                        <label className="label">Actualmente vive en: <span className="span-req">*</span></label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Ciudad de Durango
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                En otro municipio de Durango
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                En otro estado del país
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Fuera del país
                            </label>
                        </div>
                    </div>
                    <div className="block">
                        <label className="label">Donde vive, ¿es su lugar de origen? <span className="span-req">*</span></label>
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
                    <div className="block">
                        <label className="label">¿Está titulado? <span className="span-req">*</span></label>
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
                    <div className="block">
                        <label className="label">Año en que tramitó su título: </label>
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
                    <div className="block">
                        <label className="label">En caso de no haberse titulado señale la causa:</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Por no tener interés en ello
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Por falta de tiempo
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Por falta de información
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Por problemas económicos
                            </label>
                        </div>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="answer" />
                                Está en trámite la titulación
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
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
                    <div className="block">
                        <label className="label">Una vez que concluyó su licenciatura, ¿realizó estudios de posgrado? <span
                            className="span-req">*</span></label>
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
                    <div className="block">
                        <label className="label">En caso de haber realizado estudios de posgrado, indique el estatus del mismo <span
                            className="span-req">*</span></label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                En curso
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Concluido
                            </label>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal">
                            <label className="label">Nombre del posgrado:</label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal">
                            <label className="label">Institución en dónde lo realizó:</label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <label className="label">Seleccione los tipos de actualización que ha tomado una vez que egresó de la
                            licenciatura:</label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Cursos en línea
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Cursos precenciales
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Diplomados
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Certificaciones
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Maestría
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Doctorado
                            </label>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="tags">
                        <label className="label has-text-light">Trayectoria y Ubicación en el Mercado Laboral<span
                            className="forma"></span></label>
                    </div>
                    <div className="block">
                        <label className="label">¿Tenía usted empleo al concluir sus estudios de licenciatura? <span
                            className="span-req">*</span></label>
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
                    <div className="block">
                        <label className="label">¿Se encuentra usted laborando actualmente?</label>
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

                     {/*Módulo checkbox*/}

                    <div className="block">
                        <label className="label">¿Qué te motiva a estudiar Ingeniería en Software?</label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                He enviado CV a empresas pero no he recibido respuesta
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                No me interesa trabajar en algo relacionado a mi profeción
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                No he encontrado una oportunidad laboral que me convenza
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
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
                    <div className="block">
                        <div className="field-is is-normal">
                            <label className="label">En caso de encontrarse trabajando actualmente indique el nombre de la empresa:
                            </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="field-is is-normal">
                            <label className="label">Puesto que ocupa: </label>
                        </div>
                        <div className="field-body block">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-purple" type="text" placeholder="respuesta" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <label className="label">¿El trabajo que desempeña actualmente se relaciona con su profesión?
                        </label>
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
                    <div className="block">
                        <label className="label">En caso de trabajar en un perfil diferente al de su licenciatura, ¿cuáles son las
                            causas?
                        </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Falta de habilidad y destrezas propias
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Falta de interés por trabajar en su área
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Conocimientos insuficientes
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Conocimientos obsoletos
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Falta de experiencia
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Dificultad para aplicar conocimientos adquiridos
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Falta de fuentes de empleo
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
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
                    <div className="block">
                        <label className="label">Usted trabaja:
                        </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Dentro del estado de Durango
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Fuera del estado de Durango
                            </label>
                        </div>
                    </div>
                    <div className="block">
                        <label className="label">1.- Selecciona las principales actividades que realizas o has realizado en tu puesto de trabajo.
                        </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Planeo proyectos de software considerando estándares de calidad.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Analizo requerimientos para automatizar y/u optimizar procesos en las organizaciones para el desarrollo y/o implementación
                                de proyectos de software.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Evalúo proyectos de software bajo estándares de calidad.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Diseño proyectos de software para automatizar y optimizar procesos en las organizaciónes.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Desarrollo actividades para la administraación de proyectos de software con estándares de calidad, para automatizar y
                                optimizar procesos en las organizaciones.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Realizo actividades de actualización afines a mi formación profecional.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Desarrollo software para empresas o instituciones.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Participo en actividades académicas afines a mi formación profecional.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Participo en actividades de investigación afines a mi formación profecional.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Participo como socio o tengo mi propia empresa de desarrollo de software en donde se generan proyectos para la
                                mejora organizacional.
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
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

                {/*Botón de guardar encuesta*/}
                <ButtonSave />
            </div>
        </>
    );
}
