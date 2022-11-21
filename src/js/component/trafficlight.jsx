import React, { useState } from 'react'


const Trafficlight=()=>{
    const [color , setColor]=useState("")
   
    return (
        <div>
            <div className='Poste'></div>
                <div className='Traffic flex-column'>
                    {
                        ["red","yellow","green"].map(lightColor=>
                            <div key={lightColor} onClick={()=>setColor(lightColor)}className={color==lightColor?"clicked contain " + lightColor:"contain "+lightColor}></div>
                            )
                    }
                </div>
            
        </div>
    )
        
    
}

export default Trafficlight