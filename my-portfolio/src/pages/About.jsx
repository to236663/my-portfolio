import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src='/headshot.jpg' alt='Tommy Fernandez headshot'></img>
        <p>My name is Tommy Fernandez, and I am currently studying 
          Digital Media with a focus in Web Design at the University 
          of Central Florida in Orlando.
        </p>
        <p>Since high school, I've always had an interest in fields 
          that bridge creativity and technology together, leaving me 
          with a desire to master skills like Graphic Design and 
          Photography, just to name a few.
        </p>
        <p>During my time at UCF, I've been able to experience and grow
          in so many interesting areas of knowledge with regards to Web
          and Graphic Design, and gain experience using industry programs
          and languages, like Adobe CC, HTML5, JavaScript, PHP, MySQL, React,
          and many others.
        </p>
        <p>Head over to the Projects page to see my continually expanding 
          portfolio of digital work!
        </p>
      </div>
    </div>
  );
}

export default About;
