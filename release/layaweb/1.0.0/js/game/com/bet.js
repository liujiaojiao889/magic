//押注和自动投
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let EVENT_MOUSEDOWN = Laya.Event.MOUSE_DOWN;
    let EVENT_MOUSEUP = Laya.Event.MOUSE_UP;
    let INIT_DEFAULT_BET_VALUE = false;
    let utils = Sail.Utils;
    
    class Bet extends ui.Game.BetUI{
        constructor () {
            super();
         	this.maxValue = 0;
            this.gameScore = 0;
            this.TCoin = 0;
            this.TScore = 0;
            this.caijing = 0;
            this.caifen = 0;
            this.tingdou = 0;
            this.wltScore = 0;
            this.jiankangjin = 0
            this.clickTime = null;  //按下时间
            this.isRun = true;  //是否游戏中
            
            this.playValue = 100;  //押注金额
            this.zdNum = null;  //自动玩次数
            this.sta = null;
            this.params = null;
            this.autoBetFlag = 0;
            this.init();
        }
        destroy () {
            super.destroy.call(this);
           
        }

        init () {
            this.rechargeBtn.visible = false;
        	this.bottom = 0;
            this.start.bottom = -100;
            this.bet.bottom = 10;
             // 个人信息接口,更新账户信息
            let ACTIONS = {
                [GAME_CMDS.USE_INFO] : this.update,
                [GAME_CMDS.PLAY] : this.draw,
                [GAME_CMDS.GAME_RESET] : this.reset,
                [GAME_CMDS.NET_ERROR] : this.netError
            };
           
            Sail.io.register(ACTIONS, this);
        	this.reduceBtn.on(EVENT_CLICK, this, this.calc, ["decrease"]);
            this.addBtn.on(EVENT_CLICK, this, this.calc, ["increase"]);
            this.btnMax.on(EVENT_CLICK, this, this.calc, ["max"]);
            this.rechargeBtn.on(EVENT_CLICK, this, () => {
                if(!Sail.checkLogin()){return;}
                Sail.director.popScene(new Alert.Recharge);
                Laya.SoundManager.playSound("sound/btn.mp3");
            });
            this.betValue.on(EVENT_CLICK, this, this.showKeyboard);
            this.onClick();
            let sta = utils.createSkeleton("res/dragon/start");
            sta.pos(130,215);
            sta.scaleX = 2; 
            sta.scaleY = 2;
            this.sta = sta;
            this.startBtn.addChild(sta);   
         }

        showKeyboard () {
            let KEYBOARD_CONFIG = {
                "input" : this.calc.bind(this, "keyboard"),
                "close" : function (type, value) {
                    if(type == "confirm"){
                        this.calc("keyboard", value);
                    }
                }.bind(this)
            };
            
            Sail.keyboard.enter(this.betValue.text, KEYBOARD_CONFIG);
        }

        calc (type, value) {
            if(!Sail.checkLogin()){return;}
            if(this.reduceBtn.index ==1 || this.addBtn.index == 1 || this.btnMax.index == 1){
                return;

            }
            let step1 = 0;
            let step2 = 0;
            let betValue = this.betValue.text | 0;

            if (betValue <= 1000) {
                step1 = 100;
            } else if (betValue <= 10000) {
                step1 = 1000;
            } else if(betValue <= 100000) {
                step1 = 10000;
            }else if(betValue <= 500000){
                step1 = 100000;
            }

            if (betValue < 1000) {
                step2 = 100;
            } else if (betValue < 10000) {
                step2 = 1000;
            } else if(betValue < 100000) {
                step2 = 10000;
            }else if(betValue < 500000){
                step2 = 100000;
            }

            switch(type){
                case "increase":
                    betValue += step2;
                    (betValue >= this.maxValue) && (betValue = this.maxValue);
                    break;
                case "decrease":
                    betValue -= step1;
                    (betValue <= 100) && (betValue = 100);
                    break;
                case "max":
                    betValue = this.maxValue;
                    break;
                case "keyboard":
                    betValue = (value / 100 | 0) * 100;
                    (betValue < 100) && (betValue = 100);
                    (betValue > this.maxValue) && (betValue = this.maxValue);

            }
            if(type != "keyboard"){
                Laya.SoundManager.playSound("sound/btn.mp3");
            }
        //    投币金额必须为100的整数倍
            this.betValue.text = betValue;
            this.playValue = betValue;
            if(this.playValue > this.gameScore){                 
                Sail.director.popScene(new Alert.Chong);      
            };
            
           
        }
        //更新用户信息  并且根据用户余额判断押注最低值

        update (data) {
            this.gameScore = data.gameScore;
            this.TCoin = data.TCoin;
            this.TScore = data.TScore;
            this.caijing = data.caijin;
            this.caifen = data.caifen;
            this.tingdou = data.tingdou;
            this.wltScore = data.wltScore;
            this.jiankangjin = data.jiankangjin;
            this.maxValue = Math.max(data.gameScore, data.TCoin);
            this.maxValue = (this.maxValue / 100 | 0) * 100;
            this.maxValue = Math.min(this.maxValue, 500000);

            if(!USER_LOGIN_STATUS){return;}
            if(INIT_DEFAULT_BET_VALUE){return;}
            INIT_DEFAULT_BET_VALUE = true;

            let defaultBetValue = Math.ceil(data.total / 10000) * 100;
                defaultBetValue = defaultBetValue > 10000 ? 10000 : defaultBetValue;
                defaultBetValue = defaultBetValue < 100 ? 100 : defaultBetValue;

            this.betValue.text = defaultBetValue;
            this.playValue = defaultBetValue;

            //大户提醒  100W以上为大户 默认押注是 1万         
            
            Laya.timer.once(2000, this, function (defaultBetValue) {
                Sail.director.popScene(new Alert.Publicone(defaultBetValue));
            }, [defaultBetValue]);
        }

        onClick () {
            this.startBtn.on(EVENT_MOUSEDOWN, this, () => {
                if(!Sail.checkLogin()){return;} 
                if(this.isRun == false || this.autoBetFlag == 1) { //正在游戏中
                    return;
                    
                }       
                this.sta.play("down", false);
                this.sta.on(EVENT_STOP, this, function () {                                
                    this.sta.play("enter",true);                                                          
                });
              
                Laya.SoundManager.playSound("sound/btn.mp3");     
                
                if(this.playValue > this.gameScore && this.gameScore <= 0){                 
                    Sail.director.popScene(new Alert.Chong);      
                };
                this.clickTime = Date.now();
          
            });
            this.startBtn.on(EVENT_MOUSEUP, this, () => { 
                if(this.isRun == false || this.autoBetFlag == 1)  { //正在游戏中
                    return;
                    
                }

              
                let data2 = Date.now();
                let afterT = data2  - this.clickTime; 
                if(afterT <= 1000){
                   this.playGame(); 
                }else{
                   
                    this.tip.visible = false;              
                    this.startBtn.visible = false;       
                    this.stopBtn.visible = true;
                    this.playNum.visible = true;



                    
                    this.zdbg.visible = true;
                    this.playNum.text = 100;
                    this.zdNum = this.playNum.text;
                    this.playCtrl();
                    // console.log(this.zdNum); 
                    //自动玩后置灰最大加减和键盘按钮
                    this.reduceBtn.index = 1;
                    this.addBtn.index = 1;
                    this.btnMax.index = 1;
                    this.betValue.disabled = true;
                   
                
 
                }
                if(afterT>2000){
                    return;
                }
            });
            this.stopBtn.on(EVENT_CLICK, this, () => {  
                
                
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.tip.visible = true;             
                this.stopBtn.visible = false;
                this.playNum.visible = false;
                this.zdNum = 0;
                this.zdbg.visible = false;              
                this.startBtn.visible = true;

                 //取消自动玩后置灰最大加减和键盘按钮 
                this.reduceBtn.index = 0;
                this.addBtn.index = 0;
                this.btnMax.index = 0;  
                this.betValue.disabled = false;
                  
            });
           
        }
        //自动玩功能
        playCtrl(){ 
            if(this.zdNum == 0 ){
                this.stopBtn.visible = false;
                this.playNum.visible = false;
                this.zdbg.visible = false;            
                this.startBtn.visible = true; 
                this.autoBetFlag = 0; 
                //取消自动玩后置灰最大加减和键盘按钮 
                this.reduceBtn.index = 0;
                this.addBtn.index = 0;
                this.btnMax.index = 0;  
                this.betValue.disabled = false;
       
            }
            if(this.zdNum>0){                
                this.zdNum --;
                this.playNum.text = this.zdNum;
                this.isRun = false;
                this.autoBetFlag = 1;
                this.playGame();
            }

        }
        playGame(){   
             this.isRun = false;
             this.startBtn.disable = true;
             Laya.timer.once(1000, this, function () {
                let data = {
                    amount : this.playValue,
                    TCoin:this.TCoin,
                    TScore:this.TScore,
                    caijin: this.caijing,
                    caifen: this.caifen,
                    tingdou:this.tingdou,
                    wltScore: this.wltScore,
                    jiankangjin:this.jiankangjin,
                    autoBetFlag:this.autoBetFlag

                }
                Sail.io.emit(GAME_CMDS.USE_BET, data, "ajax");
                Sail.io.publish(GAME_CMDS.GAME_BET_VALUE, this.playValue);
                Sail.io.publish(GAME_CMDS.EMIT_PLAY_DATA, null);
                
                
             });
 
        }

      
        btnScaleFun(centerX,centerY,posX,posY,target){
            let it = target;
            it.pivot(centerX,centerY);
            it.x=posX+centerX;
            it.y=posY+centerY;
            it.scale(1.2,1.2);
            Laya.timer.once(50,it,function(){
                it.scale(1,1);
            });

        }
        
       
        draw(){
             this.isRun = false;
             this.startBtn.disable = true;
        }

        reset(value){
         
            if(value == 1){
                this.zdNum = 0;
                this.playCtrl();
            }
            this.sta.play("enter",true);
           
            Laya.timer.once(2000, this, function () {
                 this.isRun = true;
                 this.startBtn.disable = false; 
  
            });
           
            Laya.timer.once(2000, this, function () {
                this.playCtrl();

           
            });

        }

        enter () {
            this.sta.play("enter",true);
            Laya.Tween.to(this.bet, {bottom:340, alpha : 1}, 250, null, null, 460);
            Laya.Tween.to(this.start, {bottom:0, alpha : 1}, 250, null, null, 500);
           
        }

        netError (data, cmd) {
            if(cmd == GAME_CMDS.USE_BET){
                this.reset();
            }
        }

    
    }
    Sail.class(Bet, "Com.Game.BetCtrl");
}

