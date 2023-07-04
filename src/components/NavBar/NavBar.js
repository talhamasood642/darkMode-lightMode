import React from 'react'
import '../../App.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <h2 className={`navbar-brand  text-${props.mode === "light" ? "dark" : "light"}`} >{props.title}</h2>
          <button className={`navbar-toggler bg-${props.mode === "dark" ? "white" : "white"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}>{props.AboutText}</Link>
              </li>
            </ul>


            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label class={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} for="flexSwitchCheckDefault">{props.text}</label>
            </div>
            {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={() => props.toggleMode("primary")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
          <div className="bg-success rounded mx-2" onClick={() => props.toggleMode("success")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
          <div className="bg-danger rounded mx-2" onClick={() => props.toggleMode("danger")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
          <div className="bg-warning rounded mx-2" onClick={() => props.toggleMode("warning")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
          <div className="bg-dark rounded mx-2" onClick={() => props.toggleMode("dark")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
          <div className="bg-light rounded mx-2" onClick={() => props.toggleMode("light")} style={{height: "25px" , width:"25px" , cursor:"pointer"}}></div>
        </div> */}


          </div>
        </div>
      </nav>
    </>
  )
}

export default Home


// TOPIC PROPS AND PROTOTYPES
Home.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string
}


Home.defaultProps = {
  title: "Set Title Here",
  AboutText: "About Text Here"
}