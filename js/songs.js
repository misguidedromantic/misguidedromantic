class album {
  
  constructor(songTitle){
    this.title = songTitle
  }

}

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

    console.log(min/60)
    console.log(sec)

    this.lengthInSeconds = min/60 + sec
  }
}

class bar {
  
  constructor(timeSignature){
    this.setupTimeSignature(timeSignature) 
  }
  
  setupTimeSignature(timeSignature){
    this.timeSignatureNumerator = timeSignature[0]
    this.timeSignatureDenominator = timeSignature[1]
  }
}
