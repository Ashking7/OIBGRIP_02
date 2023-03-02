import React from 'react'
import './Projects.css'
import 'bootstrap/dist/css/bootstrap.css'

export const Projects = () => {
    return (
      <section id="projects">
      <div className="projects container">
          <div className="projects-header">
              <h1 className="section-title">Recent <span>Projects</span></h1>
          </div>
          <div className="all-projects">
              <div className="project-item">
                  <div className="project-info">
                      <h2>Calendar in C</h2>
                      <p>I successfully developed Calendar Project in C language.In this module the function of the calendar to output the week day for the input of the dates.I learned how the various types of data structures are used in C languages</p>
                  </div>
                  <div className="project-img">
                  </div>
              </div>
              <div className="project-item">
                  <div className="project-info">

                      <h2>Sudoku Solver</h2>
                      <p>I successfully developed Sudoku Solver in Java.In this project a random sudoku was generated and the solution to that sudoku was given. I learned the basic concepts of java while working on that project</p>
                  </div>
                  <div className="project-img">
                  </div>
              </div>
              <div className="project-item">
                  <div class="project-info">
                      <h2>Black Spot</h2>
                      <p>I successfully completed the blackspot project which was created using the concepts of Advance Java,Jdbc and Jsp servlett. In this project it shows the blackspots in a specific city.</p>
                  </div>
                  <div className="project-img">
                  </div>
              </div>
          </div>
      </div>
  </section>

      );
}
