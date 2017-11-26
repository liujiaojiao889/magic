{
    let EVENT_CLICK = Laya.Event.CLICK;
    let ALERT_CONFIG = {
        "closeOnSide" : true,
        "autoClose" : 3000
    };
    class Public extends ui.Alert.PublicUI {
        constructor (config) {
            super();

            this.selfConfig = config;
            this.CONFIG = ALERT_CONFIG;
            this.init();
        }

        init () {
            this.update();
            this.resize();
            this.bindEvent();
        }
        update () {
            this.alertMsg.style.align = "center";
            this.alertMsg.style.fontSize = 30;
            this.alertMsg.style.fontStyle = "Microsoft YaHei";
            this.alertMsg.style.color = "#00fff6";
            
            this.alertMsg.innerHTML = this.selfConfig.msg;
        }
        resize () {
            this.alertMsg.height = this.alertMsg.contentHeight;
            this.height = this.alertMsg.height + this.alertMsg.y + 200;
        }
        bindEvent () {
            this.closeBtn.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.close();

            });
            this.know.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                this.selfConfig.close && this.selfConfig.close();
                this.close();
            });
        }
    }
    Sail.class(Public, "Alert.Public");
}