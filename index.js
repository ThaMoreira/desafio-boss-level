const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askHeroName() {
    return new Promise((resolve) => {
        rl.question('Digite o nome do herói: ', (name) => {
            resolve(name);
        })
    })
}

function askHeroLevel() {
    return new Promise((resolve) => {
        rl.question('Digite o level do herói: ', (level) => {
            resolve(level);
        })
    })
}

function getLevel(level) {
    if (level <=1000){
        return'Ferro';
    } else if (level >= 1001 && level <= 2000) {
        return'Bronze';
    } else if (level >= 2001 && level <= 5000) {
        return'Prata';
    } else if (level >= 5001 && level <= 7000) {
        return'Ouro';
    } else if (level >= 7001 && level <= 8000){
        return'Platina';
    } else if (level >= 8001 && level <= 9000) {
        return'Ascendente';
    } else if (level >= 9001 && level <= 10000) {
        return 'Imortal';
    } else {
        return 'Radiante';
    }
}

async function heroLevel(){
    const heroName = await askHeroName();
    const level = await askHeroLevel();
    const heroLevel = getLevel(level);
    console.log(`O herói de nome ${heroName} está no nível ${heroLevel}`);
    rl.close()
}


heroLevel();