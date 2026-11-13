import profilePic from "./assets/profile.jpg";
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Rafik<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

     
{/* Hero Section */}
<section className="hero" id="home">

  <div className="hero-content">
    <p className="intro">HELLO, I'M</p>

    <h1>
      Rafik <span>Shaik</span>
    </h1>

    <h2>Frontend Developer</h2>

    <p className="hero-description">
      I build modern, responsive and user-friendly
      web applications using React.js and JavaScript.
      Passionate about creating seamless digital experiences
      and exploring full-stack technologies.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn primary-btn">
        View My Work
      </a>

      <a href="#contact" className="btn secondary-btn">
        Contact Me
      </a>
    </div>
  </div>

  <div className="hero-image">
    <div className="profile-glow">
      <img
        src={profilePic}
        alt="Rafik Shaik - Frontend Developer"
      />
    </div>
    <div className="hero-image-label">
      <span></span> Available for opportunities
    </div>
  </div>

</section>


      {/* Temporary section placeholders */}
      
<section className="about" id="about">
  <p className="section-label">GET TO KNOW ME</p>

  <h2>About Me</h2>

  <p className="about-description">
    I'm a Frontend Developer with nearly 3 years of
    professional experience at Infosys, specializing
    in React.js, JavaScript, Redux and REST API
    integration.

    I enjoy building reusable UI components,
    responsive applications and user-friendly
    digital experiences.

    I'm currently expanding my knowledge of the
    MERN stack and modern web technologies.
  </p>
</section>

      
<section className="skills" id="skills">
  <p className="section-label">WHAT I WORK WITH</p>

  <h2>Technical Skills</h2>

  <div className="skills-container">
    <div className="skill-card">React.js</div>
    <div className="skill-card">JavaScript (ES6+)</div>
    <div className="skill-card">HTML5</div>
    <div className="skill-card">CSS3</div>
    <div className="skill-card">Redux</div>
    <div className="skill-card">Context API</div>
    <div className="skill-card">Node.js</div>
    <div className="skill-card">Express.js</div>
    <div className="skill-card">MongoDB</div>
    <div className="skill-card">REST APIs</div>
    <div className="skill-card">Git & GitHub</div>
    <div className="skill-card">MySQL</div>
    <div className="skill-card">DSA</div>
  </div>
</section>

      
{/* Work Experience */}
<section className="experience" id="experience">
  <p className="section-label">MY PROFESSIONAL JOURNEY</p>
  <h2>Work Experience</h2>

  <div className="experience-card">
    <div className="experience-header">
      <div>
        <h3>Frontend Engineer</h3>
        <h4>Infosys Limited</h4>
        <p>Hyderabad, India</p>
      </div>
      <span className="experience-date">Apr 2022 – Dec 2024</span>
    </div>

    <p>
      Worked on enterprise applications using React.js,
      JavaScript, Redux and REST APIs, developing reusable
      components and responsive user interfaces.
    </p>

    <div className="experience-project">
      <span className="project-tag">PROJECT 01</span>
      <h3>Apple Store – Enterprise Web Application</h3>
      <ul>
        <li>Developed responsive UI components using React.js.</li>
        <li>Implemented Redux for centralized state management.</li>
        <li>Integrated REST APIs for dynamic application data.</li>
        <li>Improved accessibility with keyboard navigation and screen-reader support.</li>
        <li>Worked with Jest testing, achieving 95% code coverage.</li>
      </ul>
    </div>

    <div className="experience-project">
      <span className="project-tag">PROJECT 02</span>
      <h3>PACT – Enterprise Application</h3>
      <ul>
        <li>Integrated application services with SQL Server.</li>
        <li>Contributed to reducing API response time by 40%.</li>
        <li>Supported migration of on-premises services to Microsoft Azure.</li>
        <li>Worked with CI/CD pipelines and automated testing.</li>
      </ul>
    </div>
  </div>
</section>

{/* Projects Section */}
<section className="projects" id="projects">
  <p className="section-label">WHAT I'VE BUILT</p>
  <h2>Featured Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <div className="project-number">01</div>
      <h3>Movie Listing & Favourites App</h3>
      <p>
        A React-based movie application that allows users
        to browse movies, explore details and manage
        their favourite movies.
      </p>
      <div className="project-tech">
        <span>React.js</span>
        <span>Redux</span>
        <span>REST API</span>
        <span>React Router</span>
      </div>
      <a href="https://moviecone.netlify.app/"
         target="_blank" rel="noreferrer">
        Live Demo ↗
      </a>
    </div>

    <div className="project-card">
      <div className="project-number">02</div>
      <h3>FastFood – Food Delivery App</h3>
      <p>
        A full-stack food delivery application with
        customer ordering, an admin panel and backend
        API integration.
      </p>
      <div className="project-tech">
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>REST API</span>
      </div>
      <a href="https://fastfood-frontend.netlify.app/"
         target="_blank" rel="noreferrer">
        Live Demo ↗
      </a>
      <a href="https://github.com/RafikAhamad/FastFood"
         target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </div>

  </div>
</section>

      
{/* Contact Section */}
<section className="contact" id="contact">
  <p className="section-label">LET'S CONNECT</p>

  <h2>Have a Project in Mind?</h2>

  <p className="contact-description">
    I'm currently open to Frontend Developer and MERN
    Stack opportunities. Let's connect and build
    something great together.
  </p>

  <div className="contact-card">
    <h3>Get in Touch</h3>

    <a href="mailto:rafikahmadshaik08@gmail.com">
      rafikahmadshaik08@gmail.com
    </a>

    <div className="contact-links">
      <a
        href="https://github.com/RafikAhamad"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/shaik-rafik-ahmad-59aa431b7/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>
  </div>

  
<a
  href="/Rafik_Resume.pdf"
  download="Rafik_Shaik_Resume.pdf"
  className="btn primary-btn resume-btn"
>
  Download Resume ↓
</a>

<p className="contact-location">Hyderabad, India</p>

<footer className="footer">
  <p>Designed & Built by <span>Rafik Shaik</span></p>
  <p>© 2026 All Rights Reserved.</p>
</footer>

</section>

    </div>
  )
}

export default App
