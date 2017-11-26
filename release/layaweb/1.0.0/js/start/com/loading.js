{
    class PreLoadPro extends ui.Start.loadingUI {
        constructor () {
            super();
            this.init();
        }
        destroy  () {
            super.destroy.call(this, true);
           
        }
        init () {
            this.centerX = 0;
            // let isbn = new laya.components.Isbn();
            // this.addChild(isbn);
           
        }
        onProgress(percent){
            let x = 655 * percent;
            if(x > 655){
                x = 655;
            }
            this.progress.value = percent;
            this.percent.text = parseInt((percent*100))+'%';
          

        }
        load (res, callback) {
            Laya.loader.load(res, Laya.Handler.create(this, function () {
                callback();
            }, [callback]), new Laya.Handler(this, this.onProgress));
        }
    }
    
    Sail.class(PreLoadPro, "Com.Start.PreLoad");
}
 