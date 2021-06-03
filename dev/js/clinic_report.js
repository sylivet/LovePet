// select判斷
const bus =new Vue();

Vue.component('report-basic',{
    template:`
    <div class="c_report_title">
        <div class="c_report_title_left" v-for='report in reports' v-show='reports[current_report] === report'>
            <p>寵物報告編號:{{report.HEALTH_REPORT_ID}} </p>
            <p>寵物姓名：{{report.PET_NAME}}</p>
            <p>寵物健檢日期:{{report.BOOKING_DATE}}</p>
            
        </div>
        <div class="c_report_title_right">
            <select v-model="current_report" @change='changed'>
                
                <option v-for='(report,index) in reports'  :value="index">{{report.PET_NAME}}</option>
                
            </select>
        </div>
    </div>
    `,
    props:['reports'],
    data(){
        return {
            current_report:0,
        }
    },
    methods:{
        changed(){
            bus.$emit('reportNumber',this.current_report)
        }
    }
    
})


Vue.component('report-chart', {
    template:`
    <div class='chart-container' style="position: relative; max-height:750px; width:70vw; display:block;margin:0 auto;">
        <canvas id="myChart"></canvas>
    </div>
    `,
    props:['reports'],
    data(){
        return{
            count:0,
        }
    },
    mounted() {
        //圖表
        var ctx = document.getElementById('myChart');
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '6','7'],
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
            <textarea readonly>{{reports[count].SUGGESTION}}</textarea>
        </div>
        <div class="c_toHomepage">
            <a href="./clinic_index.html"><button>回到健檢首頁</button></a>
        </div>
    </div>
    `,

    props:['reports'],
    data(){
        return{
            count:0,
        }
    },
    
    
    mounted() {
        bus.$on('reportNumber',(value) =>{
            this.count = value
        })
    },
    
})


new Vue({
    el:'#app',
    data:{
        reports:[], 
        
    },

    created(){
        axios.post("php/front_end_API/CR_select.php").then((res)=>{
          this.reports = res.data
        })
        // axios({
        //     method:'post',
        //     url:'./php/test.php',
        //     data:{MEMBER_ID : localStorage["memberId"]}
        //     ,
        // }).then(response => {
        //    console.log(response);
           
        //   })
          
    },
})