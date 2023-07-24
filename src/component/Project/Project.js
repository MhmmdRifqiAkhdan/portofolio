import React from "react"
import "./Project.css"
import Card from "./Card"
import Project_data from "./Project_data"

const Project = () => {
  return (
    <>
      <section className='Project top' id='project'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY Project AND KEEP YOUR FEEDBACK</h4>
            <h1>My Project</h1>
          </div>

          <div className='content grid'>
            {Project_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/Project/Project-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
