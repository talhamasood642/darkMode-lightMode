import React from 'react'

const About = (props) => {

    let mystyle={
        color: props.mode === "dark" ? "white" : "black",
        background: props.mode === "dark" ? "#22537b" : "white"
    }

    return (
        <div className='container my-4'>
            <h1 className={`text-${props.mode === "dark" ? "white" : "black"}`}>About Us</h1>
            <div class="accordion " id="accordionExample" style={mystyle}>
                <div class={`accordion-item`} style={mystyle}>
                    <h2 class="accordion-header" id="headingOne" style={mystyle}>
                        <button style={mystyle} class={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" style={mystyle} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class={`accordion-item `} style={mystyle}>
                    <h2 class="accordion-header" id="headingTwo" >
                        <button style={mystyle} class={`accordion-button collapsed `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" style={mystyle} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class={`accordion-item `} style={mystyle}>
                    <h2 class="accordion-header" id="headingThree">
                        <button class={`accordion-button collapsed `} style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
