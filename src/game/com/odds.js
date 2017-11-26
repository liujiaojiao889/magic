//赔率展示
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    
    class OddsCtrl extends ui.Game.OddsUI{
        constructor () {
            super();
            this.man = null;
            this.win = null;
            this.init();
        }
        destroy () {
            super.destroy.call(this);
           
        }

        init () {
            this.powerNum1.text = oddsVal[0] +"倍";
            this.powerNum2.text = oddsVal[1] +"倍";
            this.powerNum3.text = oddsVal[2] +"倍";
            this.powerNum4.text = oddsVal[3] +"倍";
            this.powerNum5.text = oddsVal[4] +"倍";
            this.powerNum6.text = oddsVal[5] +"倍";
            this.powerNum7.text = oddsVal[6] +"倍";
            this.powerAll.on(EVENT_CLICK, null, function () {
               Sail.director.popScene(new Alert.Power);
               Laya.SoundManager.playSound("sound/btn.mp3");
            });
            this.top = 200;
            this.left = -5;
            let ACTIONS = {
                [GAME_CMDS.EMIT_PLAY_DATA] : this.play,  //开始播放动画
                [GAME_CMDS.GAME_RESET] : this.reset,   //重置动画
                [GAME_CMDS.NET_ERROR] : this.netError,  //处理错误
                [GAME_CMDS.PLAY] : this.draw  //播放开奖动画
              
            }
            Sail.io.register(ACTIONS, this);
         
            let man = utils.createSkeleton("res/dragon/man");
            man.x = this.width/2;
            man.y = 480; 
            man.centerX = 0;     
            man.scaleX = 1.9; man.scaleY = 1.9;              
           
            man.on(EVENT_STOP, this, function () {
                switch(this.man.curAniName){
                    case "enter":
                        this.man.curAniName = "enter";
                        this.man.play("waiting", true);
                        break;
                     case "start":
                        this.man.curAniName = "start";
                        this.man.play("loop", true);
                        break;
                    case "result":
                        this.man.curAniName = "result";
                        this.man.play("waiting", true);
                        break;
                   
                   
                }
            });

            this.man = man;       
            this.addChild(this.man);
           
      
         }
        onResult(data){
            //改变倍率大小         
            this.win = data.win;      
                if(this.win == "1"){
                    Laya.timer.once(1000, this, function () {              
                        this.power1.index = 1;
                        this.powertext1.color = "#2d0000";
                        this.powerNum1.color = "#2d0000";
                    });

                    
                }else if(this.win == "2"){                
                    Laya.timer.once(1000, this, function () {              
                          this.power2.index = 1;
                          this.powertext2.color = "#2d0000";
                          this.powerNum2.color = "#2d0000";
                    });

                }else if(this.win == "3"){
                                     
                    Laya.timer.once(1000, this, function () {              
                        this.power3.index = 1;
                        this.powertext3.color = "#2d0000";
                        this.powerNum3.color = "#2d0000";
                    });

                     

                }else if(this.win == "4"){
                   
                    Laya.timer.once(1000, this, function () {              
                          this.power4.index = 0;
                          this.powertext4.color = "#2d0000";
                          this.powerNum4.color = "#2d0000";
                    });

                }else if(this.win == "5"){
                    Laya.timer.once(1000, this, function () {              
                          this.power5.index = 1;
                          this.powertext5.color = "#2d0000";
                          this.powerNum5.color = "#2d0000";
                    });

                }else if(this.win == "6"){
                    Laya.timer.once(1000, this, function () {              
                          this.power6.index = 1;
                          this.powertext6.color = "#2d0000";
                          this.powerNum6.color = "#2d0000";
                    });

                }else if(this.win == "7"){
                    Laya.timer.once(1000, this, function () {              
                          this.power7.index = 1;
                          this.powertext7.color = "#2d0000";
                          this.powerNum7.color = "#2d0000";
                    });

                }

        }

        enter () {
            
            Laya.timer.once(1000, this, function () {              
                this.man.curAniName = "enter";
                this.man.play("enter", false);
            });

           
        }
        play(){                     
                this.man.curAniName = "start";
                this.man.play("start",false)
  
        }
        draw(data){               
                this.man.curAniName = "result";
                this.man.play("result",false);
                this.onResult(data);
            
        }
        reset(){
            
            this.man.curAniName = "waiting";
            this.man.play("waiting", true);

           
            this.power1.index = 0;
            this.power2.index = 0;
            this.power3.index = 0;
            this.power4.index = 1;
            this.power5.index = 0;
            this.power6.index = 0;
            this.power7.index = 0;

            this.powertext1.color = "#c06800";
            this.powerNum1.color = "#c06800";

            this.powertext3.color = "#c06800";
            this.powerNum3.color = "#c06800";

            this.powertext5.color = "#c06800";
            this.powerNum5.color = "#c06800";
            
            this.powertext7.color = "#c06800";
            this.powerNum7.color = "#c06800";

            this.powertext2.color = "#a484ff";
            this.powerNum2.color = "#a484ff";
            this.powertext4.color = "#a484ff";
            this.powerNum4.color = "#a484ff";
            this.powertext6.color = "#a484ff";
            this.powerNum6.color = "#a484ff";

            

        }
      
        netError (data, cmd) {
         
        }

      
    }
    Sail.class(OddsCtrl, "Com.Game.OddsCtrl");
}