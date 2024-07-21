//ReactDOM.render(React.createElement('input', {
 //  placeholder: "help text",
 //   onClick: () => console.log("Clicked"),
 //   onMouseEnter: () => console.log("Mouse Over"),
//}), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouseeeeeee")

const helpText = "help teeeeeerrrrrrrr111"

const elements = (<div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText} 
        onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText == "help teeeeeerrrrrrrr" ? "yes" : "no"}</p>    
 </div>)
    

const app = document.getElementById("app")

ReactDOM.render(elements, app)