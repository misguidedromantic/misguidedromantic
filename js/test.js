function runTests(){
    console.log ("test9")
    
    const testSong = new song ("testSong")

    function testClassType (){ 
        let result = "failed"
        if(testSong instanceof song){result = "pass"}
        return testClassType.name + ": " + result
    }
    
    function testTitle (){
        let result = "failed"
        if (testSong.title === "testSong"){result = "pass"}
        return this.name + ": " + result
    }
    
    function testLengthMethod (){
        testSong.setLength(1,23)
        let result = "failed"
        if (testSong.lengthInSeconds === 83){result = "pass"}
        return this.name + ": " + result
    }
    

    //testClassType()

    console.log(testClassType())
    console.log(testTitle())
    console.log(testLengthMethod())

}

