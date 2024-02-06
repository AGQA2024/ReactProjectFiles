import React from "react";
import { useSearchParams } from 'react-router-dom';

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

// export default function(props){
//     const [searchParams, setSearchParams] = useSearchParams();
//     // let urlParams = new URLSearchParams(window.location.search);
//     let link = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+searchParams.get("name");

//     return (
//         <>
//             <h1> Welcome{searchParams.get("name")} </h1>
//             <h1> You are in {searchParams.get("location")} </h1>
//             <img src={link}/>
//         </>
//     )
// }