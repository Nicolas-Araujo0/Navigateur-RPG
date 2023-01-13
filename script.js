let enemyName;
let bossEnemyName;
let playerLife = 100;
let maxPlayerLife = playerLife;
let enemyLife = 90, enemyLifeUpgrade = enemyLife;
let maxEnemyLife = enemyLife;
let bossLife;
let bossMaxLife;
let playerDamage = 0;
let monsterDamage = 0;
let luckyStrike;
let swordAttack;
let punchAttack = 10;
let s = "";
let nbMiniPotion = 5;
let nbMaxiPotion = 3;
let nbBerserkPotion = 3;
let potionStock = "Potion stock : <br>"
let money = 0;
let monsterKilled = 0;
let bossKilled = 0;
let encounterBeforeBoss = 0;
let mageKillerStack = 0;
let drop
let meat = 0;

const buttonDisable = document.querySelectorAll("#combatUI button");
const miniPotion = 15;
const maxiPotion = 40;
const berserkPotion = 5;

/* ======================*/
/* = = = FONCTIONS = = = */
/* ======================*/
function inventory() {
    if (enemyLife <= 0) {
        let monsterDrop = ""
        drop = " "
        drop = drop + reward + "<br>"
        if (reward == "Small Gold pouch") {
            goldBag = 50
            monsterDrop = "<br>+" + goldBag + "🪙 from " + reward;
        }
        else if (reward == "Large Gold pouch") {
            goldBag = 300
            monsterDrop = "<br>+" + goldBag + "🪙 from " + reward;
        }
        else if (reward == "Gold pouch") {
            goldBag = 150
            monsterDrop = "<br>+" + goldBag + "🪙 from " + reward;
        } else if (reward == "Meat") {
            monsterDrop = "<br>A health increasing consumable"
            meat++
        } else {
            monsterDrop = "<br>" + reward + "<br>Yeahhh another garbage loot🤡"
        }
        document.getElementById("slot").innerHTML = potionStock + "Mini potions 🍼 : " + nbMiniPotion + " Healing for 15HP<br>Maxi potions 🥛 : " + nbMaxiPotion + " Healing for 40HP<br>Berserk potions ☕ : " + nbBerserkPotion + " Boosting attack by 5<br><br>Inventory :<br>Meat : " + meat + " (increase max HP by 10 on use)<br>🪙 :" + money + monsterDrop;
        if (reward != "Small Gold pouch" && reward != "Large Gold pouch" && reward != "Gold pouch") {
            goldBag = 0
        }
        money += goldBag;
        return reward[(Math.random() * 5 | 0)]
    } else {
        reward = loot()
        document.getElementById("slot").innerHTML = potionStock + "Mini potions 🍼 : " + nbMiniPotion + " Healing for 15HP<br>Maxi potions 🥛 : " + nbMaxiPotion + " Healing for 40HP<br>Berserk potions ☕ : " + nbBerserkPotion + " Boosting attack by 5<br><br>Inventory :<br>Meat : " + meat + "<br>🪙 :" + money + "<br>";
        reward = loot()
    }
    if (meat > 0) {
        buttonDisable[10].disabled = false;
    } if (meat <= 0) {
        buttonDisable[10].disabled = true;
    }
}
function potionRefill() {
    nbMiniPotion = 5;
    nbMaxiPotion = 3;
    nbBerserkPotion = 3;
    document.getElementById("slot").innerHTML = potionStock + "Mini potions 🍼 : " + nbMiniPotion + "<br>Maxi potions 🥛 : " + nbMaxiPotion + "<br>Berserk potions ☕ : " + nbBerserkPotion;
}
function randomEnconter() {
    enemyName = ["Big rat", "Magic Beast", "Oni", "Ent", "Hamtaro"]
    return enemyName[(Math.random() * 5 | 0)]
}

