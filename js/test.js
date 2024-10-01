function runTests(){

    let results = []

    console.log ("test12")
    const testSong = new song ("testSong")
    
    console.log(getTestResult(testClassType))
    


    function testClassType (){ 
        //let result = "fail"
        //if(testSong instanceof song){result = "pass"}
        //return testClassType.name + ": " + result

        return testSong instanceof song
    }
    
    function testTitle (){
        let result = "fail"
        if (testSong.title === "testSong"){result = "pass"}
        return testTitle.name + ": " + result
    }
    
    function testLengthMethod (){
        testSong.setLength(1, 23)
        let result = "fail"
        if (testSong.lengthInSeconds === 83){result = "pass"}
        return testLengthMethod.name + ": " + result
    }

    console.log(testClassType())
    console.log(testTitle())
    console.log(testLengthMethod())

}

function getTestResult(func){
    
    let result = "fail"

    if(func.call() === true){
        result = "pass"
    }

    return func.name + ": " + result
}

