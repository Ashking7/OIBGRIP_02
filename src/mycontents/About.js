import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const About = () => {
  return (
    <section id="about">
    <div className="about container">
        <div className="col-left">
        </div>
        <div className="col-right">
            <h1 className="section-title">About <span>me</span></h1>
            <p>Hi, I'm Ashay and I'm a programmer and developer. I have a Bachelor's degree in Computer Science. I specialize in web development and have worked with a variety of languages such as HTML, CSS, JavaScript, PHP and SQL. I have worked as intern (Java Developer) for duration of three months in r3sys. Successfully made the dynamic web projects using java as well as MERN stack.I have a strong knowledge of object-oriented programming principles and I'm familiar with frameworks such as React. Believing in mantra of "Development is all which human needs to survive" </p>
            <h1 className="section-title">Qualifications</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.no</th>
          <th>Degree</th>
          <th>College/School</th>
          <th>Grades</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>SSC</td>
          <td>R.C.Patel English Meduim Secondary School,Shirpur</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>HSC</td>
          <td>R.C.Patel Main Building,Shirpur</td>
          <td>85%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>B.tech</td>
          <td>R.C.Patel Institute of Technology,Shirpur</td>
          <td>8.23 CGPA</td>
        </tr>
      </tbody>
    </Table>
    <h1 className="section-title">Qualities</h1>
    <>
    <Button variant="outline-dark">Adabtability</Button>{' '}
    <Button variant="outline-dark">Coding</Button>{' '}
    <Button variant="outline-dark">Communication</Button>{' '}<br/>
    <Button variant="outline-dark">Creativity</Button>{' '}
    <Button variant="outline-dark">Networking</Button>{' '}
    <Button variant="outline-dark">Problem Solving</Button>{' '}<br/>
    <Button variant="outline-dark">Research</Button>{' '}
    <Button variant="outline-dark">Resilience</Button>{' '}
    <Button variant="outline-dark">Security</Button>{' '}<br/>
    <Button variant="outline-dark">Software Development</Button>{' '}
    <Button variant="outline-dark">Detail-oriented</Button>{' '}
    <Button variant="outline-dark">Analytical</Button>
    </>
        </div>
    </div>
</section>

  );
}
