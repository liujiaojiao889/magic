{
    let utils = Sail.Utils;
    
    class StartScene extends Sail.Scene {
        constructor () {
            super();
            this.proPreLoad = null;
            this.size(Laya.stage.width, Laya.stage.height);
        }
        init () {
            this.size(Laya.stage.width, Laya.stage.height);
            //注册
            let parmas = {
                gameId:GM.gameId,
                type:1

            }
            Sail.io.register(GAME_CMDS.USE_INFO, this, this.checkLogin);
            Sail.io.emit(GAME_CMDS.USE_INFO, parmas, "ajax");

            this.showStaticProgress();
            this.proPreLoad.load(ASSETS.GAME, function () {
                Sail.director.runScene(new Scene.Game);
            });
        }
        showStaticProgress () {
          
            let proPreLoad = new Com.Start.PreLoad();
            this.proPreLoad = proPreLoad;
            this.addChild(proPreLoad);
        }
        checkLogin (data, cmd) {
            console.log(data, cmd);
            USER_LOGIN_STATUS = GM.userLogged;
            USER_DEFAULT_INFO = data;
        }

        onEnter () {
            Laya.loader.load(ASSETS.PRELOAD, Laya.Handler.create(this, this.init));
        }
        onExit () {
           
            Sail.io.unregister(GAME_CMDS.USE_INFO, this.checkLogin);
        }
        onResize (width, height) {
            this.height = height;
        }
    }

    Sail.class(StartScene, "Scene.Start");
}