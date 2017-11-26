// 头部
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    
    class HeaderCtrl extends ui.Game.headUI{
        constructor () {
            super();
            this.betValue = null;
            this.init();
        }
        destroy () {
            super.destroy.call(this);
           
        }

        init () {
            this.rechargeBtn.visible = false;
        	this.y = 0;  
            
        	let ACTIONS = {
                [GAME_CMDS.USE_INFO] : this.update,
                [GAME_CMDS.GAME_BET_VALUE] : this.onBet,
                [GAME_CMDS.PLAY] : this.onResult,
                [GAME_CMDS.GAME_RESET] : this.reset   
                
            };
            Sail.io.register(ACTIONS, this);
            this.onClick();

         }
        update(data){ 
                
        	// 挺豆
        	this.tCoin.text = data.TCoin;
        	// 余额
            this.Ycoin.text = data.gameScore;

            this.gameScore = data.gameScore;
            this.TCoin = data.TCoin;
            
        	
        }
        onBet(value){
            this.betValue = value;
        }
    
        onResult (data) {          
             if(data.prizeAmount >= 0){ 
                let backMoney = data.userAccountBalance;
                let TconRemainingZ =  this.TCoin;
                let YconRemainingZ = this.gameScore;
                let qianCoinZ = data.qianCoinZ;
              
                

                //同步更新账户余额
                if ( backMoney.isVerify ) {
                    //更新余额
                    let parmas = {
                        gameId : GM.gameId,
                        type:1
                    }
                    Sail.io.emit(GAME_CMDS.USE_INFO, parmas, "ajax");
                } else {

                    let TScore = Number(backMoney.tdianPoint);         //欢乐值
                    let caiJin = Number(backMoney.cjPoint);            //彩金
                    let caifen = Number(backMoney.cfPoint);            //彩金
                    let tingDou = Number(backMoney.tdouPoint);         //钻石
                    let wltScore = Number(backMoney.wltPoint);         //万里通积分
                    let jiankangjin = Number(backMoney.jkPoint) || 0;

                    let TbCoin = Number(backMoney.tbPoint);        //返回新欢乐豆
                    let newV = TScore + caiJin + tingDou + wltScore + caifen + jiankangjin; //返回计算新余额

                    //判断TB是否相等，不相等，赋新值
                    if ( TconRemainingZ !== TbCoin ) {
                        TconRemainingZ = TbCoin;
                    } else {
                        TconRemainingZ = TconRemainingZ;
                    }

                    //判断余额和新余额是否相等，不相等，赋新余额
                    if ( YconRemainingZ !== newV ) {
                        YconRemainingZ = newV
                    } else {
                        YconRemainingZ = YconRemainingZ;
                    }

                    Laya.timer.once(1000, this, function () {
                        this.tCoin.text = TconRemainingZ; //更新欢乐豆
                        if(qianCoinZ>0){

                           this.Ycoin.text = YconRemainingZ + data.prizeAmount+qianCoinZ; 
                        }else{
                           this.Ycoin.text = YconRemainingZ + data.prizeAmount; //再更新余额  需要加上赢的钱 
                        }
                        
                    })
                }

               
               
             }
                             
            
        }
        
        
        onClick () {
        	this.btnBack.on(Laya.Event.CLICK, null, function () {
                GM.btnBackCall_out();
            });

             // 豆哥按钮绑定事件
            this.balanceBtn.on(EVENT_CLICK, this, function(){
                Laya.SoundManager.playSound("sound/btn.mp3");
                if(!Sail.checkLogin()){return;}
                if(window.GM && GM.isCall_out === 1 && GM.popBalanceShow_out){                                  
                    GM.popBalanceShow_out(function(data){
                        // console.log(data);
                        // 余额
                        this.Ycoin.text = data.gameScore;

                    }.bind(this));
                }
            });

            this.btnBack.on(Laya.Event.CLICK, null, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                GM.btnBackCall_out();
            });

          
        	// 是否显示返回按钮
            if (window.GM && GM.isCall_out === 1 && GM.isShowBtnBack_out && GM.btnBackCall_out) {
                this.btnBack.visible = true; // 显示返回按钮
            };

            if(GM.backHomeUrl){
                this.homeBtn.visible = true; // 显示返回按钮
                this.homeBtn.on(EVENT_CLICK, this, function () {
                    Laya.SoundManager.playSound("sound/btn.mp3");
                    location.href = GM.backHomeUrl;
                });

            }

			this.setBtn.on(EVENT_CLICK, this, function () {
                
                Laya.SoundManager.playSound("sound/btn.mp3");
                Sail.director.popScene(new Alert.Set);

            });

            this.rankBtn.on(EVENT_CLICK, this, function () {
                
                Laya.SoundManager.playSound("sound/btn.mp3");
            	
                Sail.director.popScene(new Alert.Rank);
            });
          
            
            this.douBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                
                Sail.director.popScene(new Alert.Recharge);
            });
          
            this.rechargeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                
                Sail.director.popScene(new Alert.Recharge);
            });
          
        }
       
        
        enter () {
             Laya.Tween.to(this, {y :40, alpha : 1}, 1000, null, null, 500);
        
           
        }
        reset(){
            
        }
    }
    Sail.class(HeaderCtrl, "Com.Game.HeadCtrl");
}