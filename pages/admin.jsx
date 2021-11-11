import Layout from '../components/Layout';


export default function Admin() {
    return (
      <>
        <Layout>
          <form className="quizz-main m-auto" action="/save" method="POST">
            <div className="field is-horizontal box">
              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  {/*question_id */}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label">
                    {/*answer_1 */}
                  </label>
                </div>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label"></label>
                </div>
              </div>

              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  {/*question_id */}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label">
                    {/* answer_2 */}
                  </label>
                </div>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label"></label>
                </div>
              </div>

              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  {/*question_id */}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label">
                    {/* answer_3 */}
                  </label>
                </div>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label"></label>
                </div>
              </div>

              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  {/*question_id */}
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label">
                    {/* answer_4 */}
                  </label>
                </div>
              </div>
              <div className="field-body block">
                <div className="field">
                  <label name="question_id" className="label"></label>
                </div>
              </div>
            </div>
          </form>
        </Layout>
      </>
    );
}