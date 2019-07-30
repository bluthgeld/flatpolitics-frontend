import React from 'react'
import Poll from './Poll.js'
import { directive } from '@babel/types';
import Chart from './Chart.js'

const PollContainer = (props) => {
    
    return (
        <div>
            {
                props.allPolls.map(pollObj => <Chart 
                    key={pollObj.id}
                    pollObj={pollObj}
                    />  
                )
           }   
        </div>  
          
          
    )
}


export default PollContainer


