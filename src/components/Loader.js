import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <div>
              <Spinner animation="border" variant="info" className='loading'/>
        </div>
    )
}

export default Loader;