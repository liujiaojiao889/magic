// 游戏舞台
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
    let POSITION = [
        {x:290,y:340,scaleX:0.8,scaleY:0.8},
        {x:470,y:340,scaleX:0.8,scaleY:0.8},
        {x:180,y:490,scaleX:0.9,scaleY:0.9},
        {x:380,y:490,scaleX:0.9,scaleY:0.9},
        {x:580,y:490,scaleX:0.9,scaleY:0.9}

    ];
   
    // 水晶球里面的点数
    //水晶球 enter waiting open openloop result back 
    class Ball extends Laya.Box {
        constructor (i) {
            super();
            this.ball = null;        
            this.ballValue = null;
            this.index = null;
            this.init(i);
        }
        init (i) {
            this.index = i;
            //水晶球 一共六个动画  入场  等待 开启 开启循环 结果  退出

            this.pos(POSITION[i].x, POSITION[i].y);
            this.scale(POSITION[i].scaleX,POSITION[i].scaleY);
            
            let ball = utils.createSkeleton("res/dragon/ball");
            ball.on(EVENT_STOP, this, function () {
                switch(this.ball.curAniName){                  
                    case "enter":
                         this.ball.curAniName = "enter";
                         this.ball.play("waiting", true);
                        break;
                    case "open":
                        this.ball.curAniName = "open"; 
                        this.ball.play("openloop", true);                   
                        
                    break;
                    case "result":
                        this.ball.curAniName = "result";
                        this.ball.play("result", true);
                        this.ball.play("openloop", true);
                        this.ballValue.alpha = 0;           
                        
                    break;
                    case "exit":
                        this.ball.curAniName = "exit";
                        this.ball.play("back", true); 
                                  
                    break;
                }
            });

            let ballValue = new Laya.Label();
          
            ballValue.align = "center";
            ballValue.font = "pointNum";       
            ballValue.alpha = 0;
            this.ball = ball;
            this.ballValue = ballValue; 
            this.addChildren(ball,ballValue);
          
        }
        // 入场
        enter () {       
            Laya.timer.once(300*this.index, this, function () {              
                this.ball.curAniName = "enter";
                this.ball.play("enter", false);
                    
            });
   
        }
        // 开启
        play(){
            Laya.timer.once(100*this.index, this, function () {              
                this.ball.curAniName = "open";
                this.ball.play("open", false);          
            });
         
          
        }
        draw(value){
           
           this.ball.curAniName = "result";
           this.ball.play("result", false);
         
           
           this.ballValue.text = value;
      
           this.ballValue.pos(0, -170);
           var ballValue = this.ballValue;

           ballValue.pivot(50, 50);
           ballValue.scale(1.5, 1.5);
           ballValue.alpha = 0;
            Laya.Tween.to(ballValue, {scaleX: 0.7, scaleY: 0.7, alpha :  0.6}, 200, Laya.Ease.linearIn, Laya.Handler.create(null, function(){
                Laya.Tween.to(ballValue, {scaleX:1.1, scaleY: 1.1, alpha : 1}, 1500, Laya.Ease.backOut, Laya.Handler.create(null, function(){
                     Laya.Tween.to(ballValue, {scaleX:1, scaleY: 1, alpha :0 }, 500, Laya.Ease.linearIn, Laya.Handler.create(null, function(){
                    
                     }), 560);
                }), 560);
            }), 560);

         
        }
        // 返回
     
        reset(){
          
           Laya.timer.once(100*this.index, this, function () {
                    this.ball.curAniName = "exit";
                    this.ball.play("back",false);
                     Laya.timer.once(1200, this, function () {
                        this.ball.play("waiting", true);
                        this.ballValue.alpha = 0;
                     })
                     
            });
                   
        }
    }



    class GameCtrl extends Laya.Box {
        constructor () {
            super();
           this.fog = null;
           this.money = null;
           this.ballBox = [] // 放置球的
           this.init();
        }
        init () { 
            let ACTIONS = {
                [GAME_CMDS.EMIT_PLAY_DATA] : this.play,  //开始播放动画
                [GAME_CMDS.GAME_RESET] : this.reset,   //重置动画
                [GAME_CMDS.NET_ERROR] : this.netError,  //处理错误
                [GAME_CMDS.PLAY] : this.draw  //播放开奖动画
            }
            Sail.io.register(ACTIONS, this);
            this.size(750,506);
            this.centerX = 0;
            this.y = 400;
             // desk 的动画
            let desk = utils.createSkeleton("res/dragon/desk");                  
            desk.scale(2,2);
            desk.pos(this.width/2,this.height/2);           
            desk.on(EVENT_STOP, this, function () {
                switch(this.desk.curAniName){                  
                    case "loop":
                         this.desk.curAniName = "loop";
                         this.desk.play("loop", true);
                        break;
                    case "result":
                        this.desk.curAniName = "result";
                       
                        this.desk.play("loop", true);
                    break;
                }
            });
            this.desk = desk;
         
             // fog  的动画
            let fog = utils.createSkeleton("res/dragon/fog");
            fog.scale(2,2);
            fog.pos(100,0);
            this.fog = fog; 
           
             // 循环出五个水晶球 
            let money = new Com.Game.MoneyCtrl(); 
            money.pos(-200,70);  
            let light = utils.createSkeleton("res/dragon/light");
            light.pos(this.width/2,this.height/2); 
            this.light = light; 
            this.addChildren(this.desk,money,light,fog);
            for(let i = 0; i < 5; i++){              
                let ball = new Ball(i);
                this.ballBox.push(ball);                        
                this.addChild(ball);
                                                  
            }
        }

        enter(){
           this.desk.play("waiting",true);      
            for(let i in this.ballBox){
                this.ballBox[i].enter();
            }

        }

        play(){          
            this.desk.curAniName = "loop";
            this.fog.play("fog",true);
            Laya.SoundManager.playSound("sound/open.mp3"); 
            Laya.SoundManager.playSound("sound/fog.mp3"); 
             for(let i in this.ballBox){
                this.ballBox[i].play();
            }
        }


        draw(data){         
            let value = data.context; 
            Laya.SoundManager.playSound("sound/draw.mp3");             
            this.desk.play("result",false);
          
            Laya.timer.once(200, this, function () {
                this.desk.curAniName = "result";
                 this.light.play("light",false);                
            })        
           
            for(let i in this.ballBox){
                this.ballBox[i].draw(value[i]);
               
            }
           
        }


        reset(){
            this.fog.play("fog",false); 
            this.desk.curAniName ="waiting";
            this.desk.play("waiting",true);
            for(let i in this.ballBox){
                this.ballBox[i].reset();
            }
        }

        netError (data, cmd) {
            if(cmd == GAME_CMDS.USE_BET){
                this.reset();
            }
        }
    }
   
    Sail.class(GameCtrl, "Com.Game.GameCtrl");
}

