//跑马灯

 let tpl = [
        '{{if type == "dice"}}',
            '<span style="color:#98ff66">{{disName}}</span><span style="color:#ffffff">正在打杀，大家赶紧来膜拜吧。</span>',
        '{{else if type == "payback"}}',
            '<span style="color:#ff6a18">{{disName}}使用平安娱乐险,免除{{prize_amount}}损失</span>',
        '{{else}}',
            '<span style="color:#ffffff">恭喜</span><span href="#" style="color:#ffd632">{{disName}}</span><span style="color:#ffffff">赢得</span><span href="#" style="color:#ffd632">{{prize_amount}}</span><span style="color:#ffffff">分，祝福财源滚滚</span>',
        '{{/if}}',
    ].join("");

{

    class Notify extends ui.Game.NotifyUI {
        constructor () {
            super();

            this.notify = null;
            this.parmas 
            this.init();
        }

        init () {
            this.top = -100; 
            this.alpha = 0;
            this.centerX = 0;
            
            
            Sail.io.register(GAME_CMDS.USE_NOTIFY, this, this.update);

            let config = {
                "width" : 694,
                "fontSize" : 24,
                "tpl" : tpl,
                "complete" : function () {
                   Sail.io.emit(GAME_CMDS.USE_NOTIFY, null, "ajax");
                }
            };

            this.notify = new Tools.Notify(config);
            this.notify.pos(30, 10);
            this.addChild(this.notify);
            
            Sail.io.emit(GAME_CMDS.USE_NOTIFY, null, "ajax");
        }
        // margee(){
        //      let parmas = {
        //         gameId : GM.gameId,
        //         type:1
        //      }
                         
        //      Sail.io.emit(GAME_CMDS.USE_NOTIFY, parmas, "ajax");

        // }
        update (data) {
            this.notify.add(data.list);
        }

        enter () {
             Laya.Tween.to(this, {y :0, alpha : 1}, 250, null, null, 260);
        }
    }
    Sail.class(Notify, "Com.Game.Notify");
}