var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var ChongUI=(function(_super){
		function ChongUI(){
			
		    this.goRecharge=null;
		    this.closeBtn=null;

			ChongUI.__super.call(this);
		}

		CLASS$(ChongUI,'ui.Alert.ChongUI',_super);
		var __proto__=ChongUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ChongUI.uiView);
		}
		ChongUI.uiView={"type":"Dialog","props":{"width":685,"height":435},"child":[{"type":"Image","props":{"y":0,"x":4,"width":685,"skin":"res/alert/publicbg.png","height":435}},{"type":"Image","props":{"y":303,"x":214,"var":"goRecharge","skin":"res/alert/gorecharge.png"}},{"type":"Label","props":{"y":126,"x":161,"wordWrap":true,"width":426,"text":"土豪，余额不足，快快去充值！人家等你来玩！","leading":10,"height":124,"fontSize":30,"font":"Microsoft YaHei","color":"#00fff6","align":"center"}},{"type":"Button","props":{"y":25,"x":622,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png"}}]};
		return ChongUI;
	})(Dialog);
var helpUI=(function(_super){
		function helpUI(){
			
		    this.helpWarp=null;
		    this.closeBtn=null;
		    this.goon=null;

			helpUI.__super.call(this);
		}

		CLASS$(helpUI,'ui.Alert.helpUI',_super);
		var __proto__=helpUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(helpUI.uiView);
		}
		helpUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":7,"x":-2,"var":"helpWarp"},"child":[{"type":"Box","props":{"name":"con"},"child":[{"type":"ViewStack","props":{"selectedIndex":1,"name":"list"},"child":[{"type":"Box","props":{"y":0,"x":0,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"res/alert/help1.png","name":"Img","height":1334}}]},{"type":"Box","props":{"y":0,"x":0,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"res/alert/help2.png","name":"Img","height":1334}}]}]}]},{"type":"Tab","props":{"y":1248,"x":519,"width":228,"selectedIndex":0,"name":"pagination","height":89},"child":[{"type":"Button","props":{"y":27,"x":121,"stateNum":"2","skin":"res/alert/point.png","name":"item1"}},{"type":"Button","props":{"y":27,"x":72,"stateNum":"2","skin":"res/alert/point.png","name":"item0"}}]}]},{"type":"Button","props":{"y":50,"x":655,"width":45,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png","height":45}},{"type":"Image","props":{"y":30,"x":248,"width":255,"var":"goon","skin":"res/alert/go.png","height":83}}]};
		return helpUI;
	})(Dialog);
