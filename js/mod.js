let modInfo = {
	name: "MITE(魔改版)树",
	id: "MITE(魔改)",
	author: "Jack the Ripper - Raiden",
	pointsName: "时间",
	modFiles: ["layers.js", "tree.js", "craft.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "∞咕",
	name: "一次上传永不更新",
}

let changelog = `<h1>看毛？</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	<h1>更新日志？</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	<h1>没有!<h1>`

let winText = `没想到做出工作台就结束了吧(主要还是作者MITE就玩了个开头,外加菜/懒)<br>
说是永不更新,说不定哪天我把MITE通了就来继续做了:)`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player[layer].unlocked && (hasUpgrade("工作台",11))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}