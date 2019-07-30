import React from 'react'
import { directive } from '@babel/types';
import Chart from 'chart.js';


const Poll = (props) => {
    
    return (
        <div>
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <h2>{
              props.pollObj.pollster
            }</h2>
            
            <table>
                {
                <tr>
                    <th>Question: {props.pollObj.question}</th>| 
                    <th>Conducted: {props.pollObj.start_date}-{props.pollObj.end_date}, 2019</th>
                </tr>
                }
                {
                <tr>
                <th>Race: {props.pollObj.race}</th>
                </tr>
            }    
            </table>
            
            
            {
            <table>
            {props.pollObj.poll_data_favorabilities.map(result => 
                    
                <th>{result.candidate_id}
                    <tr>Fav: <td>{result.favorable}</td>
                    </tr>
                    {
                    <tr>Unfav: <td>{result.unfavorable}</td>
                    </tr>
                    }
                    {
                    <tr>DK: <td>{result.dont_know}</td>
                    </tr>
                    }
                </th>
            )}
            <tr>
        <th>
        </th>
            </tr>
            </table>
            }

        </div>
    )
}

export default Poll