{
    let EVENT_STOP = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    //游戏和押注接口
    let ACTIONS = {
        // 押注接口
        // [GAME_CMDS.EMIT_PLAY_DATA] (params) {
        //     let data =  this.params;
        //     this.lastGetGameResTime = Date.now();
        //     Sail.io.emit(GAME_CMDS.USE_BET, data, "ajax");
        // },
        [GAME_CMDS.USE_INFO] (data) {
            USER_LOGIN_STATUS = true;
            USER_DEFAULT_INFO = null;
        },
        [GAME_CMDS.GAME_BET_VALUE] (params) {
           this.params = params;
        },
        // 处理接口数据
        [GAME_CMDS.USE_BET] (data) {
            this.qian = data.qianCoinZ
            if(data.prizeAmount >= 0 && data.context.length > 0){
                
                // let delay = Date.now() - this.lastGetGameResTime > 3000 ? 0 : 3000;

                Laya.timer.once(1000, this, function (result) {                   
                    // 结算弹层
                    Sail.io.publish(GAME_CMDS.PLAY, result);
                    Laya.timer.once(3000, this, function (result) {                      
                        Sail.director.popScene(new Alert.result(result));
                       
                        if(this.qian > 0 ){
                            Laya.timer.once(2000, this, function () {
                                Laya.SoundManager.playSound("sound/money.mp3"); 
                                Sail.director.popScene(new Alert.Prize(this.qian));
                               
                            });
                   
                        }
                    }, [result]);

                }, [data]);
            }else{
                let value = 1;
                Sail.io.publish(GAME_CMDS.GAME_RESET,value);
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">网络异常，请稍后再试！</span>'}));
                
            }
        }
    };
    
    class GameScene extends Sail.Scene {
        constructor () {
            super();
            this.betValue =[];
            this.playCtrl = null;
            this.notify = null;
            this.Odds = null;
            this.bet = null;
            this.header = null;
            this.money = null;
            this.start = null;
            this.fog = null;
            this.qian = null;
            this.size(Laya.stage.width, Laya.stage.height);
            this.init();
        }
        init () {
            if(GM.isNewUser == 1){
                Sail.director.popScene(new Alert.help);  
            }
            Laya.SoundManager.playMusic("sound/background.mp3");
            Sail.io.register(ACTIONS, this);
            this.size(Laya.stage.width, Laya.stage.height);
            //背景图
            let BGImg = new Laya.Image("res/game/bigBg.jpg");         
            BGImg.centerX = 0;            
            BGImg.y = 0; 
            let notibg = new Laya.Image("res/game/notibg.png");
            notibg.centerX = 0;
            notibg.y = 0;
            let headBg = new Laya.Image("res/game/title.png");  
            headBg.centerX = 0;
            headBg.y = 25;   
            this.notify = new Com.Game.Notify();
            this.header = new Com.Game.HeadCtrl();
            this.odds = new Com.Game.OddsCtrl();
            this.bet = new Com.Game.BetCtrl();
            this.playCtrl = new Com.Game.GameCtrl();
            
            this.addChildren(BGImg,notibg,headBg,this.notify,this.header,this.odds,this.playCtrl,this.bet);
            
            if(USER_LOGIN_STATUS){
                Sail.io.publish(GAME_CMDS.USE_INFO, USER_DEFAULT_INFO);
            }
            
        }

        onEnter () {           
            this.notify.enter();
            this.header.enter();
            this.odds.enter();
            this.playCtrl.enter();
            this.bet.enter();      
        }
        onResize (width, height) {
            this.size(width, height);
            
        }
    }

    Sail.class(GameScene, "Scene.Game");
}