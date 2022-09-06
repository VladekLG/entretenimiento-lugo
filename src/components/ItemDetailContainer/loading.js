import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './loading.css'

export const Loading = () => {
  return (
    <div className='divPadre'>
        <div className='divHijo'>
        <Spinner animation="border" role="status"  variant="primary" className='spinnerReactstrap'/>
        </div>
    </div>
  )
}