var powerUI=(function(_super){
		function powerUI(){
			
		    this.powerNum1=null;
		    this.powerNum2=null;
		    this.powerNum3=null;
		    this.powerNum5=null;
		    this.powerNum6=null;
		    this.powerNum7=null;
		    this.powerNum4=null;

			powerUI.__super.call(this);
		}

		CLASS$(powerUI,'ui.Alert.powerUI',_super);
		var __proto__=powerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(powerUI.uiView);
		}
		powerUI.uiView={"type":"Dialog","props":{"width":748,"height":530},"child":[{"type":"Image","props":{"y":0,"x":0,"width":748,"skin":"res/game/power.png","height":530}},{"type":"Label","props":{"y":88,"x":651,"width":30,"var":"powerNum1","valign":"middle","text":"2","height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":152,"x":651,"width":30,"var":"powerNum2","valign":"middle","text":"3","height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":211,"x":651,"width":30,"var":"powerNum3","valign":"middle","text":"4","height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":381,"x":651,"width":30,"var":"powerNum5","valign":"middle","text":"10","pivotY":50,"pivotX":-2.8571428571428896,"height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":441,"x":651,"width":30,"var":"powerNum6","valign":"middle","text":"20","pivotY":50,"pivotX":-2.8571428571428896,"height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":498,"x":651,"width":30,"var":"powerNum7","valign":"middle","text":"50","pivotY":50,"pivotX":-2.8571428571428896,"height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":270,"x":651,"width":30,"var":"powerNum4","valign":"middle","text":"8","height":50,"fontSize":24,"font":"Arial","color":"#ffe400","align":"center"}},{"type":"Label","props":{"y":88,"x":678,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":151,"x":678,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":211,"x":678,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":270,"x":681,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":332,"x":682,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":392,"x":683,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}},{"type":"Label","props":{"y":449,"x":681,"width":30,"valign":"middle","text":"倍","height":50,"fontSize":24,"font":"Microsoft YaHei","color":"#00ffea","align":"center"}}]};
		return powerUI;
	})(Dialog);
var PrizeUI=(function(_super){
		function PrizeUI(){
			
		    this.qianCoinZ=null;

			PrizeUI.__super.call(this);
		}

		CLASS$(PrizeUI,'ui.Alert.PrizeUI',_super);
		var __proto__=PrizeUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PrizeUI.uiView);
		}
		PrizeUI.uiView={"type":"Dialog","props":{"width":690,"height":400},"child":[{"type":"Box","props":{"y":82,"x":225},"child":[{"type":"Box","props":{"y":-195,"x":-216},"child":[{"type":"SkeletonPlayer","props":{"y":343,"x":338,"url":"res/dragon/pool.sk","scaleY":2,"scaleX":2}}]},{"type":"Label","props":{"x":75,"width":84,"text":"恭喜","height":56,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":58,"x":42,"width":150,"text":"分得了奖励","height":42,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":94,"width":246,"var":"qianCoinZ","text":12345,"height":81,"font":"prizeNum","align":"center"}}]}]};
		return PrizeUI;
	})(Dialog);
var PublicUI=(function(_super){
		function PublicUI(){
			
		    this.alertMsg=null;
		    this.closeBtn=null;
		    this.know=null;

			PublicUI.__super.call(this);
		}

		CLASS$(PublicUI,'ui.Alert.PublicUI',_super);
		var __proto__=PublicUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PublicUI.uiView);
		}
		PublicUI.uiView={"type":"Dialog","props":{"width":685,"height":435},"child":[{"type":"Image","props":{"y":0,"x":4,"width":685,"skin":"res/alert/publicbg.png","height":435}},{"type":"HTMLDivElement","props":{"y":129,"x":100,"width":505,"var":"alertMsg","innerHTML":"htmlText","height":152}},{"type":"Button","props":{"y":23,"x":622,"width":45,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png","height":45}},{"type":"Button","props":{"x":212,"width":260,"var":"know","stateNum":"1","skin":"res/alert/know.png","height":100,"bottom":20}}]};
		return PublicUI;
	})(Dialog);
var publiconeUI=(function(_super){
		function publiconeUI(){
			
		    this.closeBtn=null;
		    this.know=null;
		    this.bet=null;

			publiconeUI.__super.call(this);
		}

		CLASS$(publiconeUI,'ui.Alert.publiconeUI',_super);
		var __proto__=publiconeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(publiconeUI.uiView);
		}
		publiconeUI.uiView={"type":"Dialog","props":{"width":685,"height":435},"child":[{"type":"Image","props":{"y":0,"x":0,"width":685,"skin":"res/alert/publicbg.png","height":435}},{"type":"Button","props":{"y":30,"x":607,"width":45,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png","height":45}},{"type":"Button","props":{"y":304,"x":220,"width":260,"var":"know","stateNum":"1","skin":"res/alert/know.png","height":100}},{"type":"Label","props":{"y":149,"x":106,"width":408,"text":"您好，您当前的默认投币额为:","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#64cee5"}},{"type":"Label","props":{"y":149,"x":513,"width":169,"var":"bet","text":"100","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#ffe400"}},{"type":"Label","props":{"y":202,"x":215,"width":293,"text":"如有需要请自行修改","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#64cee5"}}]};
		return publiconeUI;
	})(Dialog);
var RankUI=(function(_super){
		function RankUI(){
			
		    this.nickName0=null;
		    this.nickName1=null;
		    this.nickName2=null;
		    this.prizeAmount0=null;
		    this.prizeAmount1=null;
		    this.prizeAmount2=null;
		    this.rankTab=null;
		    this.closeBtn=null;
		    this.rankCon=null;
		    this.rankMine=null;
		    this.rankMineLogin=null;
		    this.rankPrize=null;
		    this.rankList=null;
		    this.rankNodata=null;

			RankUI.__super.call(this);
		}

		CLASS$(RankUI,'ui.Alert.RankUI',_super);
		var __proto__=RankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankUI.uiView);
		}
		RankUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":670,"selectedIndex":1,"height":1150},"child":[{"type":"Image","props":{"y":0,"x":0,"width":670,"skin":"res/alert/ranklistBg.png","height":1150}},{"type":"Label","props":{"y":177,"x":259,"width":109,"var":"nickName0","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":226,"x":278,"width":109,"var":"nickName1","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":274,"x":291,"width":109,"var":"nickName2","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":177,"x":374,"width":220,"var":"prizeAmount0","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":226,"x":393,"width":187,"var":"prizeAmount1","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":274,"x":406,"width":173,"var":"prizeAmount2","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Tab","props":{"y":336,"x":20,"width":627,"var":"rankTab","selectedIndex":-1,"height":131},"child":[{"type":"Button","props":{"y":8,"x":34,"width":165,"stateNum":"2","skin":"res/alert/jiangbtn.png","name":"item0","height":56}},{"type":"Button","props":{"y":9,"x":231,"width":165,"stateNum":"2","skin":"res/alert/qianbtn.png","name":"item1","height":56}},{"type":"Button","props":{"y":10,"x":427,"width":165,"stateNum":"2","skin":"res/alert/daybtn.png","name":"item2","height":56}},{"type":"Button","props":{"y":74,"x":34,"width":165,"stateNum":"2","skin":"res/alert/zhoubtn.png","name":"item3","height":"56"}},{"type":"Button","props":{"y":73,"x":231,"width":165,"stateNum":"2","skin":"res/alert/yuebtn.png","name":"item4","height":"56"}}]},{"type":"Button","props":{"y":93,"x":580,"width":45,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png","height":45}},{"type":"ViewStack","props":{"y":486,"x":37,"width":580,"var":"rankCon","selectedIndex":2,"height":565},"child":[{"type":"Box","props":{"y":10,"x":10,"width":580,"name":"item0","height":565},"child":[{"type":"Label","props":{"y":-1,"x":101,"width":67,"text":"时间","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":-1,"x":399,"width":66,"text":"奖励","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"List","props":{"y":67,"x":-6,"width":576,"visible":false,"var":"rankMine","spaceY":5,"height":486},"child":[{"type":"Box","props":{"y":-7,"x":-3,"width":581,"name":"render","height":50},"child":[{"type":"Label","props":{"y":8,"x":26,"width":235,"text":"2017-6-13 11:48:59","name":"time","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff"}},{"type":"Label","props":{"y":8,"x":372,"width":132,"text":"110000000","name":"coin","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}}]}]},{"type":"VScrollBar","props":{"name":"scrollBar"}},{"type":"Label","props":{"y":174,"x":99,"width":400,"visible":false,"var":"rankMineLogin","text":"您尚未登录，请             查看","height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"},"child":[{"type":"Label","props":{"y":0,"x":227,"width":60,"text":"登录","height":41,"fontSize":30,"font":"Microsoft YaHei","color":"#ffea00"}}]}]},{"type":"Box","props":{"y":10,"x":10,"width":580,"name":"item1","height":565},"child":[{"type":"Label","props":{"y":-3,"x":229,"width":124,"text":"玩家名称","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":-3,"x":56,"width":67,"text":"时间","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":-3,"x":459,"width":66,"text":"奖励","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"List","props":{"y":53,"x":0,"width":582,"var":"rankPrize","spaceY":7,"height":510},"child":[{"type":"Box","props":{"y":4,"x":7,"width":576,"name":"render","height":48},"child":[{"type":"Label","props":{"y":9,"x":1,"width":181,"text":"2017-6-13","name":"time","height":42,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}},{"type":"Label","props":{"y":9,"x":432,"width":132,"text":"110000000","name":"coin","height":41,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}},{"type":"Label","props":{"y":9,"x":189,"width":182,"text":"userName","name":"nickName","height":42,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}}]},{"type":"VScrollBar","props":{"name":"scrollBar"}}]}]},{"type":"Box","props":{"y":-4,"x":10,"width":580,"name":"item2","height":599},"child":[{"type":"Label","props":{"y":14,"x":280,"width":122,"text":"投币金额","height":35,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":14,"x":144,"width":74,"text":"昵称","height":38,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":14,"x":27,"width":67,"text":"排名","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"Label","props":{"y":14,"x":441,"width":124,"text":"排名趋势","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#ffd737","bold":true}},{"type":"List","props":{"y":73,"x":3,"width":582,"var":"rankList","spaceY":7,"height":510},"child":[{"type":"Box","props":{"y":4,"x":7,"width":576,"name":"render","height":48},"child":[{"type":"Label","props":{"y":5,"x":12,"width":65,"text":"1","name":"rank","height":42,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}},{"type":"Label","props":{"y":5,"x":96,"width":132,"text":"userName","name":"nickName","height":41,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}},{"type":"Label","props":{"y":5,"x":261,"width":133,"text":"10000","name":"coin","height":42,"fontSize":24,"font":"Microsoft YaHei","color":"#b77dff","align":"center"}},{"type":"Clip","props":{"y":-2,"x":467,"width":45,"skin":"res/alert/btn_up.png","name":"trendIcon","index":2,"height":45,"clipY":3}}]}]},{"type":"VScrollBar","props":{"name":"scrollBar"}}]}]},{"type":"Label","props":{"y":673,"x":260,"width":151,"visible":false,"var":"rankNodata","text":"暂无数据","height":38,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","alpha":1}}]};
		return RankUI;
	})(Dialog);
var RechargeUI=(function(_super){
		function RechargeUI(){
			
		    this.buyBtn1=null;
		    this.buyBtn2=null;
		    this.buyBtn3=null;
		    this.buyBtn4=null;
		    this.buyBtn5=null;
		    this.inputNum=null;
		    this.closeBtn=null;

			RechargeUI.__super.call(this);
		}

		CLASS$(RechargeUI,'ui.Alert.RechargeUI',_super);
		var __proto__=RechargeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RechargeUI.uiView);
		}
		RechargeUI.uiView={"type":"Dialog","props":{"width":650,"height":810},"child":[{"type":"Box","props":{"y":0,"x":0,"width":650,"height":830},"child":[{"type":"Image","props":{"width":650,"skin":"res/alert/rechargebg.png","height":810}},{"type":"Image","props":{"y":377,"x":277,"skin":"res/alert/one.png"}},{"type":"Image","props":{"y":611,"x":288,"skin":"res/alert/ten.png"}},{"type":"Image","props":{"y":262,"x":276,"skin":"res/alert/two.png"}},{"type":"Image","props":{"y":211,"x":27,"skin":"res/alert/dou1.png"}},{"type":"Image","props":{"y":326,"x":27,"skin":"res/alert/dou2.png"}},{"type":"Image","props":{"y":443,"x":27,"skin":"res/alert/dou3.png"}},{"type":"Image","props":{"y":560,"x":27,"skin":"res/alert/dou4.png"}},{"type":"Image","props":{"y":494,"x":287,"skin":"res/alert/five.png"}},{"type":"Button","props":{"y":242,"x":458,"width":155,"var":"buyBtn1","stateNum":"1","skin":"res/alert/buybtn.png","height":70}},{"type":"Button","props":{"y":356,"x":458,"width":155,"var":"buyBtn2","stateNum":"1","skin":"res/alert/buybtn.png","height":70}},{"type":"Button","props":{"y":471,"x":458,"width":155,"var":"buyBtn3","stateNum":"1","skin":"res/alert/buybtn.png","height":70}},{"type":"Button","props":{"y":587,"x":458,"width":155,"var":"buyBtn4","stateNum":"1","skin":"res/alert/buybtn.png","height":70}},{"type":"Button","props":{"y":697,"x":458,"width":155,"var":"buyBtn5","stateNum":"1","skin":"res/alert/buybtn.png","height":70}},{"type":"Label","props":{"y":150,"x":138,"width":405,"text":"欢乐豆充值 (1元=1钻石=500欢乐豆)","height":42,"fontSize":24,"font":"Microsoft YaHei","color":"#feed2c","align":"left"}},{"type":"Label","props":{"y":716,"x":115,"width":328,"var":"inputNum","text":"请输入大于0的整数","height":51,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"left"}},{"type":"Label","props":{"y":188,"x":130,"width":405,"text":"*充值钻石成功后将自动为您兑换为欢乐豆","height":42,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":79,"x":584,"width":45,"var":"closeBtn","stateNum":"1","skin":"res/alert/close.png","height":45}}]};
		return RechargeUI;
	})(Dialog);
var SetUI=(function(_super){
		function SetUI(){
			
		    this.btnSound=null;
		    this.helpBtn=null;

			SetUI.__super.call(this);
		}

		CLASS$(SetUI,'ui.Alert.SetUI',_super);
		var __proto__=SetUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SetUI.uiView);
		}
		SetUI.uiView={"type":"Dialog","props":{"width":300,"height":242},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"res/alert/setbg.png","height":242}},{"type":"Image","props":{"y":55,"x":40,"skin":"res/alert/sound.png"}},{"type":"Image","props":{"y":159,"x":47,"skin":"res/alert/question.png"}},{"type":"Clip","props":{"y":51,"x":173,"width":110,"var":"btnSound","skin":"res/alert/open.png","index":1,"height":"45","clipY":2}},{"type":"Image","props":{"y":57,"x":99,"skin":"res/alert/yinxiao.png"}},{"type":"Image","props":{"y":166,"x":260,"width":18,"skin":"res/alert/arrow.png","height":32}},{"type":"Image","props":{"y":164,"x":99,"skin":"res/alert/help.png"}},{"type":"Label","props":{"y":142,"x":12,"width":271,"var":"helpBtn","height":88}}]};
		return SetUI;
	})(Dialog);
