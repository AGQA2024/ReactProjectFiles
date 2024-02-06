import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function(){
    return (
        <>
            <nav>
                <Link to="/a?name=Dave">a</Link>
                <Link to="/b?name=Paul">b</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
                
        </>
        
    )
};