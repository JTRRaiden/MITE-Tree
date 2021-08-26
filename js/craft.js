var craft = {
    制造:{
        木板:{
            配方(){return [
                "原木","无","无",
                "无","无","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"原木":["原木"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]}},
            获得(){return {"木板":["木板"/*对应层级*/,"points"/*资源*/,new Decimal(4)/*获得量*/]}}
        },
        燧石粒:{
            配方(){return [
                "沙砾","沙砾","无",
                "沙砾","无","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"沙砾":["沙砾"/*对应层级*/,"points"/*资源*/,new Decimal(3)/*消耗量*/]}},
            获得(){return {"燧石粒":["燧石粒"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*获得量*/]}}
        },
        纤维绳:{
            配方(){return [
                "草","草","无",
                "草","无","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"草":["草"/*对应层级*/,"points"/*资源*/,new Decimal(3)/*消耗量*/]}},
            获得(){return {"纤维绳":["纤维绳"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*获得量*/]}}
        },
        燧石:{
            配方(){return [
                "燧石粒","燧石粒","无",
                "燧石粒","燧石粒","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"燧石粒":["燧石粒"/*对应层级*/,"points"/*资源*/,new Decimal(4)/*消耗量*/]}},
            获得(){return {"燧石":["燧石"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*获得量*/]}}
        },
        燧石手斧:{
            配方(){return [
                "木棍","燧石","无",
                "木棍","纤维绳","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"燧石":["燧石"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]},
                          {"木棍":["木棍"/*对应层级*/,"points"/*资源*/,new Decimal(2)/*消耗量*/]},
                          {"纤维绳":["纤维绳"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]}},
            获得(){return {"燧石手斧":["燧石手斧"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*获得量*/]}}
        },
        合成台:{
            配方(){return [
                "燧石","纤维绳","无",
                "木棍","原木","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"燧石":["燧石"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]},
                          {"木棍":["木棍"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]},
                          {"纤维绳":["纤维绳"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]},
                          {"原木":["原木"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*消耗量*/]}},
            获得(){return {"工作台":["工作台"/*对应层级*/,"points"/*资源*/,new Decimal(1)/*获得量*/]}}
        },
        木棍:{
            配方(){return [
                "木板","无","无",
                "木板","无","无",
                "无","无","无"
            ]},
            要求(){return true},
            价格(){return {"木板":["木板"/*对应层级*/,"points"/*资源*/,new Decimal(2)/*消耗量*/]}},
            获得(){return {"木棍":["木棍"/*对应层级*/,"points"/*资源*/,new Decimal(4)/*获得量*/]}}
        },
    }
}
var lastClicked = "无"
function changeItem(id){
    var a = player.maker.currentData
    a[id%10+Math.floor(id/10-1)*3-1]=lastClicked
    player.maker.currentData = a
}
function refreshClickables(){
    player.maker.currentData=[player.maker.currentData[0],player.maker.currentData[1],player.maker.currentData[2],player.maker.currentData[3],player.maker.currentData[4],player.maker.currentData[5],player.maker.currentData[6],player.maker.currentData[7],player.maker.currentData[8]]
}

addLayer("maker", {
    name: "maker", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "合成", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        currentData: {
            0:"无",1:"无",2:"无",
            3:"无",4:"无",5:"无",
            6:"无",7:"无",8:"无",
        },
        toCraft:null,
        
        plank:new Decimal(0)
    }},
    color: "#9F5000",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    //exponent: 0.125,
    /*gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        //if(hasUpgrade("p",11)) mult = mult.mul(upgradeEffect("p",11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },*/
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    branches:[],
    layerShown(){return true},
    /*effect(){
        var eff = player[this.layer].points.root(2)
        if(inChallenge("a",11) || hasChallenge("a",11)) eff = eff.pow(3)
        if(inChallenge("a",21)) eff = one
        eff = eff.pow(tokenEffect(13))
        return eff
    },
    effectDescription(){return `P -> P*${format(this.effect())}`},*/
    clickables: {
        11: {
            canClick(){
                refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        12: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },        
        13: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        14: {
            //canClick(){return player.maker.toCraft != null},
            display() {
                var tc = player.maker.toCraft
                if(tc == null) return ""
                var str = ""
                var a = craft["制造"][tc]["价格"]()
                for(i in a){
                    str+=",花费"
                    str+=i+"x"+format(a[i][2])
                }
                return str.substr(1)
            },
            unlocked(){return true},
        },
        15: {
            unlocked(){return true}
        },
        21: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        22: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },        
        23: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        24: {
            display(){return `
            ------------------>
            -------制造------->
            ------------------>
            `},
            unlocked(){return true}
        },
        25: {
            canClick(){return player.maker.toCraft != null},
            display() {
                var tc = player.maker.toCraft
                if(tc == null) return ""
                var str = ""
                var a = craft["制造"][tc]["获得"]()
                for(i in a){
                    str+=","
                    str+=i+"x"+format(a[i][2])
                }
                return str.substr(1)
            },
            unlocked(){return true},
            onClick(){
                var tc = player.maker.toCraft
                var a = craft["制造"][tc]["获得"]()
                var b = craft["制造"][tc]["价格"]()
                for(i in a) player[a[i][0]][a[i][1]] = player[a[i][0]][a[i][1]].add(a[i][2])
                for(i in b) player[b[i][0]][b[i][1]] = player[b[i][0]][b[i][1]].sub(b[i][2])
            }
        },
        31: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        32: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        33: {
            canClick(){
                //refreshClickables(this.id)
                return true
            },
            display() {return player.maker.currentData[this.id%10+Math.floor(this.id/10-1)*3-1]},
            onClick(){changeItem(this.id)},
        },
        34: {
            unlocked(){return true}
        },
        35: {
            unlocked(){return true}
        },
        41: {
            unlocked(){return true}
        },
        42: {
            unlocked(){return true}
        },
        43: {
            unlocked(){return true}
        },
        44: {
            unlocked(){return true}
        },
        45: {
            unlocked(){return true}
        },
        51: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item/*+"\nx"+format(this.amount())*/},
            onClick(){lastClicked = this.item},
            //edit below
            item : "无",
            amount(){return new Decimal(1e300)}
        },
        52: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "原木",
            amount(){return player.原木.points}
        }, 
        53: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "木板",
            amount(){return player.木板.points}
        },
        54: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "沙砾",
            amount(){return player.沙砾.points}
        },
        55: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "燧石粒",
            amount(){return player.燧石粒.points}
        },
        61: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "草",
            amount(){return player.草.points}
        },
        62: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "纤维绳",
            amount(){return player.纤维绳.points}
        },
        63: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "燧石",
            amount(){return player.燧石.points}
        },
        64: {
            canClick(){return this.amount().gte(1)},
            display() {return this.item+"\nx"+format(this.amount())},
            onClick(){lastClicked = this.item},
            //edit below
            item : "木棍",
            amount(){return player.木棍.points}
        },
        65: {
            unlocked(){return true}
        },
    },
    //upgrades: {
        /*
        11: {
            description: "点数并不是在做无用功.\n点数加成pp获取.",
            cost(){return new OmegaNum(4)},
            unlocked(){return true},
            effect(){
                var baseEff = ten.pow(player.points.mul(100)).pow(2).sub(1).mul(100000).add(1)
                if(hasUpgrade("p",24)) baseEff = baseEff.pow(upgradeEffect("p",24))
                baseEff = baseEff.mul(buyableEffect("p",11))
                baseEff = baseEff.mul(buyableEffect("p",12))
                //sc
                if(baseEff.gt(10)) baseEff = baseEff.log10().pow(1.5).mul(10)
                if(baseEff.gt(100)) baseEff = baseEff.pow(0.2).mul(1000**0.8)
                if(baseEff.gt(1000)) baseEff = baseEff.pow(0.35).mul(1000**0.65)
                if(baseEff.gt(1e4)) baseEff = baseEff.log10().pow(2).mul(1e4/16)
                //p22:sin to p11
                if(hasUpgrade("p",22)) baseEff = baseEff.mul(upgradeEffect("p",22))
                return baseEff
            },
            effectDisplay(){return `x${format(upgradeEffect("p",11),1)}`}
        },
        */
    //},
    /*buyables: {
        11: {
            cost(x) {
                var c = two.pow(x.pow(1.5)).root(2).sub(1)
                if(!hasUpgrade("p",31)) c = c.mul(ten.pow(x))
                return c
            },
            display() { return `增加增量点获取.(增量+)<br />+${format(buyableEffect(this.layer,this.id),2)}.(受点数加成)<br />费用:${format(this.cost(getBuyableAmount(this.layer, this.id)))}增量点<br>等级:${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            canAfford() { return player[this.layer].points.gte(this.cost().add(1))&&this.unlocked() },
            buy() {
                if(hasUpgrade("p",31)){this.buyMax();return}
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax(){
                var c = player.i.points.add(1).pow(2).logBase(2).root(1.5).sub(getBuyableAmount(this.layer, this.id)).add(1).min(upgradeEffect("p",31)).floor().max(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(c))
            },
            effect(){
                var level = getBuyableAmount(this.layer,this.id)
                level = level.mul(buyableEffect("i",12))
                var baseEff = player.points.mul(1e15).add(1).log10().pow(level.add(1).pow(0.5).sub(1)).sub(1).max(0)
                if(player.points.gt(1)) baseEff = baseEff.mul(player.points.log10().add(1).pow(2))
                baseEff = baseEff.pow(buyableEffect("i",13))
                if(hasMilestone("a",20)) baseEff = baseEff.pow(2)
                if((inChallenge("a",11) || hasChallenge("a",11)) && (!inChallenge("a",12) && !player.t.nerf.AC.eq(2) && !player.t.nerf.AC.eq(3))) baseEff = baseEff.pow(1.5)
                if(baseEff.gt(1e600)) baseEff = baseEff.cbrt().mul(1e400)
                if(baseEff.gt(1e1000)){
                    var sc = 5
                    baseEff = baseEff.root(sc).mul(1e1000**(1-1/sc))
                }
                baseEff = powsoftcap(baseEff,e("e3000"),e(3))
                baseEff = powsoftcap(baseEff,e("e400000"),e(5))
                baseEff = logsoftcap(baseEff,e("e2e6"),e(hasMilestone("a",28)? 0.175:0.5))
                //baseEff = logsoftcap(baseEff,e("e1e8"),e(0.1))

                if(hasMilestone("t",14)) baseEff = baseEff.pow(1.5)

                return baseEff
            },
            unlocked(){return true},
            abtick : 0,
            abdelay(){
                return upgradeEffect("p",32)
            }
        },
    },*/

    /*
    challenges: {
        11: {
            name: "AntiLooperrrr",
            challengeDescription: "因为挑战出了bug，devU13被禁用了。刷新后的第一帧时间计数x100。",
            canComplete(){return player.points.gte(1e10)},
            goalDescription(){return format(ExpantaNum(1e10))+"点数"},
            rewardDisplay(){return `你永远保留dev11的效果，同时“刷新后的第一帧时间计数x100。”被保留。`},
            unlocked(){return hasUpgrade("dev",15)}
        },
    },
    */

    //important!!!
    update(diff){
        var check = false
        for(i in craft["制造"]){
            if(craft["制造"][i]["配方"]().toString() == player[this.layer].currentData.toString()){
                player[this.layer].toCraft = i
                check = true
            }
        }
        if(!check) player[this.layer].toCraft = null
    },
    //doReset(layer){
    //    layerDataReset(this.layer,[])
    //},
    /*milestones: {
        0: {
            requirementDescription: "3ap",
            effectDescription: "解锁增量+.解锁新的p转升级.",
            done() { return player.a.points.gte(3) }
        },
    },*/
    /*
    getResetGain(){
        var gain = new ExpantaNum(1)
        gain = gain.mul(this.baseAmount().div(this.requires()).pow(this.exponent)).pow(this.gainExp()).mul(this.gainMult())
        if(gain.gte(10000)) gain = gain.sqrt().mul(100)
        if(gain.gte(1000000)) gain = gain.cbrt().mul(10000)
        return gain
    },
    prestigeButtonText(){
        return "+ "+formatWhole(this.getResetGain())+" "+this.resource
    },*/
    //hotkeys: [{key: "+", description: "+: 购买增量+", onPress(){if (layers.i.buyables[11].canAfford()) layers.i.buyables[11].buy()}},],

})