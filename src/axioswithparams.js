import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'No. of MRT riders',
               data:[],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'orange',
              fill:false
            },
            {
              label: 'No. of LRT riders',
               data:[],
              borderWidth:0.5,
              borderColor:"blue",
              backgroundColor: "blue",
              fill:false
            },
            {
              label: 'No. of Bus riders',
               data:[],
              borderWidth:0.5,
              borderColor:"black",
              backgroundColor: "black",
              fill:false
            },
            {
              label: 'No. of Taxi riders',
               data:[],
              borderWidth:0.5,
              borderColor:"red",
              backgroundColor: "red",
              fill:false
            }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a')
        .then(response=>{
          console.log("Response==>")
          console.log(response)
        this.results=response.data.result.records
        console.log("records==>")
        console.log(this.results)
        for (let key in this.results) {
          if (!this.chartdata.labels.includes(this.results[key].year)) {
            this.chartdata.labels.push(this.results[key].year)
          }
          if (this.results[key].type_of_public_transport == "MRT") {
            this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
          } else if (this.results[key].type_of_public_transport == "LRT") {
            this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
          } else if (this.results[key].type_of_public_transport == "Bus") {
            this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
          } else {
              this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
          }
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}