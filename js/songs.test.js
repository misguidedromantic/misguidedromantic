function runTests(){

    const testSong = new song ("testSong")

    function testClassType (){return testSong instanceof song}
    function testTitle (){return testSong.title === "testSong"}
    function testLengthMethod (){
        testSong.setLength(1, 23)
        return testSong.lengthInSeconds === 83
    }

    console.log(getTestResult(testClassType))
    console.log(getTestResult(testTitle))
    console.log(getTestResult(testLengthMethod))

}

function getTestResult(func){
    
    let result = "fail"

    if(func.call() === true){
        result = "pass"
    }

    return func.name + ": " + result
}

