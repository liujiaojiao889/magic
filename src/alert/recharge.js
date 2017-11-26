{
    let EVENT_CLICK = Laya.Event.CLICK;

    class Recharge extends ui.Alert.RechargeUI{
        constructor (data) {
            super();

            this.data = data;
            this.moneyNum = null;
            this.amount = 0;
            this.init();
        }

        init (value) {
            this.onClick();
       
        }
        onClick(){
            
            this.buyBtn1.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.amount = 200;
                this.gorechange(); 
            });
            this.buyBtn2.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.amount = 100;      
                 this.gorechange(); 
            });
            this.buyBtn3.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.amount = 50;      
                 this.gorechange(); 
            });
            this.buyBtn4.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
               this.amount = 10;
                this.gorechange(); 
            });
            this.buyBtn5.on(EVENT_CLICK, this, function () {  
                 Laya.SoundManager.playSound("sound/btn.mp3");

                 this.amount = this.moneyNum;
                 if(this.amount>0){
                    this.gorechange(); 
                 }else{
                    return;
                 }
                   

            });
            this.inputNum.on(EVENT_CLICK, this, function () {             
                console.log("键盘");
                this.inputNum.text = 100;    
                this.showKeyboard(); 
                 

            });
            this.closeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();

            });

        }
        gorechange(){
            let currentUrl =GM.redirect_uri;
            let gameId = GM.gameId;
            let gameName = GM.tradeName;          
            let gameplatform = GM.platform;
            let shuoldPay = this.amount;
            window.location.href = '/?act=payment&gameId='+gameId+'&tradeName='+gameName+'&amount='+shuoldPay+'&platform='+platform+'&redirect_uri='+currentUrl;

        }

        showKeyboard () {
           this.moneyNum  = this.inputNum.text;
                let config = {
                    "input": function (value) {             
                      this.moneyNum = value;
                      console.log(value);
                        
                    },
                    "close" : function (type, value) {
                        if(type == "confirm"){
                            console.log(value);
                            this.moneyNum = value;
                            this.inputNum.text = this.moneyNum;                           
                        }
                    }.bind(this)
                };
                
           
            Sail.keyboard.enter(this.inputNum.text,config);
        }

    }

    Sail.class(Recharge, "Alert.Recharge");
}

