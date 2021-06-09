// select判斷
const bus =new Vue();

Vue.component('report-basic',{
    template:`
    <div class="c_report_title">
        <div class="c_report_title_left" v-if='PET=="請選擇您的寵物"'>
            <p>寵物報告編號:</p>
            <p>寵物姓名：</p>
            <p>寵物健檢日期:</p>
            
        </div>
        <div class="c_report_title_left" v-for='(select,index) in selects' v-show='selects[PET] === select'>
        <p>寵物報告編號:{{select.HEALTH_REPORT_ID}}</p>
        <p>寵物姓名：{{select.PET_NAME}}</p>
        <p>寵物健檢日期:{{select.BOOKING_DATE}}</p>
        
    </div>
        <div class="c_report_title_right">
            <select v-model="PET">

                <option disabled selected="selected">請選擇您的寵物</option>
                <option v-for='(select,index) in selects'  :value="index">{{select.PET_NAME}}</option>
                
            </select>
        </div>
    </div>
    `,
    props:['selects','memberid'],
    data(){
        return {
            PET:'請選擇您的寵物',
            SELECTS:[],
            allreport:[],
            charts:[],
            reports:[],
            suggestion:[],
        }
    },
    
    methods:{
        
    },
    watch:{
        PET() {
            // select + basic
            $.ajax({            
                method: "POST",
                url: "php/front_end_API/CR_select.php",
                data:{'FK_MEMBER_ID' : this.memberid},
                success: (res)=> {
                    this.SELECTS = JSON.parse(res);
                    // reports
                    $.ajax({            
                       method: "POST",
                       url: "php/front_end_API/CR_report.php",
                       data:{'FK_PET_ID' : this.SELECTS[this.PET].PET_ID},
                             
                        success: (res)=> {
   
                            document.querySelector('.chart-container').innerHTML = '<canvas id="myChart"></canvas>'
                            this.allreport = JSON.parse(res);

                            //  suggestion
                             $.ajax({            
                                method: "POST",
                                url: "php/front_end_API/CR_report2.php",
                                data:{'FK_PET_ID' : this.SELECTS[this.PET].PET_ID},
                                success: (res)=> {
                                    
                                    this.suggestion = JSON.parse(res);
                                },
                                
                            });
                        },
                       
                    })
                },
                error: function(exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });

        },
        allreport() {
            let filterChart = this.allreport.filter ((item) => {
                return item.HEALTH_CHECK_VALUE > 1;
            });  
            this.charts = filterChart;
            document.querySelector('.chart-container').innerHTML = '<canvas id="myChart"></canvas>'
           
            let filterReport = this.allreport.filter ((item) =>   
               item.HEALTH_CHECK_VALUE.includes('。') ? item:null    
            );
            this.reports = filterReport;
        },
        charts() {
            document.querySelector('.chart-container').innerHTML = '<canvas id="myChart"></canvas>'
            bus.$emit('chart',this.charts); 
        },
        reports() {
            bus.$emit('report',this.reports); 
        },
        suggestion() {
            bus.$emit('sug',this.suggestion);
        },
    }
})

Vue.component('report-chart', {
    template:`
    <div class='chart-container' style="position: relative; max-height:750px; width:70vw; display:block;margin:0 auto;">
        <canvas id="myChart"></canvas>
    </div>
    `,
    props:[],
    data(){
        return{
            current_report:0,
            list:[],
            chart:[],
            ctx:null,
            chartjs:[],
        }
    },
    methods: {
        callChart() {
            this.ctx = document.getElementById('myChart');
            this.ctx = new Chart(this.ctx, {
                type: 'bar',
                data: {
                    labels:this.chartjs[0],
                    datasets: [{
                        label: '寵物報告書',
                        data:this.chartjs[1],
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
        }
    },
    mounted(){
        bus.$on('chart',(value) =>{ this.chart = value })
        
    },    
    watch:{
        chart() { 
           
            // if(this.ctx!=null){
            //     this.ctx.destroy();
            //     this.ctx = null;
            // }
            let arr=[[],[]]
            for(let i = 0; i < this.chart.length ;i++){
                arr[0].push(this.chart[i].LISTNAME);
            }
            
            for(let i = 0; i < this.chart.length ;i++){
                arr[1].push(this.chart[i].HEALTH_CHECK_VALUE);
            }
            this.chartjs = arr;
            this.callChart();
           
        },  
    },
    
})

Vue.component('report-suggestion', {
    template:`
    <div class="c_suggestion_background">
        <div class="c_suggestion">
            <div class='c_suggestion_inner'>
                <p v-for='sug in report'>{{sug.LISTNAME}}:{{sug.HEALTH_CHECK_VALUE}}</p>
                <hr>
                <h3>醫師建議:</h3>
                <p v-for='sug in suggestions'>{{sug.SUGGESTION}}</p>
            </div>
        </div>
        <div class="c_toHomepage">
            <a href="./clinic_index.html"><button>回到健檢首頁</button></a>
        </div>
    </div>
    `,
    props:[],
    data(){
        return{
            current_report:0,
            report:[],
            suggestions:[],
        }
    },
    mounted() {
        bus.$on('report',(value) =>{
            this.report = value
        })
        bus.$on('sug',(value) =>{
            this.suggestions = value
        }) 
    },
    
})

new Vue({
    el:'#app',
    data:{
        PET_ID:null,
        MEMBER_ID:null,
        selects:[],
        basics:[],
        charts:[],
        reports:[], 
        reports2:[],
        current_report:0,
    },
    watch:{
        MEMBER_ID(){
            //select
            $.ajax({            
                method: "POST",
                url: "php/front_end_API/CR_select.php",
                data:{'FK_MEMBER_ID' : this.MEMBER_ID},
                success: (res)=> {
                    this.selects = JSON.parse(res);
                },
                error: function(exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        }
    },
    created(){
        $.ajax({            
            method: "POST",
            url: "php/front_end_API/M_getsession_MID.php",
            success: (response)=> {
                
                this.MEMBER_ID = parseInt(response.split(`"`).join(""))
                    
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    },
})