var WinUI=(function(_super){
		function WinUI(){
			
		    this.win=null;
		    this.winsk=null;
		    this.yin=null;
		    this.prizeNum=null;
		    this.poker=null;
		    this.lose=null;

			WinUI.__super.call(this);
		}

		CLASS$(WinUI,'ui.Alert.WinUI',_super);
		var __proto__=WinUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WinUI.uiView);
		}
		WinUI.uiView={"type":"Dialog","props":{"width":710,"height":186},"child":[{"type":"Box","props":{"y":16,"x":4,"var":"win"},"child":[{"type":"Box","props":{"y":36,"x":342},"child":[{"type":"SkeletonPlayer","props":{"var":"winsk","url":"res/dragon/win.sk","scaleY":2,"scaleX":2}}]},{"type":"Box","props":{"width":710,"height":186},"child":[{"type":"Label","props":{"y":68,"x":82,"width":80,"visible":true,"var":"yin","text":"赢","height":81,"font":"prizeNum"}},{"type":"Label","props":{"y":82,"x":184,"width":360,"visible":true,"var":"prizeNum","text":"7000","height":81,"font":"prizeNum","align":"center"}},{"type":"Label","props":{"y":46,"x":228,"width":272,"visible":true,"var":"poker","text":"四张同花顺","height":36,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}}]}]},{"type":"Image","props":{"visible":false,"var":"lose","skin":"res/alert/lose.png"}}]};
		return WinUI;
	})(Dialog);
