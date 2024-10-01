async function runTests(){

    const testSong = new song ("testSong")

    function testClassType (){return testSong instanceof song}
    function testTitle (){return testSong.title === "testSong"}
    
    function testLengthMethod (){
        testSong.setLength(1, 23)
        return testSong.lengthInSeconds === 83
    }

    await console.log(getTestResult(testClassType))
    await console.log(getTestResult(testTitle))
    await console.log(getTestResult(testLengthMethod))

}

async function getTestResult(func){
    
    let result = "fail"

    if(func.call() === true){
        result = "pass"
    }

    return func.name + ": " + result
}

