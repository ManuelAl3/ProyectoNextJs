import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function StudentIdentification(){
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
    return (
      <Layout>
        <div className="title-main-quizz block">
          <p className="title is-2">Ficha de identificación de alumnos</p>
        </div>

        <MessageInfo />

        <form className="quizz-main m-auto" onSubmit={handleSubmit(onSubmit)}>
          {/* Módulo periodo de egreso y año de egreso*/}
          <div className="field is-horizontal box">
            <div className="tags">
              <label className="label has-text-light">
                Datos de egreso<span className="forma"></span>
              </label>
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
          {/* Módulo datos generales*/}
          <div className="field is-horizontal box">
            <div className="tags">
              <label className="label has-text-light">
                Datos generales<span className="forma"></span>
              </label>
            </div>
            {/* Matrícula*/}
            <div className="block">
              <div className="field is-horizontal">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Matrícula: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("res1", {
                          required: {
                            value: true,
                            message: "Campo obligatorio",
                          },
                        })}
                        className="input is-purple"
                        type="number"
                        placeholder="respuesta"
                      />
                      {errors.res1 && (
                        <p className="error-message-field">
                          ¡{errors.res1.message}!
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <label className="label">
                Fecha de nacimiento: <span className="span-req">*</span>
              </label>
              <form>
                <input
                  {...register("day", { required: true })}
                  className="input is-purple"
                  type="date"
                  name="day"
                />
                {errors.day && (
                  <p className="error-message-field">¡{errors.res1.message}!</p>
                )}
              </form>
            </div>
            {/* Género*/}
            <div className="block">
              <label className="label">
                Género: <span className="span-req">*</span>
              </label>
              <div className="section-check">
                <div className="control">
                  <label className="radio">
                    <input
                      {...register("radio", { required: true })}
                      type="radio"
                      className="m-rght"
                      name="answer"
                    />
                    Femenino
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      {...register("radio", { required: true })}
                      type="radio"
                      className="m-rght"
                      name="answer"
                    />
                    Masculino
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      {...register("radio", { required: true })}
                      type="radio"
                      className="m-rght"
                      name="answer"
                    />
                    otro
                  </label>
                </div>
                {errors.radio && (
                  <p className="error-message-field">¡{errors.res1.message}!</p>
                )}
              </div>
            </div>
            {/* CURP*/}
            <div className="block">
              <div className="field is-horizontal">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    CURP: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.curp && (
                        <p className="error-message-field">
                          ¡{errors.res1.message}!
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  Correo electrónico alternativo*/}
            <div className="block">
              <div className="field is-horizontal">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Correo electrónico alternativo:
                    <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Campo obligatorio",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto",
                          },
                        })}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.email && (
                        <span className="error-message-field">
                          {errors.email.message}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Teléfono de contacto*/}
            <div className="block">
              <div className="field is-horizontal">
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Teléfono de contacto: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block ">
                  <div className="field">
                    <p className="control input-width-small">
                      <input
                        {...register("telefono", {required: true})}
                        className="input is-purple"
                        type="number"
                        placeholder="respuesta"
                      />
                      {errors.telefono && (
                            <span className="error-message-field">
                            {errors.telefono.message}
                            </span>
                        )}
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
                  <label className="label">
                    Calle: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("calle", {required: true})}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.calle && (
                            <span className="error-message-field">
                            {errors.calle.message}
                            </span>
                        )}
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número exterior: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("nExteriror", {required: true})}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label" type="number">
                    Número interior:
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Colonia/Fraccionamiento: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("colonia", {required: true})}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.telefono && (
                            <span className="error-message-field">
                            {errors.colonia.message}
                            </span>
                        )}
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Localidad: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("localidad", {required: true})}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.colonia && (
                            <span className="error-message-field">
                            {errors.colonia.message}
                            </span>
                        )}
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Estado: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        {...register("estado", {required: true})}
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                      {errors.estado && (
                            <span className="error-message-field">
                            {errors.estado.message}
                            </span>
                        )}
                    </p>
                  </div>
                </div>

                <div className="field-is is-normal" id="field-quizz">
                  <label className="label">
                    Municipio: <span className="span-req">*</span>
                  </label>
                </div>
                <div className="field-body block">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Módulo enfermedad/discapacidad*/}
          <div className="field is-horizontal box">
            <div className="tags">
              <label className="label has-text-light">
                Datos de emergencia<span className="forma"></span>
              </label>
            </div>
            <div className="block">
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Si padeces alguna enfermedad o discapacidad favor de
                  indicarla: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/*  Módulo checkbox*/}
            <div className="block">
              <label className="label">
                En caso de padecer alguna enfermedad ¿recibes tratamiento?:
              </label>
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
          </div>

          {/*  Módulo de contactos*/}
          <div className="field is-horizontal box">
            <div className="tags">
              <label className="label has-text-light">
                Favor de indicar dos contactos en caso de emergencia
                <span className="forma"></span>
              </label>
            </div>
            {/*  Contacto 1*/}
            <div className="block subsection">
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Contacto 1 </label>
              </div>
            </div>
            <div className="block">
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Nombre(s): <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Apellido Paterno: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Apellido Materno: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Parentesco: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Teléfono de contacto: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block ">
                <div className="field">
                  <p className="control input-width-small">
                    <input
                      className="input is-purple"
                      type="number"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              {/*  Módulo domicilio actual*/}
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Domicilio actual: </label>
              </div>
              <div className="section-check field">
                <label className="checkbox">
                  <input type="checkbox" className="m-rght" />
                  Mismo domicilio que el mio
                </label>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Calle: </label>
              </div>
              <div className="field-body block block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Número exterior:
                </label>
              </div>
              <div className="field">
                <p className="control">
                  <input
                    className="input is-purple"
                    type="text"
                    placeholder="respuesta"
                  />
                </p>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Número interior:
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Colonia/Fraccionamiento:</label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Localidad: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Estado: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Municipio: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
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
                <label className="label">
                  Nombre(s): <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Apellido Paterno: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Apellido Materno: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Parentesco: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>

              <div className="field-is is-normal" id="field-quizz">
                <label className="label">
                  Teléfono de contacto: <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block ">
                <div className="field">
                  <p className="control input-width-small">
                    <input
                      className="input is-purple"
                      type="number"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              {/*  Módulo domicilio actual*/}
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Domicilio actual: </label>
              </div>
              <div className="section-check field">
                <label className="checkbox">
                  <input type="checkbox" className="m-rght" />
                  Mismo domicilio que el mio
                </label>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Calle: </label>
              </div>
              <div className="field-body block block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Número exterior:
                </label>
              </div>
              <div className="field">
                <p className="control">
                  <input
                    className="input is-purple"
                    type="text"
                    placeholder="respuesta"
                  />
                </p>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label" type="number">
                  Número interior:
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Colonia/Fraccionamiento:</label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Localidad: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Estado: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
                </div>
              </div>
              <div className="field-is is-normal" id="field-quizz">
                <label className="label">Municipio: </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                  </p>
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
