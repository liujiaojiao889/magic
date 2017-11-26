//福袋
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    
    class MoneyCtrl extends ui.Game.MoneyUI{
        constructor () {
            super();
            this.qian_point = null;
            this.init();
        }
        destroy () {
            super.destroy.call(this);
           
        }

        init () {
        	this.centerX = 0;
            this.prizeTip1.text = "≥"+GM.qian_conf_1;
            this.percent.text = GM.qian_conf_2 
            this.qiandai.text = GM.qian_point;
             let ACTIONS = {
                // [GAME_CMDS.USE_INFO] : this.update,
                [GAME_CMDS.PLAY] : this.draw,
                [GAME_CMDS.GAME_RESET] : this.reset,
                [GAME_CMDS.NET_ERROR] : this.netError
            };
           
            Sail.io.register(ACTIONS, this);
        
        
         }
        
        draw(data){
            Laya.timer.once(1000, this, function () {
                 this.qiandai.text = data.qianMoney;
                 
            });
           
            // if(data.qianCoinZ > 0){
                
               
            // }
                
           
        }
        reset(){

        }
        netError(){
            
        }
        poolAmount(Amount){
           
           let poolNum = Number(this.qian_point);//现在奖池里的数据
           let poolAmount = Number(Amount); //后后台传回的奖池金额
            if(poolAmount > poolNum){
            let diff = poolAmount-poolNum;
            let base = parseInt(diff/200);
            base = base==0? 1:base;

            clearInterval(this.poolTimeInterval);
            this.poolTimeInterval = setInterval(function(){
                if(poolNum>=poolAmount){
                clearInterval(this.poolTimeInterval);
                this.qian_point = Amount; 
                
                }else{
                poolNum += base;
                this.qian_point = Amount; 
                }
            }, 1000)
            }else{
                this.qian_point = Amount;
            }

            this.qiandai.text = this.qian_point;
        }
        enter () {
           
        }
    }
    Sail.class(MoneyCtrl, "Com.Game.MoneyCtrl");
}