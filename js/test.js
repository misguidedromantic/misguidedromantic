function runTests(){
    console.log ("test10")
    
    const testSong = new song ("testSong")

    function testClassType (){ 
        let result = "fail"
        if(testSong instanceof song){result = "pass"}
        return testClassType.name + ": " + result
    }
    
    function testTitle (){
        let result = "fail"
        if (testSong.title === "testSong"){result = "pass"}
        return testTitle.name + ": " + result
    }
    
    function testLengthMethod (){
        testSong.setLength(1,23)
        let result = "fail"
        if (testSong.lengthInSeconds === 83){result = "pass"}
        return testTitle.name + ": " + result
    }

    console.log(testClassType())
    console.log(testTitle())
    console.log(testLengthMethod())

}