var BetUI=(function(_super){
		function BetUI(){
			
		    this.bet=null;
		    this.inPut=null;
		    this.betValue=null;
		    this.addBtn=null;
		    this.reduceBtn=null;
		    this.start=null;
		    this.btnMax=null;
		    this.rechargeBtn=null;
		    this.stopBtn=null;
		    this.zdbg=null;
		    this.playNum=null;
		    this.startBtn=null;
		    this.tip=null;

			BetUI.__super.call(this);
		}

		CLASS$(BetUI,'ui.Game.BetUI',_super);
		var __proto__=BetUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetUI.uiView);
		}
		BetUI.uiView={"type":"View","props":{"width":750,"height":320,"centerX":0},"child":[{"type":"Box","props":{"y":20,"x":13,"width":724,"height":415},"child":[{"type":"Box","props":{"y":0,"x":79,"width":564,"var":"bet","height":87},"child":[{"type":"Image","props":{"x":93,"var":"inPut","skin":"res/game/inputNum.png"}},{"type":"Label","props":{"y":9,"x":113,"width":353,"var":"betValue","text":"100","height":56,"fontSize":48,"font":"Microsoft YaHei","color":"#FF2079","bold":true,"align":"center"}},{"type":"Clip","props":{"y":0,"x":492,"width":75,"var":"addBtn","skin":"res/game/clip_addBtn.png","index":0,"height":80,"clipY":2}},{"type":"Clip","props":{"y":0,"x":0,"width":75,"var":"reduceBtn","skin":"res/game/clip_redBtn.png","index":0,"height":80,"clipY":2,"clipX":1}}]},{"type":"Box","props":{"y":83,"x":0,"width":724,"var":"start","height":332},"child":[{"type":"Image","props":{"y":15,"x":17,"skin":"res/game/bluebg.png"}},{"type":"Clip","props":{"y":40,"x":486,"width":198,"var":"btnMax","skin":"res/game/clip_bigBtn.png","index":0,"height":89,"clipY":2}},{"type":"Image","props":{"y":148,"skin":"res/game/foot.png"}},{"type":"Image","props":{"y":40,"x":34,"var":"rechargeBtn","skin":"res/game/rechargeBtn.png"}},{"type":"Button","props":{"y":0,"x":227,"width":264,"visible":false,"var":"stopBtn","stateNum":"1","skin":"res/game/zd.png","height":216}},{"type":"Image","props":{"y":150,"x":314,"var":"zdbg","skin":"res/game/zi.png"}},{"type":"Label","props":{"y":153,"x":324,"width":75,"var":"playNum","text":"100","height":31,"fontSize":24,"font":"Arial","color":"#ffc600","align":"center"}},{"type":"Button","props":{"y":0,"x":227,"width":264,"var":"startBtn","stateNum":"1","height":216}},{"type":"Image","props":{"y":154,"x":309,"width":98,"var":"tip","skin":"res/game/tip.png","height":36}}]}]}]};
		return BetUI;
	})(View);
