const order = words => words.split(' ').sort((a,b) => 
a.charAt(a.search(/[0-9]/g)) - b.charAt(b.search(/[0-9]/g))
).join(' ');

function high(x){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
    const letterScores = alphabet.reduce((table, value, index) => {table.push({letter: value, score:index+1}); return table;},[]);
    
    const phrase = x.split(' ');
    const scores = [];
    
    for(let i in phrase){
    scores[i] = new WordPoints(phrase[i]);
    }
    const sortedScore = scores.sort((a,b) => {return b.wordScore - a.wordScore;});
    return sortedScore[0].word;
    
    function WordPoints(word){
    this.word = word;
    this.wordScore = word.split('').reduce((acum, valor) => {
        for(let letterI of letterScores){
            if(valor === letterI.letter) return acum + letterI.score;
        }
    },0)
    }
    }

console.log(high('man i need a taxi up to ubud'));