let chat = 0
function monsterAuPif() {
    document.querySelector("#monster").innerHTML = enemyName;
    if (enemyName == "Big rat") {
        document.querySelector("#monsterImg img").src = "rat.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
    } else if (enemyName == "Magic Beast") {
        if( chat > 0){
        document.querySelector("#monsterImg img").src = "the-cat.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
        chat--
        } else {
            document.querySelector("#monsterImg img").src = "doggo.gif"
            document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
            chat++
        }
    } else if (enemyName == "Oni") {
        document.querySelector("#monsterImg img").src = "oni.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(-1)";
    } else if (enemyName == "Ent") {
        document.querySelector("#monsterImg img").src = "walkingtree.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
    } else {
        document.querySelector("#monsterImg img").src = "kobold.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
    }
    buttonDisable[8].disabled = true;
    buttonDisable[10].disabled = true;
}
function bossEncouter() {
    bossEnemyName = ["Dark Elf", "Medusa", "draugr", "Necromancer", "Fallen knight"]
    bossEnemyName[(Math.random() * 5 | 0)]
    return bossEnemyName[(Math.random() * 5 | 0)]
}
function bossRandomizer() {
    document.querySelector("#monster").innerHTML = bossEnemyName;
    if (bossEnemyName == "Dark Elf") {
        document.querySelector("#monsterImg img").src = "Darkelf.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(-1)";
        enemyLife = 500
        maxEnemyLife = enemyLife
    } else if (bossEnemyName == "Medusa") {
        document.querySelector("#monsterImg img").src = "medusa.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
        enemyLife = 550
        maxEnemyLife = enemyLife
    } else if (bossEnemyName == "draugr") {
        document.querySelector("#monsterImg img").src = "draugr.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
        enemyLife = 500
        maxEnemyLife = enemyLife
    } else if (bossEnemyName == "Necromancer") {
        document.querySelector("#monsterImg img").src = "necro.jpg"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
        enemyLife = 400
        maxEnemyLife = enemyLife
    } else {
        document.querySelector("#monsterImg img").src = "knight.gif"
        document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
        enemyLife = 350
        maxEnemyLife = enemyLife
    }
    buttonDisable[8].disabled = true;
    buttonDisable[10].disabled = true;
}
function loot() {
    let reward = ["Small Gold pouch", "Gold pouch", "random rag", "Large Gold pouch", "Meat","random rag","random rag","random rag","random rag","random rag"];
    return reward[(Math.random() * 10 | 0)]
}


function updateLife() {
    document.querySelector("#enemy .healthbar span").innerHTML = enemyLife + "/" + maxEnemyLife;
    document.querySelector("#enemy .healthbar span").style.width = enemyLife / maxEnemyLife * 100 + "%";
    if (enemyLife / maxEnemyLife * 100 > 75) {
        document.querySelector("#enemy .healthbar span").style.backgroundColor = "green";
    } else if (enemyLife / maxEnemyLife * 100 > 50) {
        document.querySelector("#enemy .healthbar span").style.backgroundColor = "gold";
    } else if (enemyLife / maxEnemyLife * 100 > 25) {
        document.querySelector("#enemy .healthbar span").style.backgroundColor = "orange";
    } else {
        document.querySelector("#enemy .healthbar span").style.backgroundColor = "red";
    }
    document.querySelector("#player .healthbar span").innerHTML = playerLife + "/" + maxPlayerLife;
    document.querySelector("#player .healthbar span").style.width = playerLife / maxPlayerLife * 100 + "%";
    if (playerLife / maxPlayerLife * 100 > 66) {
        document.querySelector("#player .healthbar span").style.backgroundColor = "green";
    } else if (playerLife / maxPlayerLife * 100 > 33) {
        document.querySelector("#player .healthbar span").style.backgroundColor = "orange";
    } else {
        document.querySelector("#player .healthbar span").style.backgroundColor = "red";
    }
}
function buttonTurnOff() {
    for (let i = 0; i < buttonDisable.length; i++) {
        buttonDisable[i].disabled = true;
    }
    buttonDisable[9].disabled = false
}

