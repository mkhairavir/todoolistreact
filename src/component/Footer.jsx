import React from 'react'
import '../App.scss'

let style = {
    backgroundColor: "#1f1f1f",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export default function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
               <h5 style={{color:"#dfdfdf"}}>{ children="Footer" }</h5>
            </div>
        </div>
    )
}
