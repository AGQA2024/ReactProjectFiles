import React from 'react';


function extraDetails(details){alert("Extra details: " + details)};

function item(){return <h2>Test exists</h2>};

// function lname(){return <h3>Do you have a last name?</h3>}

// Code hold from Person2:
function list(data){
    if (data != undefined){
        data = data.split(",");
    
        return data.map(item=>{
            return item > 'b' ? <li>{item}</li> : <li>****{item}</li>
            }
        )
    }   
    else
        return '';
};


export default function(props){
  return (
    <div>
        
        <h1>Person Details:</h1>
        
        {props.test ? item(): ''}

        <table>

            <tbody>
                <tr>
                    <td>Name:</td>
                    <td><input value={props.name}  onInput=""/></td>
                </tr>
                <tr>
                <td>Age:</td>
                <td>{props.age}</td>
                </tr>
                <tr>
                <td>Gender:</td>
                <td>{props.gender}</td>
                </tr>
                <tr>
                <td>Telephone:</td>
                <td>{props.telephone}</td>
                </tr>
            </tbody>
        
        </table>
        
        <button onClick= {()=>extraDetails("ABC")}>Extra Details</button>
    
    </div>
    )
};