import ButtonSave from "../../components/buttonSave";
import MessageInfo from "../../components/messageInfo";
import Nabvar from "../../components/navbar";

export default function StudyEconomic() {
    return(
        <>
            <Nabvar />

            <div className="title-main-quizz block">
                <p className="title is-2">Estudio socio - económico</p>
            </div>

            <MessageInfo />

            <div className="quizz-main m-auto">
                <div className="box">
                    <div className="block">
                        <label className="label">1. Estado civil: <span className="span-req">*</span></label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Soltero(a)
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Casado(a)
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Unión libre
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Divorciado(a)
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Viudo(a)
                            </label>
                        </div>
                    </div>

                    {/* Checkbox */}

                    <div className="block">
                        <label className="label">2. ¿Eres foráneo(a)? </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">3. En caso de ser foráneo específica: <span className="span-req">*</span></label>
                            </div>
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">a. Estado: </label>
                            </div>
                            <div className="field-body block">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">b. Municipio: </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">4. ¿De quién dependes económicamente? </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">5. ¿Quién paga tu inscripción? </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">6. Menciona los integrantes de tu familia y edad de cada uno</label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">7. ¿Con quién vives actualmente? <span className="span-req">*</span></label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">8. Ocupación de madre: </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">9. Ocupación de padre: </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">10. Número de personas que dependen económicamente de ti <span
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
                    </div>
                    <div className="block">
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">11. ¿Cuántos miembros de tu familia aportan al ingreso familiar? </label>
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
                    {/* Checkbox */}
                    <div className="block">
                        <label className="label">12. ¿Trabajas? <span className="span-req">*</span></label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">13. ¿En dónde trabajas? </label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">14. Horario laboral </label>
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
                    {/* Checkbox */}
                    <div className="block">
                        <label className="label">15. ¿Cuentas actualmente con alguna beca? <span className="span-req">*</span></label>
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
                        <div className="field is-horizontal">
                            <div className="field-is is-normal" id="field-quizz">
                                <label className="label">16. ¿Qué beca es? </label>
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
                    {/* Checkbox */}
                    <div className="block">
                        <label className="label">15. ¿Cuentas actualmente con alguna beca? </label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Mensual
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Bimestral
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Trimestral
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input type="checkbox" />
                                Anual
                            </label>
                        </div>
                    </div>
                </div>

                {/* Botón de guardar encuesta */}
                <ButtonSave />

            </div>
        </>
    );
}