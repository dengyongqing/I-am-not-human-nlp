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
    第1卦 乾卦，乾为天，乾上乾下
    《乾》：元，亨，利，贞。
    
    
    第2卦 坤卦，坤为地，坤上坤下
    《坤》：元亨。利牝马之贞。君子有攸往，先迷，後得主，利。西南得朋，东北丧朋。安贞吉。..
    
    
    第3卦 屯卦，水雷屯，坎上震下
    《屯》：元亨，利贞。勿用有攸往。利建侯。..
    
    
    第4卦 蒙卦，山水蒙，艮上坎下
    《蒙》：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。..
    
    
    第5卦 需卦，水天需，坎上乾下
    《需》：有孚，光亨。贞吉，利涉大川。 ..
    
    
    第6卦 讼卦，天水讼，乾上坎下
    《讼》：有孚窒惕，中吉，终凶。利见大人。不利涉大川。 ..
    
    
    第7卦 师卦，地水师，坤上坎下
    《师》：贞丈人吉，无咎。
    
    
    第8卦 比卦，水地比，坎上坤下
    《比》：吉。原筮，元，永贞，无咎。不宁方来，后夫凶。..
    
    
    第9卦 小畜卦，风天小畜，巽上乾下
    《小畜》：亨。密云不雨。自我西郊。..
    
    
    第10卦 履卦，天泽履，乾上兑下
    《履》：履虎尾，不咥人。亨。..
    
    
    第11卦 泰卦，地天泰，坤上乾下
    《泰》：小往大来，吉，亨。..
    
    
    第12卦 否卦，天地否，乾上坤下
    《否》：否之匪人，不利君子贞，大往小来。..
    
    
    第13卦 同人卦，天火同人，乾上离下
    《同人》：同人于野，亨。利涉大川。利君子贞。
    
    
    第14卦 大有卦，火天大有，离上乾下
    《大有》：元亨。..
    
    
    第15卦 谦卦，地山谦，坤上艮下
    《谦》：亨。君子有终。..
    
    
    第16卦 豫卦，雷地豫，震上坤下
    《豫》：利建侯行师。..
    
    
    第17卦 随卦，泽雷随，兑上震下
    《随》：元亨，利贞，无咎。..
    
    
    第18卦 蛊卦，山风蛊，艮上巽下
    《蛊》：元亨。利涉大川，先甲三日，后甲三日。..
    
    
    第19卦 临卦，地泽临，坤上兑下
    《临》：元亨，利贞。至于八月有凶。
    
    
    第20卦 观卦，风地观，巽上坤下
    《观》：盥而不荐。有孚颙若。..
    
    
    第21卦 噬嗑卦，火雷噬嗑，离上震下
    《噬嗑》：亨。利用狱。..
    
    
    第22卦 贲卦，山火贲，艮上离下
    《贲》：亨。小利有攸往。..
    
    
    第23卦 剥卦，山地剥，艮上坤下
    《剥》：不利有攸往。..
    
    
    第24卦 复卦，地雷复，坤上震下
    《复》：亨。出入无疾。朋来无咎。反复其道，七日来复，利有攸往。..
    
    
    第25卦 无妄卦，天雷无妄，乾上震下
    《无妄》：元亨，利贞。其匪正有眚，不利有攸往。..
    
    
    第26卦 大畜卦，山天大畜，艮上乾下
    《大畜》：利贞。不家食吉。利涉大川。..
    
    
    第27卦 颐卦，山雷颐，艮上震下
    《颐》：贞吉。观颐，自求口实。..
    
    
    第28卦 大过卦，泽风大过，兑上巽下
    《大过》：栋挠，利有攸往，亨。..
    
    
    第29卦 坎卦，坎为水，坎上坎下
    《习坎》：有孚维心，亨。行有尚。..
    
    
    第30卦 离卦，离为火，离上离下
    《离》：利贞。亨。畜牝牛吉。..

    
    `;

    const queryObj = {};
    const queryArray = queryText.split('');
    
    for (let i = 0; i < queryArray.length; i++) {
      const key = queryArray[i];
      let preKey = i > 0 ? queryArray[i-1] : queryArray[i];

      if (key != ' ' && preKey != ' ') {
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
      
    }
    const keys = Object.keys(queryObj);
    let resultObj = {};
    for (let j = 0; j < keys.length; j++) {
      const j_key = keys[j];
      for (let i = 0; i < keys.length; i++) {
        const i_key = keys[i];
        if (queryObj[i_key] && typeof queryObj[i_key][j_key] === 'number' && i_key != ' ' && j_key != ' ') {
          resultObj[j_key] += queryObj[i_key][j_key];
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
    // console.log(sort_array);
    return result;

    // agent.add(JSON.stringify(request.body.queryResult.queryText));
    // agent.add(result);
  }

  console.log(fallback());