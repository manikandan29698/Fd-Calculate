function FdRate() {
    let month = Number(document.getElementById('input').value)
    let rate = 0
    if (month < 3) {
        rate = 5.8
    }else if(month>=3 && month<=6){
            rate=6.3
        }else if(month>=6 && month<=9){
            rate=6.8
        }else{
            rate=7
        }
        let result = document.getElementById('result')
        result.innerHTML = 'Your FD Rate is ' + rate + " %"
    }
