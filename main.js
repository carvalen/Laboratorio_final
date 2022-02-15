
const valorationInput = document.getElementById ("rangeValue");
var countryInput = document.getElementById("country");
var ibanInput = document.getElementById("iban");
var entityInput = document.getElementById("entity");
var sucursalInput = document.getElementById("sucursal");
var dcInput = document.getElementById("dc");
var accountInput = document.getElementById("account");
var dateInput = document.getElementById ("dateId");



function showValoration () {
    alert ("Has valorado con " + valorationInput.value + " puntos");
}

function showAccountDetails () {
    alert ("Le informamos que su cuenta bancaria es " + country.value + iban.value +" - " + entity.value + " - " + sucursal.value + " - " +  dc.value + " - "+ account.value);
}

function showDate () {
    const days= [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];
var dateValue = dateInput.value 
var dayIndex = new Date(dateValue).getDay();
var day = days [dayIndex];
console.log(day)
alert ("La fecha seleccionada en el elemento es un " + day);
}


function validationCode () {

    var provincia = {

            "01": "Alava",
            "02": "Albacete",
            "03": "Alicante",
            "04": "Almeria",
            "05": "Avila",
            "06": "Badajoz",
            "07": "Islas Baleares",
            "08": "Barcelona",
            "09": "Burgos",
            "10": "Caceres",
            "11": "Cadiz",
            "12": "Castellon",
            "13": "Ciudad Real",
            "14": "Cordoba",
            "15": "La Coruna",
            "16": "Cuenca",
            "17": "Gerona",
            "18": "Granada",
            "19": "Guadalajara",
            "20": "Guipuzcoa",
            "21": "Huelva",
            "22": "Huesca",
            "23": "Jaen",
            "24": "Leon",
            "25": "Lerida",
            "26": "La Rioja",
            "27": "Lugo",
            "28": "Madrid",
            "29": "Malaga",
            "30": "Murcia",
            "31": "Navarra",
            "32": "Orense",
            "33": "Asturias",
            "34": "Palencia",
            "35": "Las Palmas",
            "36": "Pontevedra",
            "37": "Salamanca",
            "38": "Santa Cruz de Tenerife",
            "39": "Cantabria",
            "40": "Segovia",
            "41": "Sevilla",
            "42": "Soria",
            "43": "Tarragona",
            "44": "Teruel",
            "45": "Toledo",
            "46": "Valencia",
            "47": "Valladolid",
            "48": "Vizcaya",
            "49": "Zamora",
            "50": "Zaragoza",
            "51": "Ceuta",
            "52": "Melilla"
            };

            var postalCode = document.getElementById("codigo_postal").value;   
            var smallCode = postalCode.substring(0,2);
            var cities = document.getElementById("provincia").value;
            var correctCity = provincia[smallCode];
            var rightValidation = document.getElementById("rightValidation");
            var wrongValidation = document.getElementById("wrongValidation");

            if (postalCode == "") {
                wrongValidation.classList.remove("hidetext")
                window.alert("El codigo postal no puede estar vacio")
            }
            else if(postalCode.length !== 5) { 
                validnotok.classList.remove("hidetext")
            window.alert("El codigo postal debe contener 5 caracteres"); 
            }
    
            else if (isNaN(Number(postalCode) )) {
                wrongValidation.classList.remove("hidetext")
            window.alert("El codigo postal solamente debe contener numeros")
            }
    
            else if( correctCity != cities) {
                wrongValidation.classList.remove("hidetext")
                    window.alert("La provincia no es correcta")
                }
            else {
                rightValidation.classList.remove("hidetext")
                wrongValidation.classList.add("hidetext")
                    window.alert("Validación correcta")
                }
    
    
            };
    
    document.getElementById("telefonica").addEventListener("submit", function(event) {
    event.preventDefault();
    validationCode();
    
        });