function combatResult() {
    if (playerLife <= 0) {
        setTimeout(function () {
            for (let i = 0; i < buttonDisable.length; i++) {
                buttonDisable[i].disabled = true;
            }
            buttonDisable[9].disabled = false
        }, 999)
        s = "YOU DIED! " + "Defeated by : " + enemyName + " 10% of your experience as been removed <br>" + s;
        document.getElementById("spam").innerHTML = s
        alert("Defeat")
    }
    else if (enemyLife <= 0) {
        let moneyDrop = Math.floor(Math.random() * (80 - 20) + 20)
        money = money + moneyDrop;
        s = "You dropped " + reward + "<br>It's your victory against " + enemyName + " !<br>" + "You gained " + moneyDrop + " 🪙 <br>...<br>" + s;
        document.getElementById("spam").innerHTML = s
        alert("Victory");
        buttonTurnOff()
        buttonDisable[8].disabled = false;
    } else {
        s = "... <br>" + s;
        document.getElementById("spam").innerHTML = s
    } if (buttonDisableSkill[0].disabled = true) {
        swapSkill();
    } else if (buttonDisableSkill[1].disabled = true) {
        enemySkill();
    } else {
        document.querySelector("#Skill p").innerHTML = " "
    }
    inventory();
}
function restoration() {
    randomEnconter();
    enemyName = randomEnconter()
    monsterAuPif();
    playerLife = 100;
    maxPlayerLife = playerLife;
    enemyLife = 90;
    enemyLifeUpgrade = enemyLife;
    maxEnemyLife = enemyLife;
    playerDamage = 0;
    monsterDamage = 0;
    mageKillerStack = 0;
    money = 0;
    monsterKilled = 0;
    bossKilled = 0;
    encounterBeforeBoss = 0
    potionRefill()
    updateLife();
    inventory()
    s = ""
    document.getElementById("spam").innerHTML = s
    document.querySelector("#Skill p").innerHTML = " "
    buttonDisableSkill[0].disabled = false
    buttonDisableSkill[1].disabled = false
    for (let i = 0; i < buttonDisable.length; i++) {
        buttonDisable[i].disabled = false;
    }
    buttonDisable[8].disabled = true;
    buttonDisable[10].disabled = true;
}

function swapEnemy() {
    if (enemyLife == 0) {
        if (encounterBeforeBoss < 4) {
            randomEnconter();
            enemyName = randomEnconter()
            monsterAuPif();
            enemyLifeUpgrade += 20
            enemyLife = enemyLifeUpgrade;
            maxEnemyLife = enemyLifeUpgrade;
            monsterKilled++;
            encounterBeforeBoss++;
        } else if (bossKilled == 2){
            document.querySelector("#monster").innerHTML = "Error.exe";
            document.querySelector("#monsterImg img").src = "error.gif"
            document.querySelector("#monsterImg img").style.transform = "scaleX(1)";
            enemyLife = 99999
            maxEnemyLife = enemyLife
        } else {
            bossEncouter()
            bossEnemyName = bossEncouter()
            bossRandomizer();
            bossKilled++;
            encounterBeforeBoss = 0;
        }
        maxPlayerLife += 5;
        playerLife = maxPlayerLife;
        playerDamage = 0;
        monsterDamage = monsterDamage - (mageKillerStack * 8);
        mageKillerStack = 0;
        monsterDamage += 2;
        nbMiniPotion += 2;
        nbMaxiPotion += 1;
        s = " "
        document.getElementById("spam").innerHTML = s
        for (let i = 0; i < buttonDisable.length; i++) {
            buttonDisable[i].disabled = false;
        }
        buttonDisable[8].disabled = true;
        updateLife();
        inventory()
    }
}


function dmgDealPlayer(a) {
    document.querySelector("#player div:last-child").classList.add("playerAttack");
    document.getElementById("monsterImg").classList.add("hitReceived");
    let healthLost = document.querySelector("#enemy .healthbar span:last-child");
    healthLost.classList.add("dmgDeal");
    document.querySelector(".dmgDeal").innerHTML = "-" + (a + playerDamage);
    setTimeout(function () {
        healthLost.innerHTML = "";
        healthLost.classList.remove("dmgDeal");
        document.querySelector("#player div:last-child").classList.remove("playerAttack");
        document.getElementById("monsterImg").classList.remove("hitReceived");
    }, 1000);
}
function dmgDealMonster(a) {
    document.getElementById("monsterImg").classList.add("monsterAttack");
    document.querySelector("#player div:last-child").classList.add("hitReceived");
    let healthLost = document.querySelector("#player .healthbar span:last-child");
    healthLost.classList.add("dmgDeal");
    document.querySelector(".dmgDeal").innerHTML = "-" + a;
    setTimeout(function () {
        healthLost.innerHTML = "";
        healthLost.classList.remove("dmgDeal");
        document.getElementById("monsterImg").classList.remove("monsterAttack");
        document.querySelector("#player div:last-child").classList.remove("hitReceived");
    }, 1000);
}
function healingMonster(a) {
    let healthRegen = document.querySelector("#enemy .healthbar span:last-child");
    healthRegen.classList.add("heal");
    document.querySelector(".heal").innerHTML = "+" + a;
    setTimeout(function () {
        healthRegen.innerHTML = "";
        healthRegen.classList.remove("heal");
    }, 1000);
}
function healingPlayer(a) {
    let healthRegen = document.querySelector("#player .healthbar span:last-child");
    healthRegen.classList.add("heal");
    document.querySelector(".heal").innerHTML = "+" + a;
    setTimeout(function () {
        healthRegen.innerHTML = "";
        healthRegen.classList.remove("heal");
    }, 1000);
}


