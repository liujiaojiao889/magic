{
    let EVENT_CLICK = Laya.Event.CLICK;
     let ALERT_CONFIG = {
       "shadowAlpha" : 0.7, 
        "autoClose" :  false,
        "closeOther"  : true
    };

    class help extends ui.Alert.helpUI {
        constructor (data) {
            super();

            this.data = data;
            this.CONFIG = ALERT_CONFIG;
           
            this.init();
        }

        init (value) {
            let slider = new zsySlider(this.helpWarp);
            this.top = 0;
            this.closeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();
            });
            this.goon.on(EVENT_CLICK, this, function(){
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();
               
            });
            
            
          
        }
    }
    Sail.class(help, "Alert.help");
}