var headUI=(function(_super){
		function headUI(){
			
		    this.douBtn=null;
		    this.rankBtn=null;
		    this.btnBack=null;
		    this.tCoin=null;
		    this.rechargeBtn=null;
		    this.homeBtn=null;
		    this.setBtn=null;
		    this.balanceBtn=null;
		    this.Ycoin=null;

			headUI.__super.call(this);
		}

		CLASS$(headUI,'ui.Game.headUI',_super);
		var __proto__=headUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(headUI.uiView);
		}
		headUI.uiView={"type":"View","props":{"width":750,"height":168,"centerX":0},"child":[{"type":"Image","props":{"y":118,"x":18,"var":"douBtn","skin":"res/game/douBg.png"}},{"type":"Button","props":{"y":25,"x":109,"var":"rankBtn","stateNum":"1","skin":"res/game/rankBtn.png"}},{"type":"Image","props":{"y":25,"x":15,"visible":false,"var":"btnBack","skin":"res/game/backUp.png"}},{"type":"Label","props":{"y":120,"x":68,"width":151,"var":"tCoin","valign":"middle","text":"0","height":41,"fontSize":24,"font":"Arial","color":"#ffffff","bold":true,"align":"center"}},{"type":"Button","props":{"y":119,"x":219,"width":45,"var":"rechargeBtn","stateNum":"1","skin":"res/game/more.png","mouseThrough":true,"height":45}},{"type":"Button","props":{"y":25,"x":564,"width":65,"visible":false,"var":"homeBtn","stateNum":"1","skin":"res/game/backBtn.png","height":65}},{"type":"Button","props":{"y":25,"x":659,"var":"setBtn","stateNum":"1","skin":"res/game/otherBtn.png"}},{"type":"Image","props":{"y":118,"x":476,"var":"balanceBtn","skin":"res/game/yuBg.png"}},{"type":"Label","props":{"y":122,"x":531,"width":178,"var":"Ycoin","valign":"middle","text":"0","height":41,"fontSize":24,"font":"Arial","color":"#ffffff","bold":true,"align":"center"}}]};
		return headUI;
	})(View);
