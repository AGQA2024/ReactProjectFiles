import React from 'react';


function extraDetails(details){alert("Extra details: " + details)};

function item(){return <h2>Test exists</h2>};

// function lname(){return <h3>Do you have a last name?</h3>}

export default function(props){
  return (
    <div>
        
        <h1>Person Details:</h1>
        
        {props.test ? item(): ''}

        <table>

            <tbody>
                <tr>
                <td>Name:</td>
                <td>{props.name}</td>
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