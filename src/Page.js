import React from "react";

export default function(props){
    let urlParams = new URLSearchParams(window.location.search);
    let link = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+urlParams.get("name");

    return (
        <>
            <h1> Welcome{urlParams.get("name")} </h1>
            <img src={link}/>
        </>
    )
}