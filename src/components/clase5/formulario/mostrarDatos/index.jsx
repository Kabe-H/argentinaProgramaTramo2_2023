import { Typography } from '@mui/material'
import React, {useState} from 'react'

export default function MostrarDatos(props) {
    const [nombreMostrar, setNombreMostrar] = useState(props.name)
    const [mailMostrar, setMailMostrar] = useState(props.mail)
  return (
    <div>
        <Typography>{props.name}</Typography>
        {console.log(props, typeof props, "ESTA ES LA PROP")}
        <Typography>{mailMostrar}</Typography>
    </div>
  )
}
