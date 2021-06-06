// select判斷
const bus =new Vue();

Vue.component('report-basic',{
    template:`
    <div class="c_report_title">
        <div class="c_report_title_left" v-for='basic in basics' v-show='basics[current_report] === basic'>
            <p>寵物報告編號:{{basic.HEALTH_REPORT_ID}} </p>
            <p>寵物姓名：{{basic.PET_NAME}}</p>
            <p>寵物健檢日期:{{basic.BOOKING_DATE}}</p>
            
        </div>
        <div class="c_report_title_right">
            <select v-model="current_report" @change='changed'>
                
                <option v-for='(select,index) in selects'  :value="index">{{select.PET_NAME}}</option>
                
            </select>
        </div>
    </div>
    `,
    props:['selects','basics'],
    data(){
        return {
            current_report:0,
        }
    },
    methods:{
        changed(){
            bus.$emit('reportNumber',this.current_report)
            // $.ajax({
            //     url: "",
            //     type: "POST",       // 傳送資料有包含檔案，必須是 POST
            //     data: "object",
            //     dataType: "json",
            //     timeout: 0,
            // })    
        }
    }
    
})


Vue.component('report-chart', {
    template:`
    <div class='chart-container' style="position: relative; max-height:750px; width:70vw; display:block;margin:0 auto;">
        <canvas id="myChart"></canvas>
    </div>
    `,
    props:['charts'],
    data(){
        return{
            current_report:0,
        }
    },
    computed: {
        listName(){
            for(let i = 0 ;i < this.charts.length ;i++){
                
            }
            return this.charts.LISTNAME[i];
        }
    },
    mounted() {
        //圖表
        var ctx = document.getElementById('myChart');
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1','2','3','4','5','6','7'],
                datasets: [{
                    label: '寵物報告書',
                    data: [7,3,8,6,5,1,9],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        


    },
})


Vue.component('report-suggestion', {
    template:`
    <div class="c_suggestion_background">
        <div class="c_suggestion">
            <div class='c_suggestion_inner'>
                <p v-for='report in reports'>{{report.LISTNAME}}:{{report.HEALTH_CHECK_VALUE}}</p>
                <hr>
                <h3>醫師建議:</h3>
                <p v-for='report in reports2' v-show='reports2[current_report] === report'>{{report.SUGGESTION}}</p>
            </div>
        </div>
        <div class="c_toHomepage">
            <a href="./clinic_index.html"><button>回到健檢首頁</button></a>
        </div>
    </div>
    `,

    props:['reports','reports2'],
    data(){
        return{
            current_report:0,

        }
    },
    
    
    mounted() {
        bus.$on('reportNumber',(value) =>{
            this.current_report = value
        })
    },
    
})


new Vue({
    el:'#app',
    data:{
        selects:[],
        basics:[],
        charts:[],
        reports:[], 
        reports2:[],
        current_report:0,
    },

    created(){
        axios.post("php/front_end_API/CR_select.php").then((res)=>{
           
            this.selects = res.data;
            
        })


        axios.post("php/front_end_API/CR_basic.php").then((res)=>{
            
            this.basics = res.data;

        })

        axios.post("php/front_end_API/CR_report.php").then((res)=>{

            let filterChart = res.data.filter( (item) => {

                return item.HEALTH_CHECK_VALUE > 1;
            });  
            this.charts = filterChart;

            let filterReport = res.data.filter((item) =>   
                item.HEALTH_CHECK_VALUE.includes('。') ? item:null    
            );
            this.reports = filterReport;

        })

        

        axios.post("php/front_end_API/CR_report2.php").then((res)=>{
            
            this.reports2 = res.data;

        })
        
        

        //   axios.post('/user', {
        //     id: 1,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          
        // axios({
        //     method:'post',
        //     url:'php/front_end_API/CR_select.php',
        //     data:{MEMBER_ID : localStorage["memberId"]}
        //     ,
        // }).then(response => {
        //    this.selects = response.data
           
        // })
          
    },
})