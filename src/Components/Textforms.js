import React,{useState} from 'react'

export default function Textforms(props) {
    const [contents,setText] = useState("");
    const handleUpper = ()=>{
        console.log("You clicked the button");
        var a = contents.toUpperCase();
        setText(a);
        props.alertmsg("Converted to Uppercase","success"); 
    }
    const handleChange =(e)=>{
        // console.log("The text changed");
        setText(e.target.value);
    }
    let clearText = ()=>{
        setText("");
        props.alertmsg("Text Cleared","success");
    };
    let copyText = ()=>{
        navigator.clipboard.writeText(contents);
        props.alertmsg("Text Copied","success");
    };
    let extraSpaces= ()=>{
        let newText = contents.split(/[ ]+/);
        setText(newText.join(" "));
        props.alertmsg("Extra Spaces removed","success");

    }

    return (
        <>
            <div className="mb-3 my-3">
                <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.text}</h3>
                <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} style={{backgroundColor:props.mode==="dark"?"#314256":"white"}} onChange={handleChange} id="exampleFormControlTextarea1" rows="6" value={contents}></textarea>
            </div>
            <button disabled={contents.length===0} type="submit" className='btn btn-primary mx-2 my-1' onClick={handleUpper}>Change to Uppercase</button>
            <button disabled={contents.length===0} type="submit" className='btn btn-primary mx-2 my-1' onClick={clearText}>Clear Text</button>
            <button disabled={contents.length===0} type="submit" className='btn btn-primary mx-2 my-1' onClick={copyText}>Copy Text</button>
            <button disabled={contents.length===0} type="submit" className='btn btn-primary mx-2 my-1' onClick={extraSpaces}>Remove Extraspaces</button>
            <br /><br />
            <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Summary</h2>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>No. of letters = {contents.length}</p>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>Words Count = {contents.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>Time To Read = {contents.split(/\s+/).filter((element)=>{return element.length!==0}).length>0 ?0.04*contents.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} minute</p>
        </>
    )
}
