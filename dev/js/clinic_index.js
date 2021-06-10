
new Vue({
    el:'#app',
    data:{
        memberID:0,
        contents:[
            {
                title:'貓狗七歲以前',
                text:'貓狗七歲以前屬於青少年～青壯年時期，這個時候的毛孩身體強壯、活動力旺盛。但全身健康檢查仍不可忽略，建議每一年檢查一次喔！通常貓狗七歲以後，慢慢步入中老齡，身體也會陸續出現老化徵兆。老化徵兆包含：眼睛混濁、鬍鬚變白、身體出現小肉瘤與老人斑等。所以七歲後建議每半年身體檢查一次，若發覺某部位異狀，也可請獸醫特別觀察。貓狗與我們都一樣，許多疾病透過健康檢查才能即早發現、即早治療喔！',
            },
            {
                title:'貓狗七歲以後',
                text:'通常貓狗七歲以後，慢慢步入中老齡，身體也會陸續出現老化徵兆。老化徵兆包含：眼睛混濁、鬍鬚變白、身體出現小肉瘤與老人斑等。所以七歲後建議每半年身體檢查一次，若發覺某部位異狀，也可請獸醫特別觀察。貓狗與我們都一樣，許多疾病透過健康檢查才能即早發現、即早治療喔！',
            },

        ]
    },
    methods: {
        loginCheck() {
            $.ajax({            
                method: "POST",
                url: "php/front_end_API/M_getsession_MID.php",
                success: (response)=> {
                    
                if(response === '"N"'){
                        alert('請先登入會員'); 
                        $('#m_sign_in_bk').show()
                    }else{
                        this.memberID = parseInt(response.MEMBER_ID)
                        sessionStorage.clear()
                        window.location.href = './clinic_report.html'

                    }              
                },
                error: function(exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        
        },
    },
        
    

})