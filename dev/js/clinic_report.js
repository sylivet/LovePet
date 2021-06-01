

new Vue({
    el:'#app',
    data:{
        current_report:0,
        reports:[
            {   
                petName:'樂樂',
                reportNumber:'健檢報告書號碼：1234567',
                checkDate:'檢查日期：2020/10/10',
                memberId:'(主人)會員編號：AA55555',
                data:[65, 59, 80, 81, 56, 55, 40, 60],
                sug:'10歲以上固定每半到一年驗血健康檢查，跟獸醫討論評咕是否需更換飼料，餐食可以鮮食搭配飼料或全鮮食，營養品補充：ex. 益生箘、魚油…，保護毛孩避免碰撞。',

            },
            {   
                petName:'進寶',
                reportNumber:'健檢報告書號碼：2345678',
                checkDate:'檢查日期：2020/8/9',
                memberId:'(主人)會員編號：BA12345',
                data:[87, 63, 50, 72, 35, 40, 60, 55],
                sug:'由於狗對鹽份攝取量不像人那麼高，但許多狗零食並非是特別製作給心臟、腎臟、腸胃不好的狗食用，加上零食味道偏重，鈉含量恐偏高。飼主應慎選給老年寵物的零食，可改為自己調理、親自水煮雞胸肉，比較天然、且不會有人工添加物，寵物也可以吃得更健康。',
            },
            {   
                petName:'招財',
                reportNumber:'健檢報告書號碼:3749332',
                checkDate:'檢查日期：2020/5/7',
                memberId:'(主人)會員編號：BA12345',
                data:[32, 75, 84, 63, 85, 63, 47, 78],
                sug:'老年狗狗的腸胃蠕動較慢，越接近高齡，吸收與消化的能力也會日漸變差。飼主可運用一些方法嘗試改善：飼料或罐頭的挑選上，可以留意是否有好消化的蛋白質，或選擇軟嫩好入口的材質；自製鮮食或生食的飼主則建議可將食物切碎或製成泥狀；或是添加犬專用酵素、益生菌、膳食纖維等，可幫助消化吸收。此外，平時若狗狗並沒有誤食其他東西，卻突然出現嘔吐症狀時，飼主請視情況評估是否需要讓狗狗腸胃道休息（禁食4-6小時），若禁食後仍持續嘔吐請立即就醫。若出現腹瀉症狀時，建議可先以少量多餐的方式進食，並觀察狀況。',
            },
        ],
        
        
    },
    methods: {
       
       
    },


    mounted() {
        //卷軸
    
            Array.prototype.forEach.call(document.getElementsByClassName('scroll'), function (el) {
                new SimpleBar(el);
            });

        //圖表
        var ctx = document.getElementById('myChart');
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '6','7'],
                datasets: [{
                    label: '寵物報告書',
                    data: [6,12, 19, 3, 5, 2, 3,7],
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
})