function btnDelay() {
    if (playerLife <= 0 || enemyLife <= 0) {
        buttonTurnOff()
        buttonDisable[8].disabled = false
    } else {
        for (let i = 0; i < buttonDisable.length; i++) {
            buttonDisable[i].disabled = true;
        }
        setTimeout(function () {
            for (let i = 0; i < buttonDisable.length; i++) {
                buttonDisable[i].disabled = false;
            }
            buttonDisable[8].disabled = true;
            buttonDisable[10].disabled = true;
        }, 2000)
    }
}

function enemyLifeSteal() {
    let a = 10 + monsterDamage;
    let drainEnemy = a
    let baseHealth = enemyLife
    enemyLife += drainEnemy
    playerLife -= a;
    if (enemyLife <= 0) {
        enemyLife = 0
    } if (playerLife <= 0) {
        playerLife = 0
    } if (enemyLife > maxEnemyLife) {
        enemyLife = maxEnemyLife
    }
    let heal = enemyLife - baseHealth;
    updateLife();
    s = "The enemy drain your lifeforce dealing " + a + " Damage and healing himself for " + heal + "HP.  Enemy life now at " + enemyLife + " HP and player life at " + playerLife + " HP<br>" + s;
    document.getElementById("spam").innerHTML = s
    dmgDealMonster(a)
    healingMonster(heal)
    combatResult()
}
function enemyBiteAttack() {
    let a = 20 + monsterDamage
    playerLife -= a;
    if (playerLife <= 0) {
        playerLife = 0
    }
    updateLife();
    s = "Enemy bite your leg, dealing " + a + " damage!<br>Player's life is now at " + playerLife + " HP<br>" + s;
    document.getElementById("spam").innerHTML = s
    dmgDealMonster(a)
    combatResult()
}
function enemyAutoAttack() {
    let a = 10 + monsterDamage
    playerLife -= a;
    if (playerLife <= 0) {
        playerLife = 0
    }
    updateLife();
    s = "Enemy attacked, dealing " + a + " damage! <br>Player's life is now at " + playerLife + " HP<br>" + s;
    document.getElementById("spam").innerHTML = s
    dmgDealMonster(a)
    combatResult()
}
function enemyMageKiller() {
    if (enemyLife <= 0) {
        s = " " + s
        document.getElementById("spam").innerHTML = s
    } else {
        monsterDamage += 8
        mageKillerStack++
        s = enemyName + " got enraged by the spell you used, <br>he will deal an additionnal " + (mageKillerStack * 8) + " damage per attack <br>... <br>" + s;
    }
    combatResult();
}
function enemyRandomAction() {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
    } else {
        setTimeout(function () {
            let count = Math.floor(Math.random() * (5 - 0) + 0);
            if (count < 2) {
                enemyAutoAttack();
            } else if (count < 4) {
                enemyBiteAttack();
            } else {
                enemyLifeSteal();
            }
        }, 1000);
    }
}


