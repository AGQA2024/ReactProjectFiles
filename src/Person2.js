import React from 'react';


function extraDetails(details){alert("Extra details: " + details)};

function item(){return <h2>123</h2>};
function item2(){return <h2>ABC</h2>};

let jobs = {
    "artist": <h2 style={{backgroundColor:"red", color:"blue"}}>Artist Details</h2>,
    "programmer": <h2>Programmer Details</h2>,
    // "ninja": <h2 style={{backgroundColor:'blue', color:'navy'}}>Ninja Details</h2>,
    "ninja": (props)=>{return <h2 style={{backgroundColor:props.colour}}>Ninja Details</h2>},
    "designer": (props)=>{return <h3>designer: {props.type}</h3>}
};

let getJob = (key, props)=>{
    return typeof jobs[key]=='function' ? jobs[key](props) : jobs[key];
};

function name(props){
    return <tr>
    <td>Name:</td>
    <td>{props.name}</td>
    </tr> 
};

function age(props){
    return <tr>
    <td>Age:</td>
    <td>{props.age}</td>
    </tr>
};

function gender(props){return<tr>
    <td>Gender:</td>
    <td>{props.gender}</td>
    </tr>};

function telephone(props){return <tr>
    <td>Telephone:</td>
    <td>{props.telephone}</td>
    </tr>};


export default function(props){
  return (
    <div>
        
        <h1>Person Details:</h1>
        
        {props.test ? item(): ''}
        {props.test == "XYZ" ? item2(): ''}
        {/* {jobs[props.employ] ? jobs[props.employ]: ''} */}
        {jobs[props.employ] ? jobs[props.employ]: ''}

        {getJob(props.test, props)}

        {/* You can use this to display further questions if a user selects a particular dropdown choice */}

        <table>

            <tbody>
                {/* The code below could be used to decide whether or not a value should be displayed depending on whether a user has input a value: */}
                {props.personname ? name(props):''}
                {/* {name(props)} */}
                {age(props)}
                {gender(props)}
                {telephone(props)}
            </tbody>
        
        </table>
        
        <button onClick= {()=>extraDetails("ABC")}>Extra Details</button>
    
    </div>
    )
};