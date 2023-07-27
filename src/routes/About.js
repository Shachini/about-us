import React,{Fragment} from 'react'
import "../css/About.css";

const About = () => {
  return (
    <Fragment>

      <section className='about'>
        
        <div className='row'>
          
          <div className='column'>
            <div className='about-img'>
                
            </div>
          </div>
          
          <div className='column'>
            <div className='about-content'>
              <h2>Sri Lanka Police Management System</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button>login</button>
            </div>
            
          </div>
        </div>
      
      </section>
    </Fragment>
  )
}

export default About