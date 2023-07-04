import Navbar from './components/NavBar/NavBar'
import TextForm from './components/TextForm/TextForm';
import About from './components/About/About'
import React, { useState } from 'react';
import Alert from './components/Alert/Alert'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light")
  const [text, setText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2200);
  }

  // const removeBodyClass = () => {
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-warning")
  // }


  const toggleMode = (cls) => {
    // removeBodyClass()
    // console.log(cls);
    // document.body.classList.add('bg-' + cls)
    if (mode === "light") {
      document.body.style.background = "#042743"
      setMode("dark")
      setText("Disable Dark Mode")
      showAlert("success", "Dark Mode has been Enabled")
      document.title = "TextUtils Dark Mode"
    }
    else {
      setMode("light")
      setText("Enable Dark Mode")
      document.body.style.background = "white"
      showAlert("success", "Light Mode has been Enabled")
      document.title = "TextUtils Light Mode"

    }

  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" AboutText="About us" mode={mode} toggleMode={toggleMode} showAlert={showAlert} text={text} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm heading="Try TextUtils - word counter, character counter , remove extra spaces" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
          <Route path='/About' element={<About  mode={mode}/>}/>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
