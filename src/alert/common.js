
{
    let EVENT_CLICK = Laya.Event.CLICK;

    class Chong extends ui.Alert.ChongUI{
        constructor (data) {
            super();

            this.data = data;

            this.init();
        }

        init (value) {
            this.bindEvent();
            this.goRecharge.visible = false;
          
        }
         bindEvent () {
           
            this.goRecharge.on(EVENT_CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                Sail.director.popScene(new Alert.Recharge);
                this.close();
            });

            this.closeBtn.on(EVENT_CLICK, this, function () {
                this.close();
                Laya.SoundManager.playSound("sound/btn.mp3");
            });
        }
    }
    Sail.class(Chong, "Alert.Chong");
}