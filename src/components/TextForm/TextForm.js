import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("Enter Text Here")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const UpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("success", "Changed to UpperCase")
    }

    const LowerCase = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert("success", "Changed to LowerCase")
    }
    const Textclear = (event) => {
        let clear = ""
        setText(clear)
        props.showAlert("success", "Clear Text")
    }

    const Copytext = () => {
        let copyText = document.getElementById("mybox");
        copyText.select(text);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
        props.showAlert("success", "Copied the Text")
    }

    const extraSapces = () => {
        let SpacesText = text.split(/[ ]+/)
        setText(SpacesText.join(" "))
        props.showAlert("success", "Remove The Extra Spaces")

    }

    return (
        <>
            <div className='container my-4'>
                <h1 className='my-4' style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={"form-control"} style={{ backgroundColor: props.mode === "dark" ? "#22537b" : "white", color: props.mode === "dark" ? "white" : "black" }} id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={UpperCase}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={LowerCase}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={Textclear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={Copytext}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={extraSapces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4">
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>Your Text Summary</h1>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words & {text.length} Characters</p>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{0.008 * text.length} Minutes Read</p>
                <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Preview</h2>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.length > 0 ? text : "Enter SomeThing to Preview is here"}</p>
            </div>
        </>
    )
}

export default TextForm
