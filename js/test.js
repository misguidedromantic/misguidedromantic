function runTests(){
    
    const testSong = new song ("testSong")

    function testClassType (){return testSong instanceof song}
    
    function testTitle (){return testSong.title === "testSong"}
    
    function testLengthMethod (){
        testSong.setLength(1,23)


        return (testSong.lengthInSeconds === 83) 
    }

    console.log("Correct class: " & testClassType())
    console.log("Correct title: " & testTitle())
    console.log("Correct seconds: " & testLengthMethod())

}

