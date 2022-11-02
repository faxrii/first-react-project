import './App.css';
import { AiOutlinePlus } from 'react-icons/ai';
import images from './media/images.jpg';
import {AiFillStar} from 'react-icons/ai';
import brain from './media/brain.jpg';
import building from './media/building.webp';
import {SlNotebook} from 'react-icons/sl';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
function App() {
  return (
    <>
      <header id='header'>
       
       <div className='up-header'>
        <p>Coronavirus: What you need to know about COVID-19</p>
        </div>


        <div className='container'>
          <div className='down-header'>
             <div className='left-header'>
             <div className='ico-box'>
                  <AiOutlinePlus className='plus-ico ico'/>
             </div>
             <p>Symptomate</p>
             </div>

             <div className='right-header'>
               <ul>
                  <li>For business</li>
                  <li>Apps</li>
                  <li>English</li>
                  <li>Start checup</li>
               </ul>
             </div>
          </div>
        </div>
    </header>


      <section id='concers'>
        <div className='container'>
          <div className='all-concers'>
            <div className='left-concers'>
              <h2>What concerns you about your health today?</h2>
              <p>Check your symptoms and find out what could be causing them. It's fast, free and anonymous.</p>
              <a>Start checup</a>
            </div>

            <div className='right-concers'>
               <img src={images}/>
            </div>

          </div>
        </div>
      </section>



      <section id='corona'>
         <div className='container'>
            <div className='all-corona'>
              <div className='left-corona'>

              </div>

              <div className='right-corona'>
                  <div className='all-right-corona'>
                  <span>Article</span>
                 <h3>Coronavirus: What you need to know about COVID-19</h3>
                 <a>Read more</a>
                  </div>
              </div>
            </div>
         </div>
      </section>


      <section id='symptom'>
        <div className='container'>
            <div className='all-symptom'>
               <div className='left-symptom'>
                   <h3>Symptomate provides you with a fast and accurate health assessment</h3>
                   <ul>
                    <li>Enter your symptoms</li>
                    <li>Answer some simple questions</li>
                    <li>Done! Your assessment will reveal:</li>
                   </ul>

                   <ul>
                      <li>Possible causes of your symptoms</li>
                      <li>Options for next steps</li>
                      <li>Suggested lab test</li>
                   </ul>
               </div>

               <div className='right-symptom'>
                <img src={images}/>
               </div>
            </div>
        </div>
      </section>



      <section id='people'>
        <div className='container'>
          <div className='all-people'>
            <div className='left-people'>
               <h3>Over 4 million people have already used Symptomate</h3>
               <a>Start checup</a>
            </div>

            <div className='right-people'>
                 <div className='right-text'>
                 <p>Accurate diagnosis. The app encouraged me to visit my doctor before it was too late. Thanks so much!</p>
                  <div className='ico-box'>
                    <AiFillStar  className='star-ico'/>
                    <AiFillStar className='star-ico'/>
                    <AiFillStar className='star-ico'/>
                    <AiFillStar className='star-ico'/>
                    <AiFillStar className='star-ico'/>
                  </div>
                 
                 </div>
            </div>
          </div>
        </div>
      </section>


      <section id='intelligent'>
            <div className='container'>
               <div className='all-intelligent'>
                   <div className='left-intelligent'>
                      <h3>Intelligent technology you can trust</h3>
                      <p>mate AI uses our doctors’ knowledge, scientific literature and statistical data culled from thousands of patient cases.</p>
                   </div>


                   <div className='right-intelligent'>
                       <img src={brain}/>
                   </div>
               </div>
            </div>
      </section>


      <section id='business'>
        <div className='container'>
           <div className='all-business'>
               <div className='left-business'>
                <h3>Symptomate for business</h3>
                <p>ymptomate demonstrates the capabilities of the Infermedica diagnostic engine. The app you’re using right now can be tailored to the needs of your business.</p>
                <a>Start checup</a>

               </div>

               <div className='right-business'>
                  <img src={building}/>
               </div>
           </div>
        </div>

      </section>


      <section id='users'>
        <div className='container'>
           <div className='all-users'>
           <p>
            <SlNotebook className='note-ico'/>
           
               72% of internet users look for health information online
            </p>

           </div>


           <p>Source: Pew Research Center’s Internet & American Life Project, Health Online, 2013</p>
        </div>
      </section>



      <section id='footer'>
         <div className='container'>
             <div className='all-footer'>
                 <div className='up-footer'>
                     <div className='left-up-footer'>
                     <p>Diagnostic technology is powered by Infermedica</p>
                     </div>

                     <div className='right-up-footer'>
                       <FaFacebookF className='ico-social'/>
                       <FaInstagram className='ico-social'/>
                       <FaTwitter className='ico-social'/>
                       <FaYoutube className='ico-social'/>
                     </div>
                 </div>


                 <div className='down-footer'>
                    <ul>
                      <li>About</li>
                      <li>Medical Interview</li>
                      <li>Press kit</li>
                      <li>Contact</li>
                    </ul>

                    <p>This site uses cookies. For more information, see our Terms of Service, Privacy Policy and Cookies Policy.</p>
                    <span>Infermedica © 2022</span>
                 </div>
             </div>
         </div>
      </section>


      




    </>

    
  );
}

export default App;
