class phrase {

    constructor(text){
        this.words = getWords(text)
    }


    getWordByIndex(wordIndex){
        return this.words[wordIndex - 1]
    }

}

class word {
     
    constructor(text){
        this.text = text
     }

     setColour(colour){
        this.colour = colour
     }

     #render(){
        
     }

}

function getWords(text){

    const words = {}
    let wordsArray = text.split(" ");
    
        
    for (let i = 0; i < wordsArray.length; i++) {
        words.push(new word (wordsArray[i]))
    }

    return words
    
}


