function sortObj(obj) {
    var arr = [];
    for (var key in obj) {
       	arr.push({
        	key: key,
          value: obj[key]
        });
    }
    arr.sort((a,b) => b.value - a.value);
    return arr;
  }
  
 
  function fallback(agent) {
    // const queryText = request.body.queryResult.queryText;
    const queryText = `
    新华社北京7月25日电（梅世雄、卢晓琳、周燕红）“要关爱退役军人，他们为保家卫国作出了贡献。”

2018年12月31日，中共中央总书记、国家主席、中央军委主席习近平在新年贺词中专门向退役军人表达关心问候。

一声问候，朴实无华，却穿透荧屏，瞬间传遍千山万水，让千万退役军人热血沸腾：总书记惦记着我们、牵挂着我们！

党的十八大以来，以习近平同志为核心的党中央高度重视退役军人工作，习近平总书记多次就退役军人工作作出重要指示，为做好退役军人工作提供了根本遵循。

念兹在兹，一枝一叶总关情——“我也是一名军转干部”

有一种身份片刻未曾相忘，有一种牵挂须臾未曾间断。

在接见第六次全国军转表彰大会暨2014年军转安置工作会议代表时，习近平总书记动情地说：“见到大家感到十分亲切，因为我也是一名军转干部。”

滚烫的话语，深沉的关爱，蕴含着习近平总书记对退役军人深厚的情感。

我国现有数千万退役军人，他们是建设中国特色社会主义的重要力量。早在革命战争年代，就有一批又一批军人到地方工作，为夺取中国革命胜利建功立业。新中国成立后，大批退役军人到地方工作，为加强政权建设、恢复和发展国民经济作出了重要贡献。在新的历史时期，广大退役军人顾全大局、无私奉献，成为改革开放的时代弄潮儿，取得了骄人业绩。“军转干部是党和国家的宝贵财富，我们要倍加关心、倍加爱护。”习近平总书记强调。

老兵过得怎么样？工作安排如意不如意？各级党委和政府有没有嘘寒问暖？退役军人的工作和生活，习近平总书记牵挂于心。

2019年1月17日，习近平总书记在天津考察调研，走进和平区新兴街朝阳里社区退役军人服务管理站，详细询问社区在服务退役军人方面的具体做法，再次表达了对退役军人的关心关爱。总书记强调，各级党委和政府要高度重视，切实把广大退役军人合法权益维护好，把他们的工作和生活保障好。

2019年3月12日，在出席十三届全国人大二次会议解放军和武警部队代表团全体会议时，习近平总书记强调，中央和国家机关、地方各级党委和政府要支持国防和军队建设，做好退役军人安置、伤病残军人移交、随军家属就业、军人子女入学等工作。

党的十八大以来，广大退役军人感受到了实实在在的温暖：400万名退役军人得到妥善安置，抚恤补助标准连年提高，部分退役士兵社会保险得以接续，退役军人就业创业环境不断优化……

习近平总书记也对广大退役军人寄予了殷切希望。在接见军转干部代表时，总书记指出，广大军转干部要到党和人民最需要的地方去，积极适应改革开放时代大潮，牢记生命中有了当兵的历史，自觉弘扬人民军队光荣传统和优良作风，在人生的不同阶段、不同岗位上继续出色工作、活出精彩人生。

这一声声叮嘱，被广大退役军人转化为“退役不褪色，建功新时代”的磅礴力量。他们奋力拼搏、开拓进取，阔步行进在人生新的征途上。

湖北战友集团董事长杨建桥，自主择业后从送菜起步，逐渐把企业做大做强。2009年，他被评为全国模范军转干部。2017年，杨建桥作为20位受邀的军转干部之一，参加了建军90周年庆祝仪式。

“每每想起，心里总是充满自豪。”杨建桥说，“在部队，我是保卫祖国的栋梁；到地方，我要做民族经济的脊梁。”

更多的退役军人，在各条战线上书写着各自的精彩：中国航发沈阳黎明航空发动机有限责任公司的李志强，突破技术难关，成为一名为国争光的大国工匠；广州海关归类分中心的甘露，由军队转战海关，从外行变成内行，成长为一名国际海关税务专家；济南市公安局特警支队排爆中队的张保国，排爆20年，出生入死，和同事一道守护着一座城市的平安……

大江东去，岁月无声；脱下军装，奉献地方。他们有一个共同的名字叫退役军人。无论是当年穿着军装保家卫国，还是现在脱下军装为梦想打拼，他们都继续秉承军队的光荣传统，以出色的成绩回报这个伟大时代，回报领袖的深情厚望。

着眼改革，退役军人工作迈入新时代——“组建退役军人管理保障机构”

改革大潮浩浩荡荡，深度撞击着中国社会每一个领域。

党领导的退役军人工作，始终紧贴中国革命、建设、改革各个历史时期任务要求。随着时间推移、形势变化，退役军人工作逐渐呈现出职能交叉、政策不平衡、不统一等问题，也存在着政策滞后、制度“空白”等缺陷。一些体制性障碍、结构性矛盾、政策性问题成为阻碍退役军人工作发展的瓶颈。

怎样克服这些问题，开创新时代退役军人工作新局面？习近平总书记以马克思主义政治家的政治智慧、理论勇气、卓越才能和驾驭全局能力，一语击中要害：深化改革。

改革，成为退役军人工作寻求突破、也必须突破的金钥匙。

回望党的十八大以来，以习近平同志为核心的党中央擘画的深化退役军人工作改革的脉络十分清晰——

2015年，在中央军委改革工作会议上，习近平总书记指出：“在国家层面加强对退役军人管理保障工作的组织领导，健全服务保障体系和相关政策制度。”2016年，在中共中央政治局常委会会议审议深化国防和军队改革期间军队转业干部安置工作文件时，习近平总书记指出：“军转干部安置工作的出路在于深化改革。”

改革率先从组织机构开局起步。改革就要改组架构，整合力量，攥紧拳头，形成合力。

2017年10月18日，庄严的人民大会堂，党的十九大隆重召开，习近平总书记在报告中宣布：组建退役军人管理保障机构。2018年3月12日，在出席十三届全国人大一次会议解放军和武警部队代表团全体会议时，习近平总书记的话掷地有声：“组建退役军人管理保障机构对于更好为退役军人服务、让军人成为全社会尊崇的职业具有重要意义，要把好事办好办实。”2018年3月17日，十三届全国人大一次会议表决通过了关于国务院机构改革方案的决定，退役军人事务部正式批准组建。

1个月后，2018年4月16日，退役军人事务部挂牌成立。之后，退役军人事务系统改革梯次接续、前后衔接、压茬推进，截至2019年3月底，全国县级以上退役军人事务厅局全部挂牌运行。

与此同时，遵照习近平总书记重要指示精神，各级退役军人事务机构和服务中心（站）抓紧建立和完善，并根据“有机构、有编制、有人员、有经费、有保障”的要求，加快实现全覆盖。经过努力，一个横向到边、纵向到底的退役军人服务体系已经初步形成。

组建退役军人事务部，是习近平总书记亲自谋划设计、部署推动的大战略、大手笔；是以习近平同志为核心的党中央统筹国内国际两个大局、着眼经济建设和国防建设融合发展作出的重大决策，是促进国防和军队建设的重大战略举措。

伴随这一历史性步伐，退役军人工作迈入新的发展阶段。

擘画蓝图，着眼长远做好顶层设计——“要把退役军人事务全面抓起来”

退役军人工作谁来做？做什么？怎么做？

这些问题，涉及退役军人工作的目标和方向，是退役军人工作的根本性问题。

习近平总书记围绕做好退役军人工作作出的一系列重要论述，为推进新时代退役军人工作指明了正确方向，提供了根本遵循。

“军转安置工作是实现‘两个一百年’目标、实现中华民族伟大复兴的中国梦的重要力量。”——阐明了新时代退役军人工作的重要意义。

“组建退役军人管理保障机构，维护军人军属合法权益，让军人成为全社会尊崇的职业。”——指出了新时代退役军人工作的目标任务。

“要坚持为经济社会发展和军队建设服务的方针，贯彻妥善安置、合理使用、人尽其才、各得其所的原则，推进退役军官安置管理保障体制机制改革和政策制度创新，逐步完善服务保障体系和相关政策法规。”——确立了新时代退役军人工作的方针原则。

“在国家层面加强对退役军人管理保障工作的组织领导，健全服务保障体系和相关政策制度。”——提出了新时代退役军人工作的总体要求。

……

习近平总书记关于退役军人工作的这些重要论述，深刻回答了新时代退役军人工作的基本问题，立起了统领建设的魂、指导工作的纲。

在以习近平同志为核心的党中央领航掌舵下，退役军人工作系统扬帆起航、乘风破浪，勠力同心、砥砺前行，交出了一份凝结着汗水的成绩单：

——多项政策相继出台。在退役军人党员组织关系转接管理、退役士兵安置等领域，已出台了12个政策文件。下一步还将着手制定出台一系列政策文件。

——安置任务有效落实。2018年，完成了8.2万名军转干部安置任务，共接收安置40多万名退役士兵，其中4万多名符合政府安置条件的退役士兵安置任务基本完成，实现了123家中央企业接收安置退役士兵全覆盖。完成了9600多名军休干部和退休士官安置任务，超额完成30.4%。

——就业创业大力推动。会同军地12个部门联合印发《关于促进新时代退役军人就业创业工作的意见》。2018年，全国各地共组织专场招聘会1400多场次，提供就业岗位60多万个。

——服务保障重点落实。重点优抚对象抚恤和生活补助提标时间由10月1日提前到8月1日，平均提高幅度10%。同多家银行签署拥军优抚合作协议。为烈属、军属和退役军人家庭悬挂光荣牌3958万块。部署开展了退役军人和其他优抚对象信息采集工作，目前已采集信息3900多万人，全国统一、上下联动的退役军人信息数据库和管理平台正在建设中。

……

展望未来，退役军人工作将在习近平总书记重要论述精神的指引下，高扬风帆、破浪远航。

尊崇关爱，万千家庭感到荣光——“让军人成为全社会尊崇的职业”

2019年5月20日，山西一个偏远的山区。在外务工的王宁接到母亲的电话，说乡里的领导为他们家挂上了光荣牌。王宁立即放下手头的工作往家赶，回到家天已擦黑。当他在月光下看到金灿灿的光荣牌，顿时泣不成声。他在一封感谢信中说：“我深知，光荣牌不只是一块普通的牌子，更是党中央和习总书记给予退役军人的最高荣誉和莫大关怀！”

小小光荣牌，分量重千钧。在习近平总书记心中，老兵的位置很高，很特殊。

95岁的老党员张富清是原西北野战军一名战士，在解放战争的枪林弹雨中九死一生，先后荣立一等功三次、二等功一次，被西北野战军记“特等功”，两次获得“战斗英雄”荣誉称号。1955年转业时，他服从组织安排，到湖北省最偏远的来凤县工作，在贫困山区一干就是一辈子。60多年来，张富清尘封功名，直到2018年底，在退役军人信息采集中，他的事迹被发现，这段英雄往事才重现在人们面前。

了解张富清同志的先进事迹后，习近平总书记作出重要指示强调，老英雄张富清60多年深藏功名，一辈子坚守初心、不改本色，事迹感人。在部队，他保家卫国；到地方，他为民造福。他用自己的朴实纯粹、淡泊名利书写了精彩人生，是广大部队官兵和退役军人学习的榜样。要积极弘扬奉献精神，凝聚起万众一心奋斗新时代的强大力量。

2019年6月中旬，中宣部授予张富清同志“时代楷模”称号，在全社会掀起一股学习热潮。

对千千万万为国牺牲的英烈、浴血奋战的英雄，习近平总书记时刻牵挂于心。总书记强调：“一个有希望的民族不能没有英雄，一个有前途的国家不能没有先锋。”

2015年9月2日，中国人民抗日战争胜利70周年纪念章颁发仪式在人民大会堂隆重举行。习近平总书记向30名代表颁发纪念章并发表重要讲话。总书记深情的话语响彻会场：“我们要铭记一切为中华民族和中国人民作出贡献的英雄们，崇尚英雄，捍卫英雄，学习英雄，关爱英雄，勠力同心为实现‘两个一百年’奋斗目标、实现中华民族伟大复兴的中国梦而努力奋斗！”

在习近平总书记的关心推动之下，国家颁布了《中华人民共和国英雄烈士保护法》，确定了中国人民抗日战争胜利纪念日、烈士纪念日、南京大屠杀死难者国家公祭日，让中华民族在每一个值得纪念的日子共同铭记历史、缅怀英烈。

在甘肃酒泉卫星发射中心东风革命烈士陵园、山东临沂华东革命烈士陵园、井冈山革命烈士陵园、淮海战役烈士纪念塔、晋绥边区革命纪念馆等地，都留下了习近平总书记缅怀英烈的足迹。2013年3月，习近平总书记在坦桑尼亚祭扫援坦中国专家公墓缅怀先烈时题词：“烈士精神永励后人，中坦友谊世代传承。”2019年6月，习近平总书记在对朝鲜进行国事访问期间，专程参谒中朝友谊塔，缅怀中国人民志愿军烈士，并在题词簿上题词：“缅怀先烈，世代友好”。

习近平总书记高度重视拥军优属、拥政爱民工作。1991年1月，新中国成立以来的第一次全国双拥工作会议在福州召开，时任福州市委书记的习近平同志赋诗《军民情·七律》：“挽住云河洗天青，闽山闽水物华新。小梅正吐黄金蕊，老榕先掬碧玉心。君驭南风冬亦暖，我临东海情同深。难得举城作一庆，爱我人民爱我军。”

党的十八大以来，习近平总书记多次对双拥工作作出重要指示，指出：“坚如磐石的军政军民团结，永远是我们战胜一切艰难险阻、不断从胜利走向胜利的重要法宝。”

习近平总书记强调，新形势下，双拥工作只能加强、不能削弱。军地合力，军民同心，我们就一定能实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦，共同创造更加美好的未来。

这些谆谆话语，蕴含着习近平总书记的深情厚爱，在全社会掀起了尊崇英烈、关爱退役军人之风，千万家庭受到尊崇、感到荣光。在全国范围内掀起了“最美退役军人”评选热潮，退役军人先进典型的故事传遍大江南北，全社会对退役军人的认识和情感又深厚了一层……

征程万里，初心如磐。在以习近平同志为核心的党中央坚强领导下，退役军人工作的壮阔画卷正在徐徐展开……
    
    
    
    `;

    const queryObj = {};
    const queryArray = queryText.split('');
    
    for (let i = 0; i < queryArray.length; i++) {
      const key = queryArray[i];
      let preKey = i > 0 ? queryArray[i-1] : queryArray[i];

      if (!queryObj[key]) {
          queryObj[key] = {};
          queryObj[key][key] = 1;
      } else {
        if (!queryObj[key][preKey]) {
          queryObj[key][preKey] = 1;
        } else {
          queryObj[key][preKey] += 1;
        }
        // queryObj[key][key] += 1;
      }
    }

    let resultObj = {};
    for (let j = 0; j < queryArray.length; j++) {
      const j_key = queryArray[j];
      for (let i = 0; i < queryArray.length; i++) {
        const i_key = queryArray[i];
        if (queryObj[i_key] && queryObj[i_key][j_key]) {
          if (!resultObj[j_key]) {
            resultObj[j_key] = queryObj[i_key][j_key];
          } else {
            resultObj[j_key] += queryObj[i_key][j_key];
          }
        }
      }
    }
    
    const sort_array = sortObj(resultObj);
   	let result = '';
    sort_array.forEach((o) => {
    	result += o.key;
    });

    return result;

    // agent.add(JSON.stringify(request.body.queryResult.queryText));
    // agent.add(result);
  }

  console.log(fallback());