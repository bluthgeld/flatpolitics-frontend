import React from 'react'
import Poll from './Poll.js'
import { directive } from '@babel/types';
import Chart from './Chart.js'

const PollContainer = (props) => {
    
    return (
        <div>
            {
                props.allPolls.map(pollObj => <Poll 
                    key={pollObj.id}
                    pollObj={pollObj}
                    />  
                )
           }   
             <Chart 
                allPolls={props.allPolls}
                />
        </div>  
          
          
    )
}


export default PollContainer


