import { Link } from "react-router-dom"

const About = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h4>Version 1.1.0</h4>
          <Link to="/">Go back</Link>
    </div>
  )
}

export default About