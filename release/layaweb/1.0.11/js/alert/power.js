{
    let EVENT_CLICK = Laya.Event.CLICK;
    let ALERT_CONFIG = {
        "closeOnSide" : true
         // "autoClose" : 4000
    };
    let SOUND_INITED = false;


    class Power extends ui.Alert.powerUI {
        constructor () {
            super();    
            this.CONFIG = ALERT_CONFIG;
            this.init();
        }

        init () {
          this.powerNum1.text = oddsVal[0] ;
          this.powerNum2.text = oddsVal[1] ;
          this.powerNum3.text = oddsVal[2] ;
          this.powerNum4.text = oddsVal[3] ;
          this.powerNum5.text = oddsVal[4] ;
          this.powerNum6.text = oddsVal[5] ;
          this.powerNum7.text = oddsVal[6] ;
         
           
        }
      
    }
    Sail.class(Power, "Alert.Power");
}