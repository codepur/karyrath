import React from 'react'
import CardView from './CardView'

export default function Edit(props) {
  return (
    <div>
        <CardView editdata={props.editdata}/>
    </div>
  )
}
