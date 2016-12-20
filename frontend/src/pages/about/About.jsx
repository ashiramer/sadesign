import React from 'react';
import LeftSideBar from '../../sidebar/LeftSideBar.jsx';

const portrait = require('./portrait.jpg');
const exhibit_left = require('./exhibit_left.jpg');
const exhibit_right = require('./exhibit_right.jpg');
const exhibit = require('./exhibit.jpg');
const exhibit_painting = require('./exhibit_painting.jpg');
const science_image = require('./science.jpg');
require('./about.css');

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    console.log("rendering");
    return (
        <div>
          <LeftSideBar/>
          <div id="art-section" className="section section-black">
            <div id="top-stuff">
              <img id="portrait" src={portrait}/>          
              <p id="art-text-first" className="about-text about-text-full about-text-white">
              <em>ART</em>Saad Amer is passionate about creating work that compels people to think about our planet. He works in photography, video and graphic design to translate environmental messages into visual stories. He has a unique perspective as he also works in fashion photography, branding and marketing. 
              </p>
              <p id="art-text-second" className="about-text about-text-full about-text-white">
            Saad Amer’s work has been published by Vogue Italia, Bund Magazine (China), Samsung USA, Star Central Magazine (Australia) and more. He won an $80,000 first place prize in Samsung’s Solve For Tomorrow Environmental Video Contest and was a finalist in the United States Environmental Protection Agency Rachel Carson Photography Contest. His work has been on display in exhibitions in Cambridge, Boston and New York. 
              </p>
            </div>
            <div id="bottom-container">
              <div id="bottom-left">
                <div id="social-media"></div>
                <img id="exhibit-left" src={exhibit_left}/>
              </div> 
              <div id="bottom-right">
              <img id="exhibit-right" src={exhibit_right}/>
            </div>
          </div>
        </div>
        <div id="science-stuff" className="section section-white">
          <p className="about-text about-text-full about-text-black no-margin">
            <em>SCIENCE</em> A recent graduate, Saad Amer studied Environmental Science and Public Policy with a minor in Organismic and Evolutionary Biology at Harvard University. He co-authored Harvard’s Sustainability Plan and has conducted research in evolutionary genetics and sustainable development. He has served as President of Harvard’s Council on Business and the environment, Chair of Harvard’s Council of Student Sustainability Leaders and has taught in New York, Boston, Shanghai and Japan. 
          </p>
          <img id="science-image" src={science_image}/>
        </div>
        <div id="current-work" className="section section-black">
            <p id="current-text" className="about-text about-text-white no-margin">
              <em>CURRENT WORK</em>Saad is currently working with the Ashoka Trust for Research in Ecology and the Environment (ATREE) and is stationed in the Eastern Himalayas. He is creating photographic and documentary works to tell the stories of India’s environment, culture and history. 
            </p>
          <div className="right-side">
            <img id="exhibit-painting" src={exhibit_painting}/>
          </div>
        </div>
        <div id="exhibit-section" className="section section-white">
          <img id="exhibit-image" src={exhibit}/>
        </div>
      </div>
    )
  }

}

export default About;
