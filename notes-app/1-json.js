// const fs = require('fs');

// const data = fs.readFileSync('1-json.json')
// const stringData = data.toString()
// const jsonData = JSON.parse(stringData)
// console.log(jsonData);
// jsonData.name = "bishoy"
// console.log(jsonData);

// fs.writeFileSync('1-json.json',JSON.stringify(jsonData))

const obj = {
    value: 42,
    gList: ["dasd","dfgdf","gfddg"],
    getValue() {
        console.log(this.value)
        this.gList.forEach(function(guest){
            console.log(guest , this.value);
        })
        
    }

};

obj.getValue()