function attackWithHands() {
    if (playerLife <= 0 || enemyLife <= 0) {
        buttonTurnOff()
    } else {
        enemyLife -= (punchAttack + playerDamage);
        if (enemyLife <= 0) {
            enemyLife = 0
        }
        updateLife()
        s = " Falcon PUNNCCHHHHH! -" + (punchAttack + playerDamage) + " HP Enemy life is now at " + enemyLife + " HP <br>" + s;
        document.getElementById("spam").innerHTML = s
        dmgDealPlayer(punchAttack)
        btnDelay();
        combatResult();
        enemyRandomAction();
    }
}
function attackWithSword() {
    if (playerLife <= 0 || enemyLife <= 0) {
        buttonTurnOff()
    } else {
        let x = Math.floor(Math.random() * (35 - 25 + 1) + 25);
        swordAttack = x;
        enemyLife -= (swordAttack + playerDamage);
        if (enemyLife <= 0) {
            enemyLife = 0
        }
        s = "(Effect spéciaux d'épée) Swing! -" + (swordAttack + playerDamage) + " HP Enemy life is now at " + enemyLife + " HP<br>" + s;
        document.getElementById("spam").innerHTML = s;
        updateLife();
        dmgDealPlayer(swordAttack + playerDamage);
        btnDelay();
        combatResult();
        enemyRandomAction();
    }
}
function strengthBuff() {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
        buttonTurnOff()
    } else {
        playerDamage += 5
        s = "You feel a wave of heat and a surge of strength. <br> Your attack will deal 5 additionnal damage <br>" + s
        document.getElementById("spam").innerHTML = s
        btnDelay();
        combatResult();
        enemyRandomAction();
    }
}
function attackLuckyStrike() {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
        buttonTurnOff()
    } else {
        let x = Math.floor(Math.random() * (10 - 1 + 1) + 1)

        if (x >= 9) {
            luckyStrike = 100;
            enemyLife -= luckyStrike;
            if (enemyLife <= 0) {
                enemyLife = 0
            }
            dmgDealPlayer(luckyStrike)
            updateLife()
            s = "YOU GOT LUCKY! AND HIT A CRITICAL POINT! -" + (luckyStrike + playerDamage) + " HP. Enemy life is now at " + enemyLife + " HP<br>" + s;
        } else {
            luckyStrike = 1;
            let counterMonster = 20;
            playerLife -= counterMonster;
            enemyLife -= luckyStrike;
            if (enemyLife <= 0) {
                enemyLife = 0
            }
            if (playerLife <= 0) {
                playerLife = 0
            }
            dmgDealPlayer(luckyStrike)
            dmgDealMonster(counterMonster)
            updateLife()
            s = "YOU MISSED AND SCRATCHED THE ENEMY Dealing " + (luckyStrike + playerDamage) + " damage. Enemy life is now at " + enemyLife + " HP, but you took a counter-attack in the process taking -" + counterMonster + "damage<br>" + s;
        }
        document.getElementById("spam").innerHTML = s
        btnDelay();
        combatResult();
        enemyRandomAction();
    }
}

function fireball() {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
        buttonTurnOff()
    } else {
        let fireb = enemyLife / 2;
        enemyLife -= fireb
        if (enemyLife <= 0) {
            enemyLife = 0
        }
        updateLife();
        s = "By the flame of hell burn! FIREBALL -" + enemyLife + "HP Enemy life is now at " + enemyLife + " HP<br>" + s
        document.getElementById("spam").innerHTML = s
        dmgDealPlayer(fireb)
        btnDelay();
        combatResult();
        enemyMageKiller();
        enemyRandomAction();
    }
}
function drainLife() {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
        buttonTurnOff()
    } else {
        let lifedrain = 15;
        enemyLife -= lifedrain
        let baseHealth = playerLife
        playerLife += lifedrain;
        if (enemyLife <= 0) {
            enemyLife = 0
        }
        if (playerLife >= maxPlayerLife) {
            playerLife = maxPlayerLife;
        }
        let heal = playerLife - baseHealth;
        updateLife();
        s = "You drain your enemy lifeforce dealing " + lifedrain + " Damage and healing yourself for " + heal + " HP.  Enemy life now at " + enemyLife + " HP and player life at " + playerLife + " HP<br>" + s;
        document.getElementById("spam").innerHTML = s
        dmgDealPlayer(lifedrain)
        healingPlayer(heal)
        btnDelay();
        enemyMageKiller();
        enemyRandomAction();
    }
}
function takePotion(p) {
    if (playerLife <= 0 || enemyLife <= 0) {
        s = "Battle end : <br>" + s
        document.getElementById("spam").innerHTML = s
        buttonTurnOff()
    } else {
        let potion = ["mini-Potion", "maxi-Potion", "Berserk-potion"]
        if (p == 0) {
            if (nbMiniPotion > 0) {
                let baseHealth = playerLife
                playerLife += miniPotion
                if (playerLife >= maxPlayerLife) {
                    playerLife = maxPlayerLife
                }
                let heal = playerLife - baseHealth;
                s = "Glup, drinking " + potion[p] + "! <br>Player HP got restored by " + heal + ", now at " + playerLife + " HP<br>" + s
                document.getElementById("spam").innerHTML = s
                nbMiniPotion -= 1;
                healingPlayer(heal)
                updateLife();
            } else {
                s = "You don't have any Mini potions left! " + s;
            }
        } else if (p == 1) {
            if (nbMaxiPotion > 0) {
                let baseHealth = playerLife;
                playerLife += maxiPotion;
                if (playerLife > maxPlayerLife) {
                    playerLife = maxPlayerLife
                }
                let heal = playerLife - baseHealth;
                s = "Glup, drinking " + potion[p] + "! <br>Player HP got restored by " + heal + ", now at " + playerLife + " HP<br>" + s;
                document.getElementById("spam").innerHTML = s
                updateLife();
                healingPlayer(heal)
                nbMaxiPotion -= 1;
            } else {
                s = "You don't have any Maxi potion left!" + s
            }
        } else if (p == 2) {
            if (nbBerserkPotion > 0) {
                playerDamage += 5;
                s = "Glup, drinking " + potion[p] + "! \nPlayer attacks deal 5 more damage<br>" + s;
                document.getElementById("spam").innerHTML = s
                nbBerserkPotion -= 1;
            } else {
                s = "You don't have any Berserk potion left!<br>" + s
            }
        } else {
            s = "You don't have this type of potion !<br>" + s
            document.getElementById("spam").innerHTML = s
        }
        btnDelay();
        inventory();
        combatResult();
    }
}

