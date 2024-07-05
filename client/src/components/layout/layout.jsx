import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar';


const layout = (props) => {
    return (
        <Fragment>
           
            <header>
              
                <Navbar/>
            </header>
            <main>
                {props.children}
                
            </main>
            <footer>
            </footer>
        </Fragment>
    )
}

export default layout;
