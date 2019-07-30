import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData: {
                labels: 
                    // "Joe Biden", "Elizabeth Warren", "Beto O'Rourke", "Pete Buttigieg", "Marianne Williamson"
                    this.props.pollObj.poll_data_favorabilities.map(candidate => {
                      return candidate.candidate.name
                    }),
                datasets: [{
                    label: 'Favorable',
                    data: 
                        this.props.pollObj.poll_data_favorabilities.map(candidate => {
                            return candidate.favorable
                        }),
                        
                    backgroundColor: [
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)",
                        "rgba(32, 46, 233, 1)"
                    ]
                },
                {
                    label: 'Unfavorable',
                    data: 
                        this.props.pollObj.poll_data_favorabilities.map(candidate => {
                            return candidate.unfavorable
                        }),
                    backgroundColor: [
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)",
                        "rgba(217, 28, 28, 1)"
                    ]
                },
                {
                    label: "Don't Know",
                    data: 
                        this.props.pollObj.poll_data_favorabilities.map(candidate => {
                            return candidate.unfavorable
                        }),
                    backgroundColor: [
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)",
                        "rgba(133, 133, 133, 1)"
                    ]
                }
            ]
            }
        }
    }
        render(){
            return(
                <div className="chart">
                   <Bar
                    data={this.state.chartData}
                    options={{ 
                        title:{
                            display: true,
                            text: this.props.pollObj.pollster,
                            fontSize: 25
                    
                        },
                    legend: {
                        display: true,
                        position: 'right',
                        // labels:{
                        //     fontColor: '#000'
                        // }
                    }}}
                /> 
                </div>
            )
        }  
    
    }
    
        


export default Chart