var MoneyUI=(function(_super){
		function MoneyUI(){
			
		    this.qiandai=null;
		    this.percent=null;
		    this.prizeTip1=null;

			MoneyUI.__super.call(this);
		}

		CLASS$(MoneyUI,'ui.Game.MoneyUI',_super);
		var __proto__=MoneyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MoneyUI.uiView);
		}
		MoneyUI.uiView={"type":"View","props":{"width":563,"height":111},"child":[{"type":"Box","props":{"y":0,"x":0,"width":563,"height":111},"child":[{"type":"Image","props":{"y":0,"x":0,"width":563,"skin":"res/game/qiandaiBg.png","height":111}},{"type":"Label","props":{"y":26,"x":119,"width":427,"var":"qiandai","text":"0","height":50,"font":"moneyNum","align":"center"}},{"type":"Label","props":{"y":74,"x":138,"width":116,"text":"单笔投币金额","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#00f0ff","align":"left"}},{"type":"Label","props":{"y":74,"x":459,"width":51,"var":"percent","text":"20%","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#F000ff","align":"center"}},{"type":"Label","props":{"y":74,"x":501,"width":50,"text":"奖励","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#00f0ff","align":"center"}},{"type":"Label","props":{"y":74,"x":317,"width":144,"text":"时有机会赢得钱袋","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#00f0ff","align":"center"}},{"type":"Label","props":{"y":74,"x":247,"width":69,"var":"prizeTip1","text":"≥10","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#00f0ff","align":"center"}}]}]};
		return MoneyUI;
	})(View);
