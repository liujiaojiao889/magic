{
    let EVENT_CLICK = Laya.Event.CLICK;
    let ALERT_CONFIG = {
        "closeOnSide" : true,
         "autoClose" : 4000
    };
    let SOUND_INITED = false;


    class Set extends ui.Alert.SetUI {
        constructor () {
            super();    
            this.CONFIG = ALERT_CONFIG;
            this.soundstatus  = null;
            this.init();
        }

        init () {
            this.top = 150;
          
            this.right = (Laya.stage.width/750)*2+20;
            this.onclick();
            this.initVoice();
           
        }

        initVoice () {
            this.soundstatus = !!SOUNDSTATUS.CUR;
            if(this.soundstatus == true){

                 this.btnSound.index = 0;
            }else{
                 this.btnSound.index = 1;
            }
           
       
            if(SOUND_INITED == true){return;}
            SOUND_INITED = true;
        
            // 背景音乐  
            Laya.SoundManager.musicMuted = !this.soundstatus;
            // 音效
            Laya.SoundManager.soundMuted = !this.soundstatus;
        }

        setVoiceStatus  () {
            switch(SOUNDSTATUS.CUR){
                case SOUNDSTATUS.ON:
                    SOUNDSTATUS.CUR = SOUNDSTATUS.OFF;    //0 关闭声音

                    Laya.SoundManager.musicMuted = true;
                    Laya.SoundManager.soundMuted = true;
                    this.btnSound.index = 1;
                    break;
                case SOUNDSTATUS.OFF:
                    SOUNDSTATUS.CUR = SOUNDSTATUS.ON;

                    Laya.SoundManager.musicMuted = false;
                    Laya.SoundManager.soundMuted = false;
                    this.btnSound.index = 0;
                    break;
            }

            this.initVoice();
        }
        onclick(){
             this.btnSound.on(Laya.Event.CLICK, this, function () {
                Laya.SoundManager.playSound("sound/btn.mp3");
                let index = this.btnSound.index 
                    if(index == 0){
                        this.btnSound.index = 1;
                        this.soundstatus = false; 
                        SOUNDSTATUS.CUR = 1;
                
                    }else{
                        this.btnSound.index = 0;
                       
                        this.soundstatus = true;                     
                        SOUNDSTATUS.CUR = 0;
                    
                    }
                    this.setVoiceStatus();
             });

            this.helpBtn.on(EVENT_CLICK, null, function () {
               Laya.SoundManager.playSound("sound/btn.mp3");
              
               Sail.director.popScene(new Alert.help);  
            });

        }

        onResize (width, height) {
            this.size(width, height);

            this.left = (Laya.stage.width/750)*2+20;
            
        }
    }
    Sail.class(Set, "Alert.Set");
}