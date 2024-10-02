class song {
  
  constructor(title){
    this.title = title
    this.bars = []
  }
  
  addBarSet(number, timeSignature){
    
    for (let i = 0; i < number; i++) { 
      let thisBar = new bar (timeSignature)
      this.bars.push(thisBar)
    } 
    
  }
  
  setLength(min,sec){
    this.lengthInSeconds = (min * 60) + sec
  }
}

function getSongData(){
  return [
    new song("good after bad"),
    new song("it's not love"),
    new song("toiling avoiding")
  ]
}

//function setupGoodAfterBad (){
  //let thisSong = new song ("Good After Bad")
  //thisSong.setLength(5,2)
  //thisSong.addBarSet(155, "44")
  //return thisSong
//}  

class bar {
  
  constructor(timeSignature){
    this.setupTimeSignature(timeSignature) 
  }
  
  setupTimeSignature(timeSignature){
    this.timeSignatureNumerator = timeSignature[0]
    this.timeSignatureDenominator = timeSignature[1]
  }
}
