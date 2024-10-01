function runTests(){
    console.log ("test7")
    
    const testSong = new song ("testSong")

    function testClassType (){ 

        console.log(testClassType.name)
        console.log(testSong instanceof song)
        
        //let result = "failed"

        if(testSong instanceof song){console.log("passed")}
        //return testClassType.name & ": " & result
    }
    
    function testTitle (){
        let result = "failed"
        if (testSong.title === "testSong"){result = "passed"}
        return this.name & ": " & result
    }
    
    function testLengthMethod (){
        testSong.setLength(1,23)
        let result = "failed"
        if (testSong.lengthInSeconds === 83){result = "passed"}
        return this.name & ": " & result
    }
    

    testClassType()

    //console.log(testClassType())
    //console.log(testTitle())
    //console.log(testLengthMethod())

}

