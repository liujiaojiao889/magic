;(function () {
    var io = Sail.io;
    function ErrorManager() {
        this.init();
    }
    Laya.class(ErrorManager, "Sail.Error");
    var _proto = ErrorManager.prototype;
    _proto.init = function(){
        
    }

    _proto.checkError = function(cmd, data, code, errormsg, type){
        if(type == "ajax"){
            //ajax网络异常，包含超时和所有异常
            if(cmd == "xhr.error"){
                this.dispathError("xhrError",cmd);
                return true;
            }

            //系统维护
            if(data.maintain_code == 1){
                this.dispathError("maintain",cmd);
                return true;
            }

            //防沉迷
            if(window.GM && GM.addict && GM.addict(data)){
                this.dispathError("addict",cmd);
                return true;
            }

            //根据不同的错误码处理不同的异常
            var statusCode = data.statusCode;
            if(statusCode && statusCode != "0000"){
                //error
                this.dispathError(statusCode,cmd,errormsg,data);
                return true;
            }
        }
        //socket错误
        else{
            if(code){
                this.dispathError(code,cmd,errormsg);
                return true;
            }
        }

        return false;
    }
    _proto.dispathError = function(code,cmd,msg,data) {
        switch(code.toString()){
            //系统维护
            case "maintain" :
                location.reload();
                break;
            //未登录或token丢失
            case "100" : 
            case "003" :
            case "121" : 
                // location.href = GM.userLoginUrl;
                Sail.io.publish(GAME_CMDS.NO_LOGIN, "nologin", cmd);
                break;
            //otp
            case "81" :
                location.href = "/?act=otp&st=otpPage";
                break;
            //防沉迷
            case "addict" : 
                //todo 清理游戏结果
                break;
            //黑名单输分禁用
            case "99999" :
                //todo 清理游戏结果
                GM.jumpToHomePage && GM.jumpToHomePage("blacklist_disable"); 
                break;            
            //异地登录
            case "1002" : 
                //todo 提示异地登录，并且关闭当前连接
                break;
            //余额不足
            case "1100" : 
            case "5" : 
            case "221" : 
                //todo 提示余额不足，之后是否要弹出充值框请自行决定
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">您的余额不足，请充值后继续。</span>', close : function () {
                    Sail.director.popScene(new Alert.Recharge);
                }}));
                break;
            //积分达到单笔上限提示
            case "50" : 
            case "51" : 
            case "113" : 
                //todo 提示土豪，您投币金额达到万里通单笔限额，请往万里通设置！
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">土豪，您投币金额达到万里通单笔限额，请往万里通设置！</span>'}));
                break;
            //积分达到当日上限提示
            case "52" : 
            case "114" :
                //todo 提示积分或欢乐值超过当日最大使用额度，若要继续游戏，请充值欢乐豆！
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">您积分或欢乐值超过当日最大使用额度，若要继续游戏，请充值欢乐豆！</span>'}));
                break;
            //单款游戏禁用
            case "405" : 
            case "408" :
                //todo 提示用户 
                break;
            //账户禁用
            case "236" : 
                //todo 提示用户 很抱歉！经系统检测，您的账号存在异常，无法进行该游戏。如有疑问，请联系客服：4001081768。
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">很抱歉！经系统检测，您的账号存在异常，无法进行该游戏。如有疑问，请联系客服：4001081768。</span>'}));
                break;
            //ajax网络异常，包含超时和所有异常
            case "xhrError" : 
                //todo 一般弹窗提示 网络异常，请检查您的网络！
                Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">哎~网络出错啦！</span>'}));
                Sail.io.publish(GAME_CMDS.NET_ERROR, "neterror", cmd);
                break;
            case "1000":
                if(cmd == GAME_CMDS.GET_RANK_RICH || cmd == GAME_CMDS.GET_RANK_BET || cmd == GAME_CMDS.GET_RANK_PRIZE || cmd == GAME_CMDS.GET_RANK_MINE){
                    Sail.io.publish(GAME_CMDS.RANK_NO_DATA, {}, cmd);
                }
                break;
            default : 
                if(cmd == GAME_CMDS.PLAY){
                    Sail.io.publish(GAME_CMDS.GAME_RESET);
                    Sail.director.popScene(new Alert.Public({msg : '<span style="color:#64cee5">' + (data.message || data.messge) + '</span>'}));
                }
                //todo 提示默认的错误信息
                break;
        }
    }
})();