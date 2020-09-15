import {Pie} from 'vue-chartjs'
export default{
    extends:Pie,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Sales',
              data: [400, 300,150,100],
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000",
              fill:false
            },
            {
                label: 'Sales2',
                data: [40, 30,10,15],
                backgroundColor:['aqua','lightgreen','red','orange']
              }
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}