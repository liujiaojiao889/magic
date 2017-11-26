{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    let RESULT_ANI = {};
    let RESULT_UI = null;
    let ALERT_CONFIG = {
        "closeOnSide" : true,
        "autoClose" : 2000
    };
    
    class Result extends  ui.Alert.WinUI {
        constructor (data) {
            super();

            this.CONFIG = ALERT_CONFIG;
            this.popupEffect = null;
            this.closeEffect = null;
            this.qianCoin = null;
            this.data = data;
            this.init(data);
        }

        init (data) {
           
            if(data.win == "0"){
                //很遗憾
                this.lose.visible = true;
                this.win.visible = false;
                Laya.SoundManager.playSound("sound/lose.mp3"); 
            
            }else{
                Laya.SoundManager.playSound("sound/win.mp3"); 
                this.lose.visible = false;
                this.win.visible = true;
                this.prizeNum.text = data.prizeAmount;
                if(data.win == "1"){ 

                    this.poker.text =" 4至6一对";

                }else if(data.win == "2"){

                    this.poker.text =" 3个相同";
                   
                }else if(data.win == "3"){

                    this.poker.text =" 2个一对";
                    
                }else if(data.win == "4"){

                    this.poker.text = "葫芦"
                                                        
                }else if(data.win == "5"){

                    this.poker.text =" 4个相同";
                    
                }else if(data.win == "6"){
                    
                    this.poker.text =" 顺子";

                }else if(data.win == "7"){

                    this.poker.text ="豹子";

                }
             
            }         
        }
        onClosed () {
            Sail.io.publish(GAME_CMDS.GAME_RESET);
            this.socketExec();
            this.socketExec({type: 'buzhongxian'});
        
        }

        // 处理人机游戏 socket的, 包括倒霉险等
        socketExec (obj){
            if( window.GM && GM.socket_RJ ){
                 if( GM.socket_RJ.exec ){
                     GM.socket_RJ.exec(obj);
                 }
                 var getMoney = GM.socket_RJ.getMoney;
                 if( getMoney && getMoney() > 0 ){
                       let parmas = {
                            gameId : GM.gameId,
                            type:1
                        }
                      Sail.io.emit(GAME_CMDS.USE_INFO, parmas, "ajax"); // 重新更新 余和币
                 }
            }
        }
    }
    Sail.class(Result, "Alert.result");
}