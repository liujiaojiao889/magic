{
    let EVENT_CLICK = Laya.Event.CLICK;
    let ALERT_CONFIG = {
        "closeOnSide" : true,
        "autoClose" : 3000
    };
    class Publicone extends ui.Alert.publiconeUI {
        constructor (data) {
            super();

            this.data = data;
            this.CONFIG = ALERT_CONFIG;
            this.init(data);
        }

        init (data) {
            this.bet.text = data;
            this.bindEvent();
        }
        
        
        bindEvent () {
            this.closeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();

            });
            this.know.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();
            });
        }
    }
    Sail.class(Publicone, "Alert.Publicone");
}