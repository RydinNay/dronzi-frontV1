import React from 'react'
import { Toast } from 'react-bootstrap'

function Toasts({showA, toggleShowA}) {
  return (
        <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
            </Toast.Header>
            <Toast.Body>There are no selected drons or tasks</Toast.Body>
        </Toast>  )
}

export default Toasts