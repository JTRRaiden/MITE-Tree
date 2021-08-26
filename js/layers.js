addLayer("介绍", {
    name: "介绍", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "介绍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    color: "#000079",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
    tabFormat: {
        "介绍": {
            content: [
                "main-display",
                ["display-text", function(){return "前排感谢QwQ大佬的工作台"}],
                ["display-text", function(){return "此树非常短"}],
                ["display-text", function(){return "而且还很稀烂"}],
                ["display-text", function(){return "问就是作者又菜又懒"}],
                ["display-text", function(){return "合成有BUG,没有资源也能继续合成,所以全凭玩家自觉(我是真不会改)"}],
                ["display-text", function(){return "还有其他的小BUG,懒得管了,作者去打电动了"}],
            ]
        },
        "纤维绳":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>草|草|无<h1>"}],
                ["display-text", function(){return "<h1>草|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石粒":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>沙砾|沙砾|无<h1>"}],
                ["display-text", function(){return "<h1>沙砾|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>燧石粒|燧石粒|无<h1>"}],
                ["display-text", function(){return "<h1>燧石粒|燧石粒|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "木板":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>原木|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "木棍":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>木板|无|无<h1>"}],
                ["display-text", function(){return "<h1>木板|无|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "燧石手斧":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>木棍|燧石|无<h1>"}],
                ["display-text", function(){return "<h1>木棍|纤维绳|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
        "工作台":{
            content:[
                "main-display"
                ["display-text", function(){return "<br>"}],
                ["display-text", function(){return "<h1>燧石|纤维绳|无<h1>"}],
                ["display-text", function(){return "<h1>木棍|原木|无<h1>"}],
                ["display-text", function(){return "<h1>无|无|无<h1>"}],
            ]
        },
    }
})

addLayer("木棍", {
    name: "木棍", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "木棍", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#844200",
    requires: new Decimal(20), // Can be a function that takes requirement increases into account
    resource: "木棍", // Name of prestige currency
    baseResource: "时间", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true}, 
    upgrades:{
        11:{
            title: "要致富先撸树...叶?",
            description: "你能用手砍树？",
            cost: new Decimal(3),
        }
    }
})

addLayer("草", {
    name: "草", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "草", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5d8e51",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "草", // Name of prestige currency
    baseResource: "时间", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("木棍",11))}, 
    upgrades:{
        11:{
            title: "草?",
            description: "草!",
            cost: new Decimal(5),
        }
    }
})

addLayer("沙砾", {
    name: "沙砾", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "沙砾", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#72706E",
    requires: new Decimal(20), // Can be a function that takes requirement increases into account
    resource: "沙砾", // Name of prestige currency
    baseResource: "时间", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("草",11))}, 
    upgrades:{
        11:{
            title: "无聊的沙砾时间",
            description: "非酋的痛苦(玩过的都懂)",
            cost: new Decimal(3),
        }
    }
})

addLayer("原木", {
    name: "原木", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "原木", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#844200",
    requires: new Decimal(45), // Can be a function that takes requirement increases into account
    resource: "原木", // Name of prestige currency
    baseResource: "时间", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("燧石手斧",11))}, 
    upgrades:{
        11:{
            title: "要致富先撸树",
            description: "这回是真的了",
            cost: new Decimal(2),
        }
    }
})

addLayer("纤维绳", {
    name: "纤维绳", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "纤维绳", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5d8e51",
    resource: "纤维绳", // Name of prestige currency
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("草",11))}, 
    upgrades:{
        11:{
            title: "MITE哪来的植物纤维?",
            description: "问就是魔改",
            cost: new Decimal(3),
        }
    }
})

addLayer("燧石粒", {
    name: "燧石粒", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "燧石粒", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#282828",
    resource: "燧石粒", // Name of prestige currency
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("沙砾",11))}, 
    upgrades:{
        11:{
            title: "不应该是合成燧石吗?",
            description: "问就是魔改(原版也没这配方)",
            cost: new Decimal(3),
        }
    }
})

addLayer("燧石", {
    name: "燧石", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "燧石", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#282828",
    resource: "燧石", // Name of prestige currency
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("燧石粒",11))}, 
    upgrades:{
        11:{
            title: "终于",
            description: ":)",
            cost: new Decimal(1),
        }
    }
})

addLayer("木板", {
    name: "木板", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "木板", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#BC9862",
    resource: "木板", // Name of prestige currency
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("原木",11))}, 
    upgrades:{
        11:{
            title: "其实没啥用",
            description: "工作台用原木,木板也就做木棍用:)",
            cost: new Decimal(20),
        }
    }
})

addLayer("燧石手斧", {
    name: "燧石手斧", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "燧石手斧", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#282828",
    resource: "燧石手斧", // Name of prestige currency
    row: 5, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("燧石",11))}, 
    upgrades:{
        11:{
            title: "燧石手斧!",
            description: "有这个就能砍树了,虽然原本只能用三次,但善良的作者让他拥有无限耐久,(明明就是自己菜做不出来还那么多话)",
            cost: new Decimal(1),
        }
    }
})

addLayer("工作台", {
    name: "工作台", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "工作台", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#9F5000",
    resource: "工作台", // Name of prestige currency
    row: 6, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player[this.layer].unlocked && (hasUpgrade("木板",11))}, 
    upgrades:{
        11:{
            title: "工作台!",
            description: "你猜猜点完会发生什么<br>:)",
            cost: new Decimal(1),
        }
    }
})