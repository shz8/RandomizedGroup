const utils = require("utility");
const uti = require("./uti");
var numbers = require('numbers').statistic;
module.exports = {
  /*简单随机
   *data.samples 样本
   *data.groupNum 分组数
   */
  simpleRandom(data) {
    if (!data) return { msg: "参数不能为空！" };
    if (!(data.samples instanceof Array))
      return { msg: "参数samples必须为数组！" };
    if (!data.groupNum) data.groupNum = 2;
    //给前groupNum-1个组随机放入数据，余下的放入第groupNum个组
    let { samples, groupNum } = data;
    //if (groupNum < 2) return { msg: `分组数【${groupNum}】必须大于1！` };
    if (samples.length % groupNum != 0)
      return {
        msg: `样本数【${samples.length}】必须为分组数【${groupNum}】的整数倍！`,
      };
    let groups = [],
      total = 0;
    while (samples.length > 0) {
      if (!groups[total % groupNum]) groups[total % groupNum] = [];
      const idx = utils.random(samples.length);
      groups[total % groupNum].push(samples[idx]);
      samples.splice(idx, 1);
      total++;
    }
    return groups;
  },
  /*区组随机
   *data.samples 样本
   *data.groupNum 分组数
   *data.blockSize 分区大小
   *data.blockField 用于分区的属性
   */
  blockRandom(data) {
    if (!data) return { msg: "参数不能为空！" };
    if (!(data.samples instanceof Array))
      return { msg: "参数samples必须为数组！" };
    if (!data.groupNum) data.groupNum = 2;
    //给前groupNum-1个组随机放入数据，余下的放入第groupNum个组
    let { samples, groupNum, blockSize, blockField } = data;
    if (groupNum < 2) return { msg: `分组数【${groupNum}】必须大于1！` };
    blockSize = blockSize || 0;
    if (blockSize < 1 || blockSize % groupNum != 0)
      return {
        msg: `分区大小【${blockSize}】必须为分组数【${groupNum}】的整数倍！`,
      };
    if (!blockField) return { msg: `blockField不能为空！` };
    if (!samples[0][blockField])
      return { msg: `样本不存在【${blockField}】属性！` };
    if (samples.length % groupNum != 0)
      return {
        msg: `样本数【${samples.length}】必须为分组数【${groupNum}】的整数倍！`,
      };
    samples = samples.sort((a, b) => {
      return a[blockField] > b[blockField] ? 1 : -1;
    });
    let groups = [];
    while (samples.length > 0) {
      let blockSamples = samples.splice(0, blockSize);
      let blockGroups = this.simpleRandom({ samples: blockSamples, groupNum });
      if (blockGroups && blockGroups.msg) return blockGroups;
      blockGroups = blockGroups.groups;
      for (let idx = 0; idx < groupNum && blockGroups; idx++) {
        if (!groups[idx]) groups[idx] = blockGroups[idx];
        else groups[idx].push.apply(groups[idx], blockGroups[idx]);
      }
    }
    return groups;
  },
  /*分层随机
   *data.samples 样本
   * data.groupNum 分组数 × 只分两组：实验组 对照组
   *data.stratifiedFields 分层属性{age:'(18[60',sex:'男|女'}  "("、")"代表开区间（小于、大于）， "["、"]"代表开区间（小于等于、大于等于）
     枚举元素间以"|"相隔
   */
  stratifiedRandom(data) {
    if (!data) return { msg: "参数不能为空！" };
    if (!(data.samples instanceof Array))
      return { msg: "参数samples必须为数组！" };
    if (!(data.stratifieds instanceof Array))
      return { msg: "参数stratifieds必须为数组！" };
    data.groupNum = 2;
    //给前groupNum-1个组随机放入数据，余下的放入第groupNum个组
    let { samples, groupNum, stratifieds } = data;
    if (samples.length % groupNum != 0)
      return {
        msg: `样本数【${samples.length}】必须为分组数【${groupNum}】的整数倍！`,
      };
    let groups = [];
    let samplesLength = samples.length
    let groupsLength = groups.length
    let rlt1 = this.processDyncFieds(stratifieds)
    if (rlt1 && rlt1.msg)
      return rlt1

    for (let idx = 0; idx < stratifieds.length; idx++) {
      let tp = 0;
      for (let a of stratifieds[idx].calArr) {
        console.log(a)
      }
      if (tp != 1) {//任何样本只能属于唯一水平。

      }
    }


    console.log(stratifieds);
    return groups;
  },
  dynamicRandom(data) {
    if (!data) return { msg: "参数不能为空！" };
    let isRangeMethod = data.type && data.type.toLowerCase().trim() == 'rangemethod'
    let groupNum = data.groupNum || 2;
    let groupProportion = data.groupProportion
    let isGroupProportion = 0
    let debug = data.debug
    if (!isRangeMethod && data.groupProportion && data.groupProportion instanceof Array) {
      isGroupProportion = 1
      let newGroupNum = 0;
      if(data.groupProportion.length > groupNum){
        return { msg: `数组groupProportion元素个数${data.groupProportion.length}不能大于groupNum=${groupNum}！` };
      }
      for (let i = 0; i < groupNum; i++) {
        let gp = 1
        if (i < groupProportion.length) {
          gp = groupProportion[i]
          if (!(typeof gp === 'number' && gp % 1 === 0 && gp > 0)) {
            return { msg: "数组groupProportion所有元素必须为>0的整数！" };
          }
        }
        newGroupNum += gp
      }
      data.groupNum = newGroupNum
    }
    let groups = this.dynamicRandomNoGroupProportion(data)
    if (!groups || groups.msg || groups.length < 1)
      return groups
    if (isGroupProportion) {
      let newGroups = []
      for (let i = 0; i < groupNum; i++) {
        let gp = i < groupProportion.length ? groupProportion[i] : 1
        newGroups[i] = []
        let idx = 0
        while (idx < gp && groups.length > 0) {
          newGroups[i].push.apply(newGroups[i], groups.splice(0, 1)[0]);
          idx++
        }
      }
      return newGroups;
    }
    return groups;
  },
  /*动态随机
   *data.samples 样本
   *data.groupNum 分组数 × 只分两组：实验组 对照组
   *
   */
  dynamicRandomNoGroupProportion(data) {
    if (!data) return { msg: "参数不能为空！" };
    if (!(data.samples instanceof Array))
      return { msg: "参数samples必须为数组！" };
    if (!(data.dyncFieds instanceof Array))
      return { msg: "参数dyncFieds必须为数组！" };
    data.groupNum = data.groupNum || 2;
    let isRangeMethod = data.type && data.type.toLowerCase().trim() == 'rangemethod'
    if (isRangeMethod)//极差法动态暂只支持分2组
      data.groupNum = 2;
    //给前groupNum-1个组随机放入数据，余下的放入第groupNum个组
    data.p = data.p || 1
    let debug = data.debug
    let { samples, groupNum, dyncFieds, p } = data;
    if (p > 1 || p < 1 / groupNum) {
      return { msg: `偏倚率p=${p}，必须<=1且>=1/${groupNum}=${1 / groupNum}！` };
    }
    else if (p < 1 / groupNum) {
      return { msg: `偏倚率p=${p}==1/${groupNum}=${1 / groupNum}，请直接使用简单随机！` };
    }

    let groups = [];
    for (let idx = 0; idx < groupNum; idx++) {
      groups.push([])
    }
    let groupsFields = [];
    let groupsTotal = [];
    let samplesLength = samples.length
    let groupsLength = groups.length

    /*if (samplesLength % groupNum != 0)
      return {
        msg: `样本数【${samplesLength}】必须为分组数【${groupNum}】的整数倍！`,
      };
    */
    //拆分condition
    let rlt1 = this.processDyncFieds(dyncFieds)
    if (rlt1 && rlt1.msg)
      return rlt1

    //存储每个分组的分因素样本数
    for (let idx = 0; idx < groupsLength; idx++) {
      groupsFields.push(uti.clone(dyncFieds))
    }
    //midFields存储当前处理样本的因素的水平值
    let midFields = uti.clone(dyncFieds)
    for (let midx = 0; midx < samplesLength; midx++) {
      for (let idx = 0; idx < midFields.length; idx++) {
        let tp = 0;
        for (let a of midFields[idx].calArr) {
          //a.total = a.total + a.check(samples[midx][midFields[idx].name]);
          a.total = a.check(samples[midx][midFields[idx].name]);
          tp = tp + a.total
        }
        if (tp != 1) {//任何样本只能属于因素中的唯一水平。

        }
      }
      //获取要存入的分组索引
      let gidx = isRangeMethod ? this.dyncAddSampleRangeMethod(groupsFields, midFields, midx, samplesLength, groupsTotal) : this.dyncAddSamplesStandardDev(groupsFields, midFields, midx, samplesLength, groupsTotal, p)
      if (gidx > -1 && gidx < groupsLength) {
        groups[gidx].push(samples[midx])
        groupsTotal[gidx] = (groupsTotal[gidx] || 0) + 1
      }
      console.log(groupsTotal)
    }
    //测试用
    /*for (let idx = 0; idx < groupsLength; idx++) {
      this.printDyncFields(groupsFields[idx], `dyncFieds_${idx}`)
    }
    */

    for (let idx = 0; idx < midFields.length; idx++) {
      for (let aidx = 0; aidx < midFields[idx].calArr.length; aidx++) {
        for (let idx1 = 0; idx1 < groupsLength; idx1++) {
          midFields[idx].calArr[aidx][`group_${idx1 + 1}_total`] = groupsFields[idx1][idx].calArr[aidx].total
        }
      }
    }
    //console.log(midFields)
    this.printDyncFields(midFields, 'midFields')
    //end 测试用

    return groups;
  },
  /*标准差（适用于分>=2组）
  */
  dyncAddSamplesStandardDev(groupsFields, midFields, sampleIdx, samplesLength, groupsTotal, p) {
    let gidx = -1
    if (sampleIdx == 0) gidx = utils.random(groupsFields.length)
    if (gidx < 0) {
      let arrVal = []
      for (let idx = 0; idx < midFields.length; idx++) {
        for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
          if (midFields[idx].calArr[sidx].total == 1) {
            let standardDevArr = groupsFields.map(c=>c[idx].calArr[sidx].total)
            for (let vidx = 0; vidx < groupsFields.length; vidx++) {
              standardDevArr[vidx]++; //当前因素水平+1，计算标准差
              arrVal[vidx] = arrVal[vidx]||{val:0,idx:vidx,total:groupsTotal[vidx]}
              arrVal[vidx].val += numbers.standardDev(standardDevArr) * (midFields[idx].weight || 1)
              standardDevArr[vidx]--;//还原当前因素水平-1
            }
          }
        }
      }

      arrVal.sort((b1,b2)=>{
        return b1.val == b2.val?(b1.total - b2.total):(b1.val-b2.val);
      })
      //console.log( arrVal)
      if (p == 1) {//偏倚率p=1
        //如果最小值有多个，则取样本数最小的组，如果有多组，则在多组中简单随机取一组
        let minVals = arrVal.filter(b=>{return b.val == arrVal[0].val && b.total == arrVal[0].total})
        gidx = minVals[utils.random(minVals.length)].idx        
        if(minVals.length > 1)
          console.log(gidx,minVals.length,arrVal)
      }
      else {
        gidx = arrVal[this.getGroupIdx(p, groupsFields.length)].idx
        console.log(`gidx=${gidx}`)
      }
    }
    for (let idx = 0; idx < midFields.length; idx++) {
      for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
        groupsFields[gidx][idx].calArr[sidx].total += midFields[idx].calArr[sidx].total
      }
    }
    return gidx
  },
  /*根据p（偏颇分配率）、分组数获取分配到的分组索引
   */
  getGroupIdx(p, groupNum) {
    let rdNum = utils.random(0, 100)
    let p1 = 100 * p
    if (rdNum > p1) {
      let idx = parseInt((rdNum - p1) * (groupNum - 1) / (100 - p1)) + 1
      if (idx >= groupNum)
        throw Error(`计算idx出错！idx=${idx},rdNum=${rdNum},p1=${p1}`)
      console.log(`idx=${idx}`)
      return idx
    }
    console.log(`idx=0`)
    return 0
  },
  /*极差法（适用于分2组） 
  */
  dyncAddSampleRangeMethod(groupsFields, midFields, sampleIdx, samplesLength, groupsTotal) {
    let arrVal = []
    for (let idx = 0; idx < groupsFields.length; idx++) {
      arrVal.push(0)
    }
    for (let idx = 0; idx < midFields.length; idx++) {
      for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
        if (midFields[idx].calArr[sidx].total == 1) {
          arrVal[0] += Math.abs((groupsFields[0][idx].calArr[sidx].total + 1 - groupsFields[1][idx].calArr[sidx].total) * (midFields[idx].weight || 1))
          arrVal[1] += Math.abs((groupsFields[1][idx].calArr[sidx].total + 1 - groupsFields[0][idx].calArr[sidx].total) * (midFields[idx].weight || 1))
        }
      }
    }
    console.log(arrVal)
    let gidx = arrVal[0] < arrVal[1] ? 0 : arrVal[0] == arrVal[1] ? (groupsTotal[0] < groupsTotal[1] ? 0 : groupsTotal[0] == groupsTotal[1] ? utils.random(groupsFields.length) : 1) : 1
    for (let idx = 0; idx < midFields.length; idx++) {
      for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
        groupsFields[gidx][idx].calArr[sidx].total += midFields[idx].calArr[sidx].total
      }
    }
    return gidx
  },
  /*
  拆分condition
  */
  processDyncFieds(dyncFieds) {
    for (let idx = 0; idx < dyncFieds.length; idx++) {
      dyncFieds[idx].level = idx;
      dyncFieds[idx].cons = dyncFieds[idx].condition.split("|");
      let calArr = [];
      for (let c of dyncFieds[idx].cons) {
        let max,
          min,
          includMax = 0,
          includMin = 0;
        let dfs = c && c.split(",");
        if (dfs.length > 2)
          return {
            msg: `dyncFieds配置【${c}】最多只能有一个,号！`,
          };
        if (dyncFieds[idx].type != "enum") {
          for (let df of dfs) {
            let i1 = df.indexOf("]");
            includMax = i1 > 0 ? 1 : 0; //=0，非法]只能在右侧
            if (i1 < 0) {
              i1 = df.indexOf(")");
              includMax = 0; //!=0，非法[只能在左侧
            }
            if (i1 > 0) {
              max = df.replace(")", "").replace("]", "");
              continue;
            }
            if (i1 < 0) {
              i1 = df.indexOf("[");
              includMin = i1 == 0 ? 1 : 0; //!=0，非法[只能在左侧
            }
            if (i1 < 0) {
              i1 = df.indexOf("(");
              includMin = 0; //!=0，非法[只能在左侧
            }
            if (i1 > -1) min = df.replace("(", "").replace("[", "");
            else {
              return {
                msg: `dyncFieds配置【${c}】中除enum类型外必须又[]()四个符号中的一个！`,
              };
            }
          }
          if (dyncFieds[idx].type == "int") {
            max = max && parseInt(max);
            min = min && parseInt(min);
          } else if (dyncFieds[idx].type == "float") {
            max = max && parseFloat(max);
            min = min && parseFloat(min);
          }
        } else if (dyncFieds[idx].type != "enum") {
        }
        calArr.push({
          con: c,
          check: function (d, cfg) {
            if (dyncFieds[idx].type == "enum") {
              return d == c ? 1 : 0;
            } else {
              if (
                (this.max == null || d < this.max) &&
                (this.min == null || d > this.min)
              )
                return 1;
              if (this.max != null && this.includMax == 1 && this.max == d)
                return 1;
              if (this.min != null && this.includMin == 1 && this.min == d)
                return 1;
              return 0;
            }
          },
          total: 0,
          tmp: 0,
          max,
          min,
          includMax,
          includMin,
        });
      }
      dyncFieds[idx].calArr = calArr;
    }
    return null
  },
  printDyncFields(dyncFieds, tagName) {
    console.log(tagName);
    for (let idx = 0; idx < dyncFieds.length; idx++) {
      for (let a of dyncFieds[idx].calArr) {
        console.log(a);
      }
    }
  },
  /*为分组后样本添加编号
   *groups 分组后样本
   *l G{分组号}_ 后样本编号长度
   */
  addNOforSamples(groups, l = 10) {
    if (groups && groups.length > 0) {
      let preIdx = 1;
      for (let group of groups) {
        let noIdx = 1;
        for (let sample of group) {
          if (sample) {
            sample.sampleNO = `G${uti.addPreZero(preIdx, 2)}_${uti.addPreZero(
              noIdx,
              l
            )}`;
            sample.groupNO = `G${uti.addPreZero(preIdx, 2)}`;
          }
          noIdx++;
        }
        preIdx++;
      }
    }
  },
  ...uti
};
