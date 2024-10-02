class bed {

    constructor(bedDatum){
        this.name = bedDatum.bedName
        this.x = bedDatum.bedPosX
        this.y = bedDatum.bedPosY
        this.width = bedDatum.bedWidth
        this.height = bedDatum.bedHeight
    }

}


function getBedData(){
    return [
        {bedName: "bed1", bedPosX: 25, bedPosY: 25, bedHeight: 50, bedWidth: 50},
        {bedName: "bed2", bedPosX: 250, bedPosY: 250, bedHeight: 30, bedWidth: 80}
    ]
}

