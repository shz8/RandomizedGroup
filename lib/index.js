const utils = require("utility");
const uti = require("./uti");
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
      if (tp != 1) {//任何样本只能属于唯一一个分支。

      }
    }


    console.log(stratifieds);
    return groups;
  },
  /*动态随机
   *data.samples 样本
   *data.groupNum 分组数 × 只分两组：实验组 对照组
   *
   */
  dynamicRandom(data) {
    if (!data) return { msg: "参数不能为空！" };
    if (!(data.samples instanceof Array))
      return { msg: "参数samples必须为数组！" };
    if (!(data.dyncFieds instanceof Array))
      return { msg: "参数dyncFieds必须为数组！" };
    data.groupNum = 2; //动态暂只支持分2组
    //给前groupNum-1个组随机放入数据，余下的放入第groupNum个组
    let { samples, groupNum, dyncFieds } = data;

    let groups = [[], []];
    let groupsFields = [];
    let groupsTotal = [0, 0];
    let samplesLength = samples.length
    let groupsLength = groups.length

    if (samplesLength % groupNum != 0)
      return {
        msg: `样本数【${samplesLength}】必须为分组数【${groupNum}】的整数倍！`,
      };
    //拆分condition
    let rlt1 = this.processDyncFieds(dyncFieds)
    if (rlt1 && rlt1.msg)
      return rlt1

    //存储每个分组的分因素样本数
    for (let idx = 0; idx < groupsLength; idx++) {
      groupsFields.push(uti.clone(dyncFieds))
    }
    //midFields存储当前处理样本的因素值
    let midFields = uti.clone(dyncFieds)
    for (let midx = 0; midx < samplesLength; midx++) {
      for (let idx = 0; idx < midFields.length; idx++) {
        let tp = 0;
        for (let a of midFields[idx].calArr) {
          //a.total = a.total + a.check(samples[midx][midFields[idx].name]);
          a.total = a.check(samples[midx][midFields[idx].name]);
          tp = tp + a.total
        }
        if (tp != 1) {//任何样本只能属于动态因素中的唯一一个分支。

        }
      }
      //获取要存入的分组索引
      let gidx = this.dyncAddSample(groupsFields, midFields, midx, samplesLength, groupsTotal)
      if (gidx > -1 && gidx < groupsLength) {
        groups[gidx].push(samples[midx])
        groupsTotal[gidx]++
      }
    }
    //测试用
    for (let idx = 0; idx < groupsLength; idx++) {
      this.printDyncFields(groupsFields[idx], `dyncFieds_${idx}`)
    }
    this.printDyncFields(midFields, 'midFields')

    return groups;
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
  dyncAddSample(groupsFields, midFields, sampleIdx, samplesLength, groupsTotal) {
    let arrVal = []
    for (let idx = 0; idx < groupsFields.length; idx++) {
      arrVal.push(0)
    }
    for (let idx = 0; idx < midFields.length; idx++) {
      for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
        if (midFields[idx].calArr[sidx].total == 1) {
          arrVal[0] += (groupsFields[0][idx].calArr[sidx].total + 1 - groupsFields[1][idx].calArr[sidx].total) * (midFields[idx].weight || 1)
          arrVal[1] += (groupsFields[1][idx].calArr[sidx].total + 1 - groupsFields[0][idx].calArr[sidx].total) * (midFields[idx].weight || 1)
        }
      }
    }
    //console.log(arrVal)
    let gidx = Math.abs(arrVal[0]) < Math.abs(arrVal[1]) ? 0 : Math.abs(arrVal[0]) == Math.abs(arrVal[1]) ? utils.random(groupsFields.length) : 1
    if (sampleIdx < 2)
      gidx = sampleIdx
    if (sampleIdx == (samplesLength - 1))
      gidx = groupsTotal[0] < groupsTotal[1] ? 0 : 1

    for (let idx = 0; idx < midFields.length; idx++) {
      for (let sidx = 0; sidx < midFields[idx].calArr.length; sidx++) {
        groupsFields[gidx][idx].calArr[sidx].total += midFields[idx].calArr[sidx].total
      }
    }
    return gidx
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
