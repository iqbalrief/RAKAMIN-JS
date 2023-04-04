let data = []
console.log(data);
function submitReg() {
    let nama = document.getElementById("firstName")
    let age = document.getElementById("Age")
    let money = document.getElementById("Pocket")
    let resume = document.getElementById("resume")
    let totalAge = 0
    let totalMoney = 0
    let avgAge = 0
    let avgMoney = 0

   

    if(Number(age.value) >= 25) {
      if(Number(money.value) >= 100000 && Number(money.value <= 1000000)) {
          if(nama.value.length >=10){
              data.push({
                  nama : nama.value,
                  age: age.value,
                  money: money.value
              })
              const trdel = document.getElementsByTagName("tbody")[0]
              trdel.remove()
              tablelist = document.getElementById("tableList")
              const tbody = document.createElement("tbody")
              for (let index = 0; index < data.length; index++) {
                  const tr = document.createElement("tr")
                  
                  
                  const tdNama = document.createElement("td")
                  const valueNama = document.createTextNode(data[index].nama)
                  tdNama.appendChild(valueNama)

                  const tdAge = document.createElement("td")
                  const valueAge = document.createTextNode(data[index].age)
                  tdAge.appendChild(valueAge)

                  const tdMoney = document.createElement("td")
                  const valueMoney = document.createTextNode(data[index].money)
                  tdMoney.appendChild(valueMoney)

                  tr.appendChild(tdNama)
                  tr.appendChild(tdAge)
                  tr.appendChild(tdMoney)    
                  tbody.appendChild(tr)      
                  totalAge +=Number(data[index].age)
                  totalMoney += Number(data[index].money)        
              }     
            //   old way
            //   avgAge += totalAge / data.length
            //   avgMoney += totalMoney / data.length

            const stats = new Statistik(data)
            stats.hitungTotalAge()
            stats.hitungTotalMoney()
            stats.outputData()
            avgAge = stats.totalAge / data.length
            avgMoney = stats.totalMoney / data.length

              resume.innerHTML = `Rata Rata Pendaftar memiliki uang sangu sebesar ${avgMoney} dengan rata rata umur ${avgAge}`
              tablelist.appendChild(tbody)
              console.log(data);
          } else{
              alert("Nama Minimal 10 Character")
          }
      }else{
          alert("Uang saku minimal 100 ribu dan maksimal 1 juta")
      }
  }else{
      alert("Umur Minimal dari 25 Tahun")
  }

   

}