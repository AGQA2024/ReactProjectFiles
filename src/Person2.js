// import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { useState } from 'react';

// let inputs, setInputs;

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

// function list(data){
//     try{
//         data = data.split(",");
//         return data.map(item=>{
//             return item > 'b' ? <li>{item}</li> : <li>{item}</li>
//         });
//     }
//     catch(ex){
//         // This section is where we would handle the error catching once one has been flagged.
//         // console.log(ex.message);
//     }
// };

function list(data){
    if (data != undefined){
        data = data.split(",");
    
        return data.map(item=>{
            return item > 'b' ? <li>{item}</li> : <li>*{item}</li>
            }
        )
    }   
    else
        return '';
};

// let title = "ABCDSGJHSG";

let getJob = (key, props)=>{
    return typeof jobs[key]=='function' ? jobs[key](props) : jobs[key];
};

function name(props){
    return <tr>
    <td>Name:</td>
    <td>{props.name}</td>
    {/* <input value={props.name}/> */}
    {/* <input value={title} onInput={e=>{title = e.target}}/> */}
    
    {/* <input value={props.title} onInput={e=>{props.title = e.target}}/>
    <td>{`${props.title}`}</td> */}

    </tr> 
};

function age(props){
    return <tr>
    <td>Age:</td>
    <td>{props.age}</td>
    {/* <td>{inputs.age}</td> */}
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

// // Workout how to capture the entirety of a form: 
// function doInput(event, inputs){
//     if(event.target.name != undefined){
//         let newData = {...inputs};
//         newData[event.target.name] = event.target.value;
//         setInputs(newData);
//     }
//     // alert(event.target.name) // This is targeting the name attribute
//     // e=>{setInputs({...inputs,name:e.target.value});}
// };

export default function(props){

    let [counter, setCounter] = useState(0);
    let [title, setTitle] = useState("Title");

    // let [age, setAge] = useState();

    let test1 = {
        name: "frank",
        age: 123,
        gender: "F",
        telephone: '999'
    };
    let [inputs, setInputs] = useState(test1);

    // let [inputs, setInputs] = useState({});
    // [inputs, setInputs] = useState({});

    // Workout how to capture the entirety of a form: 
    function doInput(event){
    if(event.target.name != undefined){
        // event.preventDefault();
        let newData = {...inputs};
        newData[event.target.name] = event.target.value;
        setInputs(newData);
    }
    // alert(event.target.name) // This is targeting the name attribute
    // e=>{setInputs({...inputs,name:e.target.value});}
    };

    let [newTest,setNewTest] = useState(100);
    let [newTest_two, setNewTest_two] = useState("a");
    let [newTest_three, setNewTest_three] = useState("b");

    useEffect(()=>{
        setNewTest(newTest + 1);
        console.log("Hello");
        
    }, [newTest_two, newTest_three]); 
    // If you include no dependencies it will run only once following the feature's render, if you include one dependency it will call the function and then update the value everytime it registers an input and not the other, if you include all then it will update everytime. 

    useEffect(()=>{
        fetch('https://dummyjson.com/users/1')
            .then(result=>result.json())
            .then(data=>{
                console.log(data);
            });
    });

    return (
        // If you change the div element to <form> then when you hit any button it will submit the full form. We can get around this but it isn't helpful for single page sites.
        // You could write <form onSubmit={e=>e.preventDefault()}> in order to prevent the form from submitting?
        <div> 
            
            {props.test ? item(): ''}
            {props.test == "XYZ" ? item2(): ''}
            {/* {jobs[props.employ] ? jobs[props.employ]: ''} */}
            {jobs[props.employ] ? jobs[props.employ]: ''}

            {getJob(props.test, props)}

            {/* You can use this to display further questions if a user selects a particular dropdown choice */}

            <h1>Person Details ({counter}): {title}</h1>
            {/* <button onClick={e=>setCounter(counter++)}>Click Me!</button> */}

            <h2>New Test {newTest}</h2>
            <input onInput={e=> setNewTest_two(e.target.value)}/>
            <input onInput={e=> setNewTest_three(e.target.value)}/>

            <button onClick={e=>{
                e.preventDefault(); // This would stop the form submitting.
                setCounter(counter++)}}>Click Me!</button>
            
            <h3>Name:{inputs.name}</h3>
            <h3>Age:{inputs.age}</h3>
            <h3>Gender:{inputs.gender}</h3>
            <h3>Telephone:{inputs.telephone}</h3>

            <table onInput={e=>doInput(e)}>

                <tbody>
                    {/* The code below could be used to decide whether or not a value should be displayed depending on whether a user has input a value: */}
                    {/* {props.personname ? name(props):''} */}

                    <tr>
                        {name(props)}
                        {/* <input value={title} onInput={e=>{setTitle(e.target.value);}}/> */}
                        {/* <input value={props.name} onInput={e=>{setInputs({...inputs,name:e.target.value});}}/> */}
                        <input value={props.name} name ="name"/>
                        {/* <input value={props.name} onInput={e=>doInput(e)} name ="name"/> */}

                    </tr>
                    
                    <tr>
                        {age(props)}
                            
                        <input name = "age" value={props.age} onInput={e=>{setInputs({...inputs,age:e.target.value});}}/>

                    </tr>
  
                    <tr>
                        
                        {gender(props)}
                        <input name = "gender" value={props.gender} onInput={e=>{setInputs({...inputs, gender:e.target.value});}}/>
                    </tr>

                    <tr>
                        {telephone(props)}
                        <input name = "telephone" value={props.telephone} onInput={e=>{setInputs({...inputs, telephone:e.target.value});}}/>
                    </tr>
                    

                    {/* List code hold: */}
                    {/* {list(props.list)} */}
                </tbody>
            
            </table>
            
            <button onClick= {()=>extraDetails("ABC")}>Extra Details</button>
        
        </div>
        )
};