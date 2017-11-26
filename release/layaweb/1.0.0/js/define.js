/**
 * Primus
 */
// var IO_CONFIG = {
//     type : "primus",
//     URL : connectionUrl,
//     publicKey : publicKey,
//     token : token
// };
/**
 * Socket.IO
 */
// var IO_CONFIG = {
//     type : "socket",
//     URL : connectionUrl,
//     token : token,
//     // "force new connection" : true,
//     // "reconnect" : true
// };
var GAME_CONFIG = {
    WIDTH : 750,
    HEIGHT : 1334,
    SCREEN_MODE : Laya.Stage.SCREEN_VERTICAL, //可选自动横屏:Laya.Stage.SCREEN_HORIZONTAL 或者 自动竖屏:Laya.Stage.SCREEN_VERTICAL
    SCALE_MODE : Laya.Stage.SCALE_FIXED_HEIGHT, //自动横屏时选择:Laya.Stage.SCALE_FIXED_WIDTH  自动竖屏时选择:Laya.Stage.SCALE_FIXED_HEIGHT
    DIALOGTYPE : "multiple", //弹窗模式 single:弹出弹窗时自动关闭其他弹窗, multiple : 允许弹出多层弹窗，可使用"closeOther:true"在弹出时关闭其他弹窗
    VERSION : "20170711",
    BASE_PATH : CDN_URL
};

//自定义常量
var SOUNDSTATUS = {
    OFF : 0,
    ON : 1,
    CUR : 1
};

var USER_LOGIN_STATUS = false;
var USER_DEFAULT_INFO = null;
var GAME_CMDS = {
    USE_INFO: "/?act=game_gamebase&st=queryUserAccount",//用户信息（昵称 余额 欢乐豆）
    RANK_MINE: "/?act=game_shaizile&st=my_prize_list",//我的中奖
    RANK_RICH: "/?act=game_shaizile&st=rich_list",//土豪榜
    DISPENSE_LIST: "/?act=game_shaizile&st=get_dispense_list",//投币排行
    GETBENT_RANK: "/?act=game_shaizile&st=get_last_award",//分奖排行
    USE_NOTIFY: "/?act=game_shaizile&st=get_marguee",//跑马灯
    USE_BET:"/?act=game_shaizile&st=play",//投币接口
    USE_POOL:"/?act=game_shaizile&st=pool",  //钱袋
    RANK_BET:"/?act=game_shaizile&st=get_bet_rank",  //日月周排行榜
    PLAY : "game.result",
    NO_LOGIN : "game.nologin",
    NET_ERROR : "xhr.neterror",
    RANK_NO_DATA : "rank.nodata",
    GAME_RESET : "game.reset",
    EMIT_PLAY_DATA : "game.emit_play_data"
};

