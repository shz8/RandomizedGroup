const index = require("./lib/index");
const utils = require("utility");
var numbers = require('numbers').statistic;
console.log(numbers.standardDev([20, 35, 45, 60]))

let sexs = ["男", "女"]; //,'未知']
let stages = ["Ⅰ期", "Ⅱ期", "Ⅲ期"];
let firsts = "赵钱孙李周吴郑王冯陈楮卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闽席季麻强贾路娄危江童颜郭梅盛林刁锺徐丘骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄麹家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘斜厉戎"
let lasts = "话说宝玉正自发怔不想黛玉将手帕子扔了来正碰在眼睛上倒唬了一跳问这是谁黛玉摇着头儿笑道不敢是我失了手因为宝姐姐要看呆雁我比给他看不想失了手宝玉揉着眼睛待要说什么又不好说的一时凤姐儿来了因说起初一日在清虚观打醮的事来约着宝钗宝玉黛玉等看戏去宝钗笑道罢罢怪热的什么没看过的戏我不去凤姐道他们那里凉快两边又有楼咱们要去我头几天先打发人去把那些道士都赶出去把楼上打扫了挂起帘子来一个闲人不许放进庙去才是好呢我已经回了太太了你们不去我自家去这些日子也闷的很了家里唱动戏我又不得舒舒服服的看贾母听说就笑道既这么着我和你去凤姐听说笑道老祖宗也去敢仔好可就是我又不得受用了贾母道到明儿我在正面楼上你在傍边楼上你也不用到我这边来立规矩可好不好凤姐笑道这就是老祖宗疼我了贾母因向宝钗道你也去连你母亲也去长天老日的在家里也是睡觉宝钗只得答应着贾母又打发人去请了薛姨妈顺路告诉王夫人要带了他们姊妹去王夫人因一则身上不好二则预备元春有人出来早已回了不去的听贾母如此说笑道还是这么高兴打发人去到园里告诉有要逛去的只管初一跟老太太逛去这个话一传开了别人还可已只是那些丫头们天天不得出门槛儿听了这话谁不要去就是各人的主子懒怠去他也百般的撺掇了去因此李纨等都说去贾母心中越发喜欢早已吩咐人去打扫安置不必细说单表到了初一这一日荣国府门前车辆纷纷人马簇簇那底下执事人等听见是贵妃做好事贾母亲去拈香况是端阳佳节因此凡动用的物件一色都是齐全的不同往日少时贾母等出来贾母坐一乘八人大轿李氏凤姐薛姨妈每人一乘四人轿宝钗黛玉二人共坐一辆翠盖珠缨八宝车迎春探春惜春三人共坐一辆朱轮华盖车然后贾母的丫头鸳鸯鹦鹉琥珀珍珠黛玉的丫头紫鹃雪雁鹦哥宝钗的丫头莺儿文杏迎春的丫头司棋绣橘探春的丫头侍书翠墨惜春的丫头入画彩屏薛姨妈的丫头同喜同贵外带香菱香菱的丫头臻儿李氏的丫头素云碧月凤姐儿的丫头平儿丰儿小红并王夫人的两个丫头金钏彩云也跟了凤姐儿来奶子抱着大姐儿另在一辆车上还有几个粗使的丫头连上各房的老嬷嬷奶妈子并跟着出门的媳妇子们黑压压的站了一街的车那街上的人见是贾府去烧香都站在两边观看那些小门小户的妇女也都开了门在门口站着七言八语指手画脚就像看那过会的一般只见前头的全副执事摆开一位青年公子骑着银鞍白马彩辔朱缨在那八人轿前领着那些车轿人马浩浩荡荡一片锦绣香烟遮天压地而来却是鸦雀无闻只有车轮马蹄之声不多时已到了清虚观门口只听钟鸣鼓响早有张法官执香披衣带领众道士在路旁迎接宝玉下了马贾母的轿刚至山门以内见了本境城隍土地各位泥塑圣像便命住轿贾珍带领各子弟上来迎接凤姐儿的轿子却赶在头里先到了带着鸳鸯等迎接上来见贾母下了轿忙要搀扶可巧有个十二三岁的小道士儿拿着个剪筒照管各处剪蜡花儿正欲得便且藏出去不想一头撞在凤姐儿怀里凤姐便一扬手照脸打了个嘴巴把那小孩子打了一个斤斗骂道小野杂种往那里跑那小道士也不顾拾烛剪爬起来往外还要跑正值宝钗等下车众婆娘媳妇正围随的风雨不透但见一个小道士滚了出来都喝声叫拿拿打打贾母听了忙问是怎么了贾珍忙过来问凤姐上去搀住贾母就回说一个小道士儿剪蜡花的没躲出去这会子混钻呢贾母听说忙道快带了那孩子来别唬着他小门小户的孩子都是娇生惯养惯了的那里见过这个势派倘或唬着他倒怪可怜见儿的他老子娘岂不疼呢说着便叫贾珍去好生带了来贾珍只得去拉了那孩子一手拿着蜡剪跪在地下乱颤贾母命贾珍拉起来叫他不用怕问他几岁了那孩子总说不出话来贾母还说可怜见儿的又向贾珍道珍哥带他去罢给他几个钱买果子吃别叫人难为了他贾珍答应领出去了这里贾母带着众人一层一层的瞻拜观玩外面小厮们见贾母等进入二层山门忽见贾珍领了个小道士出来叫人来带了去给他几百钱别难为了他家人听说忙上来领去贾珍站在台阶上因问管家在那里底下站的小厮们见问都一齐喝声说叫管家登时林之孝一手整理着帽子跑进来到了贾珍跟前贾珍道虽然这里地方儿大今儿咱们的人多你使的人你就带了在这院里罢使不着的打发到那院里去把小么儿们多挑几个在这二层门上和两边的角门上伺候着要东西传话你可知道不知道今儿姑娘奶奶们都出来一个闲人也不许到这里来林之孝忙答应知道又说了几个是贾珍道去罢又问怎么不见蓉儿一声未了只见贾蓉从钟楼里跑出来了贾珍道你瞧瞧我这里没热他倒凉快去了喝命家人啐他那小厮们都知道贾珍素日的性子违拗不得就有个小厮上来向贾蓉脸上啐了一口贾珍还瞪着他那小厮便问贾蓉爷还不怕热哥儿怎么先凉快去了贾蓉垂着手一声不敢言语那贾芸贾萍贾芹等听见了不但他们慌了并贾琏贾贾琼等也都忙了一个一个都从墙根儿底下慢慢的溜下来了贾珍又向贾蓉道你站着做什么还不骑了马跑到家里告诉你娘母子去老太太和姑娘们都来了叫他们快来伺候贾蓉听说忙跑了出来一叠连声的要马一面抱怨道早都不知做什么的这会子寻趁我一面又骂小子捆着手呢么马也拉不来要打发小厮去又恐怕后来对出来说不得亲自走一趟骑马去了且说贾珍方要抽身进来只见张道士站在傍边陪笑说道论理我不比别人应该里头伺候只因天气炎热众位千金都出来了法官不敢擅入请爷的示下恐老太太问或要随喜那里我只在这里伺候罢了贾珍知道这张道士虽然是当日荣国公的替身曾经先皇御口亲呼为大幻仙人如今现掌道录司印又是当今封为终了真人现今王公藩镇都称为神仙所以不敢轻慢二则他又常往两个府里去太太姑娘们都是见的今见他如此说便笑道咱们自己你又说起这话来再多说我把你这胡子还揪了你的呢还不跟我进来呢那张道士呵呵的笑着跟了贾珍进来贾珍到贾母跟前控身陪笑说道张爷爷进来请安贾母听了忙道请他来贾珍忙去搀过来那张道士先呵呵笑道无量寿佛老祖宗一向福寿康宁众位奶奶姑娘纳福一向没到府里请安老太太气色越发好了贾母笑道老神仙你好张道士笑道托老太太的万福小道也还康健别的倒罢了只记挂着哥儿一向身上好前日四月二十六我这里做遮天大王的圣诞人也来的少东西也很干净我说请哥儿来逛逛怎么说不在家贾母说道果真不在家一面回头叫宝玉谁知宝玉解手儿去了才来忙上前问张爷爷好张道士也抱住问了好又向贾母笑道哥儿越发发福了贾母道他外头好里头弱又搭着他老子逼着他念书生生儿的把个孩子逼出病来了张道士道前日我在好几处看见哥儿写的字做的诗都好的了不得怎么老爷还抱怨哥儿不大喜欢念书呢依小道看来也就罢了又叹道我看见哥儿的这个形容身段言谈举动怎么就和当日国公爷一个稿子说着两眼酸酸的贾母听了也由不得有些戚惨说道正是呢我养了这些儿子孙子也没一个像他爷爷的就只这玉儿还像他爷爷那张道士又向贾珍道当日国公爷的模样儿爷们一辈儿的不用说了自然没赶上大约连大老爷二老爷也记不清楚了罢说毕又呵呵大笑道前日在一个人家儿看见位小姐今年十五岁了长的倒也好个模样儿我想着哥儿也该提亲了要论这小姐的模样儿聪明智慧根基家当倒也配的过但不知老太太怎么样小道也不敢造次等请了示下才敢提去呢贾母道上回有个和尚说了这孩子命里不该早娶等再大一大儿再定罢你如今也讯听着不管他根基富贵只要模样儿配的上就来告诉我就是那家子穷也不过帮他几两银子就完了只是模样儿性格儿难得好的说毕只见凤姐儿笑道张爷爷我们丫头的寄名符儿你也不换去前儿亏你还有那么大脸打发人和我要鹅黄缎子去要不给你又恐怕你那老脸上下不来张道士哈哈大笑道你瞧我眼花了也没见奶奶在这里也没道谢寄名符早已有了前日原想送去不承望娘娘来做好事也就混忘了还在佛前镇着呢等着我取了来说着跑到大殿上一时拿了个茶盘搭着大红蟒缎经袱子托出符来大姐儿的奶子接了符张道士才要抱过大姐儿来只见凤姐笑道你就手里拿出来罢了又拿个盘子托着张道士道手里不干不净的怎么拿用盘子洁净些凤姐笑道你只顾拿出盘子倒唬了我一跳我不说你是为送符倒像和我们化布施来了众人听说哄然一笑连贾珍也掌不住笑了贾母回头道猴儿猴儿你不怕下割舌地狱凤姐笑道我们爷儿们不相干他怎么常常的说我该积阴骘迟了就短命呢张道士也笑道我拿出盘子来一举两用倒不为化布施倒要把哥儿的那块玉请下来托出去给那些远来的道友和徒子徒孙们见识见识贾母道既这么着你老人家老天拔地的跑什么呢带着他去瞧了叫他进来就是了张道士道老太太不知道看着小道是八十岁的人托老太太的福倒还硬朗二则外头的人多气味难闻况且大暑热的天哥儿受不惯倘或哥儿中了腌气味倒值多了贾母听说便命宝玉摘下通灵玉来放在盘内那张道士兢兢业业的用蟒袱子垫着捧出去了这里贾母带着众人各处游玩一回方去上楼只见贾珍回说张爷爷送了玉来刚说着张道士捧着盘子走到跟前笑道众人托小道的福见了哥儿的玉实在稀罕都没什么敬贺的这是他们各人传道的法器都愿意为敬贺之礼虽不稀罕哥儿只留着玩耍赏人罢贾母听说向盘内看时只见也有金璜也有玉或有事事如意或有岁岁平安皆是珠穿宝嵌玉琢金镂共有三五十件因说道你也胡闹他们出家人是那里来的何必这样这断不能收张道士笑道这是他们一点敬意小道也不能阻挡老太太要不留下倒叫他们看着小道微薄不像是门下出身了贾母听如此说方命人接下了宝玉笑道老太太张爷爷既这么说又推辞不得我要这个也无用不如叫小子捧了这个跟着我出去散给穷人罢贾母笑道这话说的也是张道士忙拦道哥儿虽要行好但这些东西虽说不甚稀罕也到底是几件器皿若给了穷人一则与他们也无益二则反倒遭塌了这些东西要舍给穷人何不就散钱给他们呢宝玉听说便命收下等晚上拿钱施舍罢说毕张道士方才退出这里贾母和众人上了楼在正面楼上归坐凤姐等上了东楼众丫头等在西楼轮流伺候一时贾珍上来回道神前拈了戏头一本是白蛇记贾母便问是什么故事贾珍道汉高祖斩蛇起首的故事第二本是满床笏贾母点头道倒是第二本也还罢了神佛既这样也只得如此又问第三本贾珍道第三本是南柯梦贾母听了便不言语贾珍退下来走至外边预备着申表焚钱粮开戏不在话下且说宝玉在楼上坐在贾母傍边因叫个小丫头子捧着方才那一盘子东西将自己的玉带上用手翻弄寻拨一件一件的挑与贾母看贾母因看见有个赤金点翠的麒麟便伸手拿起来笑道这件东西好像是我看见谁家的孩子也带着一个的宝钗笑道史大妹妹有一个比这个小些贾母道原来是云儿有这个宝玉道他这么往我们家去住着我也没看见探春笑道宝姐姐有心不管什么他都记得黛玉冷笑道他在别的上头心还有限惟有这些人带的东西上他才是留心呢宝钗听说回头装没听见宝玉听见史湘云有这件东西自己便将那麒麟忙拿起来揣在怀里忽又想到怕人看见他听是史湘云有了他就留着这件因此手里揣着却拿眼睛瞟人只见众人倒都不理论惟有黛玉瞅着他点头儿似有赞叹之意宝玉心里不觉没意思起来又掏出来瞅着黛玉讪笑道这个东西有趣儿我替你拿着到家里穿上个穗子你带好不好黛玉将头一扭道我不稀罕宝玉笑道你既不稀罕我可就拿着了说着又揣起来刚要说话只见贾珍之妻尤氏和贾蓉续娶的媳妇胡氏婆媳两个来了见过贾母贾母道你们又来做什么我不过没事来逛逛一句话说了只见人报冯将军家有人来了原来冯紫英家听见贾府在庙里打醮连忙预备猪羊香烛茶食之类赶来送礼凤姐听了忙赶过正楼来拍手笑道嗳呀我却没防着这个只说咱们娘儿们来闲逛逛人家只当咱们大摆斋坛的来送礼都是老太太闹的这又不得预备赏封儿刚说了只见冯家的两个管家女人上楼来了冯家两个未去接着赵侍郎家也有礼来了于是接二连三都听见贾府打醮女眷都在庙里凡一应远亲近友世家相与都来送礼贾母才后悔起来说又不是什么正经斋事我们不过闲逛逛没的惊动人因此虽看了一天戏至下午便回来了次日便懒怠去凤姐又说打墙也是动土已经惊动了人今儿乐得还去逛逛贾母因昨日见张道士提起宝玉说亲的事来谁知宝玉一日心中不自在回家来生气嗔着张道士与他说了亲口口声声说从今以后再不见张道士了别人也并不知为什么原故二则黛玉昨日回家又中了暑因此二事贾母便执意不去了凤姐见不去自己带了人去也不在话下且说宝玉因见黛玉病了心里放不下饭也懒怠吃不时来问只怕他有个好歹黛玉因说道你只管听你的戏去罢在家里做什么宝玉因昨日张道士提亲之事心中大不受用今听见黛玉如此说心里因想道别人不知道我的心还可恕连他也奚落起我来因此心中更比往日的烦恼加了百倍要是别人跟前断不能动这肝火只是黛玉说了这话倒又比往日别人说这话不同由不得立刻沉下脸来说道我白认得你了罢了罢了黛玉听说冷笑了两声道你白认得了我吗我那里能够像人家有什么配的上你的呢宝玉听了便走来直问到脸上道你这么说是安心咒我天诛地灭黛玉一时解不过这话来宝玉又道昨儿还为这个起了誓呢今儿你到底儿又重我一句我就天诛地灭你又有什么益处呢黛玉一闻此言方想起昨日的话来今日原自己说错了又是急又是愧便抽抽搭搭的哭起来说道我要安心咒你我也天诛地灭何苦来呢我知道昨日张道士说亲你怕拦了你的好姻缘你心里生气来拿我煞性子原来宝玉自幼生成来的有一种下流痴病况从幼时和黛玉耳鬓厮磨心情相对如今稍知些事又看了些邪书僻传凡远亲近友之家所见的那些闺英闱秀皆未有稍及黛玉者所以早存一段心事只不好说出来故每每或喜或怒变尽法子暗中试探那黛玉偏生也是个有些痴病的也每用假情试探因你也将真心真意瞒起来我也将真心真意瞒起来都只用假意试探如此两假相逢终有一真其间琐琐碎碎难保不有口角之事即如此刻宝玉的心内想的是别人不知我的心还可恕难道你就不想我的心里眼里只有你你不能为我解烦恼反来拿这个话堵噎我可见我心里时时刻刻白有你你心里竟没我了宝玉是这个意思只口里说不出来那黛玉心里想着你心里自然有我虽有金玉相对之说你岂是重这邪说不重人的呢我就时常提这金玉你只管了然无闻的方见的是待我重无毫发私心了怎么我只一提金玉的事你就着急呢可知你心里时时有这个金玉的念头我一提你怕我多心故意儿着急安心哄我那宝玉心中又想着我不管怎么样都好只要你随意我就立刻因你死了也是情愿的你知也罢不知也罢只由我的心那才是你和我近不和我远黛玉心里又想着你只管你就是了你好我自然好你要把自己丢开只管周旋我是你不叫我近你竟叫我远了看官你道两个人原是一个心如此看来却都是多生了枝叶将那求近之心反弄成疏远之意了此皆他二人素昔所存私心难以备述如今只说他们外面的形容那宝玉又听见他说好姻缘三个字越发逆了己意心里干噎口里说不出来便赌气向颈上摘下通灵玉来咬咬牙狠命往地下一摔道什么劳什子我砸了你就完了事了偏生那玉坚硬非常摔了一下竟文风不动宝玉见不破便回身找东西来砸黛玉见他如此早已哭起来说道何苦来你砸那哑吧东西有砸他的不如来砸我二人闹着紫鹃雪雁等忙来解劝后来见宝玉下死劲的砸那玉忙上来夺又夺不下来见比往日闹的大了少不得去叫袭人袭人忙赶了来才夺下来宝玉冷笑道我是砸我的东西与你们什么相干袭人见他脸都气黄了眉眼都变了从来没气的这么样便拉着他的手笑道你合妹妹拌嘴不犯着砸他倘或砸坏了叫他心里脸上怎么过的去呢黛玉一行哭着一行听了这话说到自己心坎儿上来可见宝玉连袭人不如越发伤心大哭起来心里一急方才吃的香薷饮便承受不住哇的一声都吐出来了紫鹃忙上来用绢子接住登时一口一口的把块绢子吐湿雪雁忙上来捶揉紫鹃道虽然生气姑娘到底也该保重些才吃了药好些儿这会子因和宝二爷拌嘴又吐出来了倘或犯了病宝二爷怎么心里过的去呢宝玉听了这话说到自己心坎儿上来可见黛玉竟还不如紫鹃呢又见黛玉脸红头胀一行啼哭一行气凑一行是泪一行是汗不胜怯弱宝玉见了这般又自己后悔方才不该和他较证这会子他这样光景我又替不了他心里想着也由不得滴下泪来了袭人守着宝玉见他两个哭的悲痛也心酸起来又摸着宝玉的手冰凉要劝宝玉不哭罢一则恐宝玉有什么委屈闷在心里二则又恐薄了黛玉两头儿为难正是女儿家的心性不觉也流下泪来紫鹃一面收拾了吐的药一面拿扇子替黛玉轻轻的扇着见三个人都鸦雀无声各自哭各自的索性也伤起心来也拿着绢子拭泪四个人都无言对泣还是袭人勉强笑向宝玉道你不看别的你看看这玉上穿的穗子也不该和林姑娘拌嘴呀黛玉听了也不顾病赶来夺过去顺手抓起一把剪子来就铰袭人紫鹃刚要夺已经剪了几段黛玉哭道我也是白效力他也不稀罕自有别人替他再穿好的去呢袭人忙接了玉道何苦来这是我才多嘴的不是了宝玉向黛玉道你只管铰我横竖不带他也没什么只顾里头闹谁知那些老婆子们见黛玉大哭大吐宝玉又砸玉不知道要闹到什么田地儿便连忙的一齐往前头去回了贾母王夫人知道好不至于连累了他们那贾母王夫人见他们忙忙的做一件正经事来告诉也都不知有了什么原故便一齐进园来瞧急的袭人抱怨紫鹃为什么惊动了老太太太太紫鹃又只当是袭人着人去告诉的也抱怨袭人那贾母王夫人进来见宝玉也无言黛玉也无话问起来又没为什么事便将这祸移到袭人紫鹃两个人身上说为什么你们不小心伏侍这会子闹起来都不管呢因此将二人连骂带说教训了一顿二人都没的说只得听着还是贾母带出宝玉去了方才平伏过了一日至初三日乃是薛蟠生日家里摆酒唱戏贾府诸人都去了宝玉因得罪了黛玉二人总未见面心中正自后悔无精打彩那里还有心肠去看戏因而推病不去黛玉不过前日中了些暑溽之气本无甚大病听见他不去心里想他是好吃酒听戏的今日反不去自然是因为昨儿气着了再不然他见我不去他也没心肠去只是昨儿千不该万不该铰了那玉上的穗子管定他再不带了还得我穿了他才带因而心中十分后悔那贾母见他两个都生气只说趁今儿那边去看戏他两个见了也就完了不想又都不去老人家急的抱怨说我这老冤家是那一世里造下的孽障偏偏儿的遇见了这么两个不懂事的小冤家儿没有一天不叫我操心真真的是俗语儿说的不是冤家不聚头了几时我闭了眼断了这口气任凭你们两个冤家闹上天去我眼不见心不烦也就罢了偏他娘的又不咽这口气自己抱怨着也哭起来了谁知这个话传到宝玉黛玉二人耳内他二人竟从来没有听见过不是冤家不聚头的这句俗话儿如今忽然得了这句话好似参禅的一般都低着头细嚼这句话的滋味儿不觉的潸然泪下虽然不曾会面却一个在潇湘馆临风洒泪一个在怡红院对月长吁正是人居两地情发一心了袭人因劝宝玉道千万不是都是你的不是往日家里的小厮们和他的姐姐妹妹拌嘴或是两口子分争你要是听见了还骂那些小厮们蠢不能体贴女孩儿们的心肠今儿怎么你也这么着起来了明儿初五大节下的你们两个再这么仇人似的老太太越发要生气了一定弄的大家不安生依我劝你正经下个气儿赔个不是大家还是照常一样儿的这么着不好吗宝玉听了不知依与不依要知端详下回分解"
let samples = getSamples(1000);
let groups = [];
let start = new Date()
//simpleRandom(2);//简单随
//blockRandom();//分区
//stratifiedRandom();//分层
//dynamicRandom()//动态（最小化）
dynamicRandomIncrement()
console.log(parseInt((new Date() - start) / 1000) + ':' + (new Date() - start) % 1000)
//分层
function stratifiedRandom() {
  samples = getSamples(1000);
  let stratifieds = [
    { name: "age", type: "number", condition: "18]|(18,60)|[60" },
    { name: "sex", type: "enum", condition: sexs.join("|") },
    { name: "stage", type: "enum", condition: stages.join("|") },
  ];
  groups = index.stratifiedRandom({ stratifieds, samples });
  printGroups();
}
//动态随机（增量）
function dynamicRandomIncrement() {
  samples = getSamples(4 * 300 );
  let incrementSample = getSamples(1)
  if (incrementSample && incrementSample.length > 0)
    incrementSample = incrementSample[0]
  else
    return
  //console.log(samples)
  console.log(`sampleCount=${samples.length}`)
  let dyncFieds = [
    { name: 'age', type: 'int', condition: '18]|(18,60)|[60', weight: 1 },
    { name: 'sex', type: 'enum', condition: sexs.join('|'), weight: 2 },
    { name: 'stage', type: 'enum', condition: stages.join('|'), weight: 3 }]

  let p = 0.86 //偏倚分配概率。应该在 1/groupNum<= p <= 1之间，p=1/groupNum为简单随机；p=1为确定分配到最小

  groups = index.dynamicRandom({ dyncFieds: index.clone(dyncFieds), samples, groupNum: 3, groupProportion: null, p })//, type: 'standardDev'}) //type只支持standardDev（标准差，默认）和rangeMethod（极差法）
  let sampleGroups = []
  let newSamples = []
  index.addNOforSamples(groups, 5);
  if (groups && groups.length > 0) {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].length > 0) {
        sampleGroups.push(groups[i][0].groupNO)
      }
      newSamples.push.apply(newSamples, groups[i]);
    }
  }
  for (let idx = 0; idx < 1; idx++) {
    let smp = index.dynamicRandomIncrement({ dyncFieds: index.clone(dyncFieds), samples: newSamples, incrementSample, groups: sampleGroups, p })
    //groups = index.dynamicRandom({ dyncFieds: index.clone(dyncFieds), samples, groupNum: 4, groupProportion, p })//, type: 'standardDev'}) //type只支持standardDev（标准差，默认）和rangeMethod（极差法）
    console.log('incrementSample', smp)
  }
}
//动态
function dynamicRandom() {
  samples = getSamples(4 * 10000 - 1);
  //console.log(samples)
  console.log(`sampleCount=${samples.length}`)
  let dyncFieds = [
    { name: 'age', type: 'int', condition: '18]|(18,60)|[60', weight: 1 },
    { name: 'sex', type: 'enum', condition: sexs.join('|'), weight: 2 },
    { name: 'stage', type: 'enum', condition: stages.join('|'), weight: 3 }]
  let groupProportion = [1, 3] //组间比例2:1:3表示为[2,1,3]，groupProportion.length>groupNum，那么groupNum=groupProportion.lenght，groupProportion.length<groupNum，那么右侧补1,1(即默认比例为1)
  let p = 0.86 //偏倚分配概率。应该在 1/groupNum<= p <= 1之间，p=1/groupNum为简单随机；p=1为确定分配到最小

  for (let idx = 0; idx < 1; idx++) {//p=1时比较确定，相同因素水平值比较稳定，只是分组顺序不同；p<1时因有偏倚概率，因素水平值会有些许偏倚
    groups = index.dynamicRandom({ dyncFieds: index.clone(dyncFieds), samples, groupNum: 4, groupProportion, p, type: 'rangeMethod' })//, type: 'standardDev'}) //type只支持standardDev（标准差，默认）和rangeMethod（极差法）
    //groups = index.dynamicRandom({ dyncFieds: index.clone(dyncFieds), samples, groupNum: 4, groupProportion, p })//, type: 'standardDev'}) //type只支持standardDev（标准差，默认）和rangeMethod（极差法）
    printGroups();
  }
}
//区组
function blockRandom() {
  samples = getSamples(1000);
  simpleRandom(1);
  samples = groups.groups && groups.groups[0];
  groups = index.blockRandom({
    samples,
    groupNum: 2,
    blockSize: 2 * 13,
    blockField: "id",
  });
  printGroups();
}
//随机
function simpleRandom(groupNum) {
  groups = index.simpleRandom({ samples, groupNum }); //groupNum=1时，作用为打乱数组顺序
  printGroups();
}
function printGroups() {
  if (groups && groups.length > 0) {
    index.addNOforSamples(groups, 5);
    /*for (let idx = 0; idx < groups.length; idx++) {
      console.log(groups[idx]);
    }*/
    for (let idx = 0; idx < groups.length; idx++) {
      console.log(groups[idx].length);
    }
  } else {
    console.log(groups);
  }
}
function getSamples(count) {
  let tsamples = [];
  for (let id = 1; id < count + 1; id++) {
    let age = utils.random(1, 110); //生成年龄

    let sex = sexs[utils.random(2)]; //生成性别
    let stage = stages[utils.random(3)]; //生产疾病分期
    let name = firsts[utils.random(firsts.length)] + lasts[utils.random(lasts.length)] + lasts[utils.random(lasts.length * 5)]
    name = name.replace('undefined', '')
    let indate = utils.YYYYMMDD(
      index.dateAdd("d", -1 * utils.random(1, 3278), new Date())
    ); //生成入组时间
    tsamples.push({ id: index.addPreZero(id, 6), name, age, sex, stage, indate });
  }
  return tsamples;
}
