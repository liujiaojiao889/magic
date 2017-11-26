ui.Alert.PrizeUI
{
    let EVENT_CLICK = Laya.Event.CLICK;
    let ALERT_CONFIG = {
        "closeOnSide" : true,
        "autoClose" : 2000
    };
    

    class Prize extends ui.Alert.PrizeUI {
        constructor (data) {
            super();

            this.data = data;
            this.CONFIG = ALERT_CONFIG;
           
            this.init(data);
        }

        init (data) {
            this.qianCoinZ.text = data;
            
        }
    }
    Sail.class(Prize, "Alert.Prize");
}