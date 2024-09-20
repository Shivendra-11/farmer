import React from 'react';
import './timeline.css'; // Assuming you have corresponding CSS

const Timeline = () => {
  return (
    <section id="process">
      <div className="row">
        <div className="section-heading">
          <h2 className="text-center orange">Responsive Horizontal Timeline</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="steps-timeline text-center">
            {/* Step 1 */}
            <div className="steps-one">
              <h3>Step 1</h3>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src="https://imgur.com/5U7IJvy.png" alt="Step 1" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <p>
                    Please fill your respective details in the attached TAX sheet whose salary mandat
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="steps-two">
              <h3>Step 2</h3>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-orange">
                <div className="steps-pane">
                  <img src="https://imgur.com/ACjjJNm.png" alt="Step 2" />
                </div>
              </div>
              <div className="inverted-pane-warp back-orange">
                <div className="inverted-steps-pane">
                  <p>
                    Please fill your respective details in the attached TAX sheet whose salary mandat
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="steps-three">
              <h3>Step 3</h3>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img className="third" src="https://imgur.com/5U7IJvy.png" alt="Step 3" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <p>
                    Please fill your respective details in the attached TAX sheet whose salary mandat
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="steps-four">
              <h3>Step 4</h3>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-orange">
                <div className="steps-pane">
                  <img src="https://imgur.com/ACjjJNm.png" alt="Step 4" />
                </div>
              </div>
              <div className="inverted-pane-warp back-orange">
                <div className="inverted-steps-pane">
                  <p>
                    Please fill your respective details in the attached TAX sheet whose salary mandat
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="steps-five">
              <h3>Step 5</h3>
              <div className="inverted-end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src="https://imgur.com/5U7IJvy.png" alt="Step 5" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <p>
                    Please fill your respective details in the attached TAX sheet whose salary mandat
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* /.steps-timeline */}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
