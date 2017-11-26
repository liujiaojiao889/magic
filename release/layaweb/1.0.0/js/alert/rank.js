{
    let EVENT_CLICK = Laya.Event.CLICK;
    let EVENT_STOP  = Laya.Event.STOPPED;
    let utils = Sail.Utils;
   

    let RANK_CONFIG = [
        {cmd : GAME_CMDS.RANK_MINE, selectedIndex : 0, param : null},
        {cmd : GAME_CMDS.GETBENT_RANK, selectedIndex : 1, param : null},       
        {cmd : GAME_CMDS.RANK_BET, selectedIndex : 2, param : {"type" : "day"}},
        {cmd : GAME_CMDS.RANK_BET, selectedIndex : 2, param : {"type" : "week"}},
        {cmd : GAME_CMDS.RANK_BET, selectedIndex : 2, param : {"type" : "month"}}
        
    ];

    class Rank extends ui.Alert.RankUI {
        constructor () {
            super();

            this.enableClick = true;
            this.curIndex = -1;
            this.ACTIONS = {};

            this.init();
        }

        init () {
            this.nickName0.text = "虚位以待";
            this.nickName1.text = "虚位以待";
            this.nickName2.text = "虚位以待";
            this.prizeAmount0.text = "";
            this.prizeAmount1.text = "";
            this.prizeAmount2.text = "";

            this.rankMine.vScrollBarSkin = ''; 
            this.rankPrize.vScrollBarSkin = ''; 
            this.rankList.vScrollBarSkin = ''; 
            this.rankTab.selectHandler = new Laya.Handler(this, this.onTabSelected);
           
            this.rankMineLogin.on(EVENT_CLICK, this, function () {
                 window.location.href = GM.userLoginUrl;
            });
            this.closeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();

            });
            this.ACTIONS = {
                [GAME_CMDS.RANK_MINE] : this.updateRank,
                [GAME_CMDS.GETBENT_RANK] : this.updateRank,
                [GAME_CMDS.RANK_BET] : this.updateRank,              
                [GAME_CMDS.NO_LOGIN] : this.updateRank,
                [GAME_CMDS.NET_ERROR] : this.netError,
                [GAME_CMDS.RANK_NO_DATA] : this.updateRank,
                [GAME_CMDS.RANK_RICH] : this.updateRich
            };
            Sail.io.register(this.ACTIONS, this);
           
            
            this.rankTab.selectedIndex = 2;
            
            Sail.io.emit(GAME_CMDS.RANK_RICH, null, "ajax");
        }

        onTabSelected (index) {
            Laya.SoundManager.playSound("sound/btn.mp3");
            if(index==-1){
                return;
            }
            
            this.rankNodata.visible = false;
           
            this.rankList.array = [];
            this.rankPrize.array = [];
            this.rankMine.array = [];

            this.rankCon.selectedIndex = RANK_CONFIG[index].selectedIndex;
            
        
            Sail.io.emit(RANK_CONFIG[index].cmd, RANK_CONFIG[index].param, "ajax");
        }
        netError (data, cmd) {
            for(let i in this.ACTIONS){
                if(i == cmd){
                    this.enableClick = true;
                    return;
                }
            }
        }
        //土豪榜
        updateRich (data) {
            let richData = data.richList;
            if(richData.length>0){

                for(let i=0; i<richData.length; i++){
                    if(i == 0){
                        this.nickName0.text = utils.cutStr(richData[0].nickName,8);
                        this.prizeAmount0.text = richData[0].prizeAmount;
                    }else if(i == 1){
                         this.nickName1.text = utils.cutStr(richData[1].nickName,8);
                         this.prizeAmount1.text = richData[1].prizeAmount;
                    }else if(i == 2){
                         this.nickName2.text = utils.cutStr(richData[2].nickName,8);
                         this.prizeAmount2.text = richData[2].prizeAmount;
                    }
                    
                    
                }
               

            }else{
                this.nickName0.text = "虚位以待";
                this.nickName1.text = "虚位以待";
                this.nickName2.text = "虚位以待";
                this.prizeAmount0.text = "";
                this.prizeAmount1.text = "";
                this.prizeAmount2.text = "";

            }
           
                     
        }
        updateRank (data, cmd){
            switch(cmd){
               case GAME_CMDS.RANK_MINE:
                    if(data == "nologin"){
                        this.rankMineLogin.visible = true;
                        this.rankMine.visible = false;
                    }else{
                        let myData =  data.myPrize || [];

                        for(let i in myData){
                            myData[i].coin = myData[i].point;
                            myData[i].time = myData[i].raw_add_time;
                        }
                            this.rankMine.array = myData;
                            this.rankMineLogin.visible = false;
                            this.rankMine.visible = true;
                        if(myData.length == 0){
                            this.rankNodata.visible = true;
                        }


                    }                                  
                
                break;
                case GAME_CMDS.GETBENT_RANK:
            
                       let betData = data.dispenseLog|| [];
                        for(let i in betData){
                            betData[i].nickName = utils.cutStr(betData[i].nickName,8);
                            betData[i].coin = betData[i].point;
                            betData[i].time = betData[i].datatime;
                        }
                        this.rankPrize.array = betData;
                        if(betData.length == 0){
                            this.rankNodata.visible = true;
                        }
                        break;
                    
                   
             
                 case GAME_CMDS.RANK_BET: 
                   
                       let rankData = data.data || [];           
                        for(let i in rankData){
                            rankData[i].nickName = utils.cutStr(rankData[i].nickname,8);
                            rankData[i].trendIcon = rankData[i].rank_trend-1;
                            rankData[i].rank = rankData[i].rank;
                            rankData[i].coin = rankData[i].amount | 0;
                        }
                        this.rankList.array = rankData;
                        if(rankData.length == 0){
                            this.rankNodata.visible = true;
                        }
                        break; 
                    
            }
           
         
        }

        onClosed () {
            Sail.io.unregister(this.ACTIONS);
           
        }
    }
    Sail.class(Rank, "Alert.Rank");
}