function eatingMeat() {
    if (meat > 0) {
        maxPlayerLife += 10
        playerLife += 10
        meat--
        s = "Maximum life has been increased by 10 by consuming monster meat<br>" + s
        document.getElementById("spam").innerHTML = s
    } if (meat <= 0) {
        buttonDisable[10].disabled = true;
    }
    inventory();
    updateLife()
}

function comboAttack(nbHits) {
    s = "COOMMMBOOOO ATTACK X" + nbHits + "<br>" + s;
    document.getElementById("spam").innerHTML = s
    for (let i = 0; nbHits != i; i++) {
        attackWithHands()
        updateLife()

    }
    dmgDealPlayer(attackWithHands * 3)
    btnDelay();
    combatResult();
    enemyRandomAction();
}
const buttonDisableSkill = document.querySelectorAll("#Skill button");

function enemySkill() {
    document.querySelector("#Skill h3").innerHTML = "Enemy Skill :"
    let skill1 = "Life Steal :<br>" + enemyName + " drain your lifeforce dealing " + (a = 10 + monsterDamage) + " Damage and healing himself for " + a + " HP.<br>";
    let skill2 = "<br>Auto Attack :<br>" + enemyName + " attack, dealing " + (a + monsterDamage) + " damage<br>";
    let skill3 = "<br>Bite :<br>" + enemyName + " bite you, dealing " + (20 + monsterDamage) + " damage<br>";
    let difficultyIncrease = "<br>For each enemies defeated, enemies have 20 additional HP and deal 2 additionnal damage<br><br>Monster killed : " + monsterKilled + "<br>Enemies life +" + (20 * monsterKilled) + "<br>Enemies damage +" + (2 * monsterKilled) + "<br><br>Boss killed : " + bossKilled;
    document.querySelector("#Skill p").innerHTML = skill1 + skill2 + skill3 + difficultyIncrease;
    buttonDisableSkill[0].disabled = false;
    buttonDisableSkill[1].disabled = true;
}
function swapSkill() {
    document.querySelector("#Skill h3").innerHTML = "Player Skill :"
    let skill1 = "Sword Attack :<br>Gandalf hit " + enemyName + " with a sword dealing between " + (25 + playerDamage) + "-" + (35 + playerDamage) + " damage <br>";
    let skill2 = "<br>Fireball :<br>Gandalf cast a Fireball and launch it against " + enemyName + " dealing " + (enemyLife / 2) + " damage<br>";
    let skill3 = "<br>Drain Life :<br>Gandalf drain the enemy life dealing 15 damage and healing himself for 15 HP<br>"
    let skill4 = "<br>Strength buff :<br>Gandalf Enhance himself gaining 5 additional damage with attacks<br>Bonus damage with attack :" + playerDamage;
    document.querySelector("#Skill p").innerHTML = skill1 + skill2 + skill3 + skill4
    buttonDisableSkill[0].disabled = true;
    buttonDisableSkill[1].disabled = false;
}

function buySmallPotion(){

}
function buyLargepotion(){

}
function buyBerserkPotion(){

}
function talkWithMerchant(){
    
}
/* ======================*/
/* = = = PROGRAMME = = = */
/* ======================*/
enemyName = randomEnconter()
bossEnemyName = bossEncouter()
reward = loot();

updateLife();
monsterAuPif();
inventory();