var NotifyUI=(function(_super){
		function NotifyUI(){
			

			NotifyUI.__super.call(this);
		}

		CLASS$(NotifyUI,'ui.Game.NotifyUI',_super);
		var __proto__=NotifyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NotifyUI.uiView);
		}
		NotifyUI.uiView={"type":"View","props":{"width":740,"height":40,"centerX":0},"child":[{"type":"Image","props":{"y":5,"x":0,"skin":"res/game/notice.png"}}]};
		return NotifyUI;
	})(View);
var OddsUI=(function(_super){
		function OddsUI(){
			
		    this.powerAll=null;
		    this.power4=null;
		    this.power1=null;
		    this.power5=null;
		    this.power6=null;
		    this.power2=null;
		    this.power3=null;
		    this.power7=null;
		    this.powertext4=null;
		    this.powerNum4=null;
		    this.powertext5=null;
		    this.powerNum5=null;
		    this.powertext6=null;
		    this.powerNum6=null;
		    this.powertext7=null;
		    this.powerNum7=null;
		    this.powertext1=null;
		    this.powerNum1=null;
		    this.powertext2=null;
		    this.powerNum2=null;
		    this.powertext3=null;
		    this.powerNum3=null;

			OddsUI.__super.call(this);
		}

		CLASS$(OddsUI,'ui.Game.OddsUI',_super);
		var __proto__=OddsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(OddsUI.uiView);
		}
		OddsUI.uiView={"type":"View","props":{"width":750,"height":493,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"res/game/beinu.png","height":493}},{"type":"Box","props":{"y":74,"x":74},"child":[{"type":"Image","props":{"y":0,"x":-2,"var":"powerAll","skin":"res/game/zuhe.png"}},{"type":"Clip","props":{"y":10,"x":327,"width":291,"var":"power4","skin":"res/game/power0.png","index":1,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":55,"x":0,"width":291,"var":"power1","skin":"res/game/power1.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":55,"x":327,"width":291,"var":"power5","skin":"res/game/power2.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":99,"x":327,"width":291,"var":"power6","skin":"res/game/power4.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":99,"x":0,"width":291,"var":"power2","skin":"res/game/power3.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":143,"x":0,"width":291,"var":"power3","skin":"res/game/power5.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Clip","props":{"y":143,"x":327,"width":291,"var":"power7","skin":"res/game/power6.png","index":0,"height":40,"clipY":2,"clipX":1,"alpha":1}},{"type":"Label","props":{"y":15,"x":536,"width":37,"var":"powertext4","valign":"middle","text":"葫芦","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800"}},{"type":"Label","props":{"y":15,"x":576,"width":35,"var":"powerNum4","valign":"middle","text":"8倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800","align":"center"}},{"type":"Label","props":{"y":59,"x":503,"width":68,"var":"powertext5","valign":"middle","text":"4个相同","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff"}},{"type":"Label","props":{"y":59,"x":572,"width":39,"var":"powerNum5","valign":"middle","text":"10倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff","align":"center"}},{"type":"Label","props":{"y":103,"x":530,"width":37,"var":"powertext6","valign":"middle","text":"顺子","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800"}},{"type":"Label","props":{"y":103,"x":565,"width":46,"var":"powerNum6","valign":"middle","text":"20倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800","align":"center"}},{"type":"Label","props":{"y":147,"x":530,"width":37,"var":"powertext7","valign":"middle","text":"豹子","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff"}},{"type":"Label","props":{"y":147,"x":572,"width":39,"var":"powerNum7","valign":"middle","text":"50倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff","align":"center"}},{"type":"Label","props":{"y":58,"x":54,"width":88,"var":"powertext1","valign":"middle","text":"4至6一对","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff"}},{"type":"Label","props":{"y":58,"x":6,"width":39,"var":"powerNum1","valign":"middle","text":"10倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff","align":"center"}},{"type":"Label","props":{"y":101,"x":56,"width":77,"var":"powertext2","valign":"middle","text":"3个相同","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800"}},{"type":"Label","props":{"y":101,"x":2,"width":46,"var":"powerNum2","valign":"middle","text":"20倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#c06800","align":"center"}},{"type":"Label","props":{"y":146,"x":51,"width":75,"var":"powertext3","valign":"middle","text":"2个一对","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff"}},{"type":"Label","props":{"y":146,"x":5,"width":39,"var":"powerNum3","valign":"middle","text":"4倍","height":29,"fontSize":18,"font":"Microsoft YaHei","color":"#a484ff","align":"center"}}]}]};
		return OddsUI;
	})(View);
var loadingUI=(function(_super){
		function loadingUI(){
			
		    this.progress=null;
		    this.percent=null;

			loadingUI.__super.call(this);
		}

		CLASS$(loadingUI,'ui.Start.loadingUI',_super);
		var __proto__=loadingUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadingUI.uiView);
		}
		loadingUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":1334,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":-292,"width":1334,"skin":"res/loading/loadingbg.png","height":1334}},{"type":"Box","props":{"y":667,"x":374,"width":750,"height":1334},"child":[{"type":"SkeletonPlayer","props":{"y":0,"x":0,"url":"res/loading/loading.sk","scaleY":2,"scaleX":2}}]},{"type":"Box","props":{"y":6,"x":0,"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1264,"x":34,"width":673,"skin":"res/loading/fcm.png","height":50}},{"type":"ProgressBar","props":{"y":1229,"x":43,"width":655,"var":"progress","value":0,"skin":"res/loading/progress_preload.png","height":10}},{"type":"Label","props":{"y":1199,"x":352,"width":37,"var":"percent","text":"18%","height":18,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":871,"x":524,"width":71,"skin":"res/loading/neice.png","height":36}}]}]};
		return loadingUI;
	})(View);