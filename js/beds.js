class bed {

    constructor(bedName){
        this.name = bedName
        this.x = 50
        this.y = 50
        this.width = 50
        this.height = 50
    }

}

function getBedData(){
    return [
        {bedName: "bed1", bedPosX: 25, bedPosY: 25, bedHeight: 50, bedWidth: 50},
        {bedName: "bed2", bedPosX: 250, bedPosY: 250, bedHeight: 30, bedWidth: 80}
    ]
}

