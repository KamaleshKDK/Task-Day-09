  // A. Get all the countries from Asia continent /region using Filter function

        var request = new XMLHttpRequest();
        request.open('GET', 'https://restcountries.com/v2/all', 'true');
        request.send();
        request.onload = function () {
            var countryData = JSON.parse(this.response);

            const asia = countryData.filter((element) => {
                if (element.region === 'Asia') {
                    console.log(element.name);
                }
            })
        }

        //B. Get all the countries with a population of less than 2 lakhs using Filter function

        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json", "true");
        request.send();
        request.onload = function () {
            var countrypopulation = JSON.parse(this.response);
            let population = countrypopulation.filter((element) => {
                if (element.population < 200000) {
                    console.log(element.name);
                }
            })
        }


        //  C. Print the following details name, capital, flag using forEach function
        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json", "true");
        request.send();
        request.onload = function () {
            var countryData = JSON.parse(this.response);
            var result = countryData.filter((element) => {
                console.log(element.name, element.capital, element.flag);
            })
        }

        //D. Print the total population of countries using reduce function


        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json", "true");
        request.send();
        request.onload = function () {
            var result = JSON.parse(this.response);
            const population = result.reduce((acc, element) => {
                return acc + element.population;
            }, 0)
            console.log(population);
        }

        //E. Print the country which uses US Dollars as currency.
        var request = new XMLHttpRequest();
        request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
        request.send();
        request.onload = function () {
            var data = JSON.parse(this.response);
            var res = data.filter((element) => {
                if(element.currencies[0].code === "USD"){
                    console.log(element.name);
                }
            }) }
