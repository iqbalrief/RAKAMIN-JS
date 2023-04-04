class Perhitungan {
    constructor(data) {
        this.data = data
    }
    hitungTotalAge(){
        this.totalAge = 0
        for (let index = 0; index < data.length; index++) {
           this.totalAge += Number(data[index].age)  
        }
        console.log(this.totalAge)  
    } 

    hitungTotalMoney(){
        this.totalMoney = 0
        for (let index = 0; index < data.length; index++) {
           this.totalMoney += Number(data[index].money)  
        }     
        console.log(this.totalMoney)  
    }
    asyncHitungTotalAGe = (data) => {
        return new Promise((resolve, reject) => {
            this.totalAge = 0
            for (let index = 0; index < data.length; index++) {
                this.totalAge += Number(data[index].age)  
                
            }
            resolve(this.totalAge)
        })
    } 

    asyncHitungTotalMoney = (data) => {
        return new Promise((resolve, reject) => {
            this.totalMoney = 0
            for (let index = 0; index < data.length; index++) {
                this.totalMoney += Number(data[index].money)  
                
            }
            resolve(this.totalMoney)
        })
    } 
    hitungAll(){
        Promise.all([this.asyncHitungTotalAGe(this.data), this.asyncHitungTotalMoney(this.data)]).then(
            (result) => {
                for(let cek of result) {
                    console.log("Hitung Selesai")
                }
            }
            )
        
    }
}



class Statistik extends Perhitungan{
    constructor(data){
        super(data)
    }
    outputData(){
        console.log("Total umur:"+ this.totalAge)
        console.log("Total money:"+ this.totalMoney)
    }
}