let Temperature = function (celsius) {

    this.celsius = celsius;

    this.getCelsius = function() {
        return this.celsius;
    }
    this.setCelsius = function(celsius) {
        this.celsius = celsius;
    }
    
    this.getFahrenheit = function() {
        return 9/5 * this.celsius + 32
    }
    
    this.getKelvins = function() {
        return this.celsius + 273.15;
    }
};

//Khởi tạo
let c = new Temperature(25);

//Độ F và K
let f = c.getFahrenheit();
let k = c.getKelvins();
document.getElementById('result').innerHTML = `<br>Độ F: ${f} <br> Độ K: ${k}`