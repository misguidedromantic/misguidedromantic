function runTests(){
    
    let results = []

    const testSong = new song ("testSong")

    function testClassType (){return testSong instanceof song}
    
    function testTitle (){return testSong.title = "testSong"}
    
    function testLengthMethod (){
        testSong.setLength(1,23)
        return (testSong.lengthInSeconds === 83) 
    }

    results.push(testClassType())
    results.push(testTitle())
    results.push(testLengthMethod())

    console.log(results)

}

