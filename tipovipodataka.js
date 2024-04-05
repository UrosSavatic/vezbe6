//Primitivni tipovi (osnovni)
var godine = 20;
var ime = "Uros";
var studira = true;
//Nizovi
var predmeti = ["EPOS", "KLIJENTSKE", "CLOUD"];
var ocene = [10, 8, 9];
//Tuples
var tuple = ["Uros", 20];
//Enums
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverstkoInzinjerstvo"] = 1] = "SoftverstkoInzinjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//Objekat
var student = {
    ime: "Uros",
    godine: 20,
    studira: true
};
//Unija tipova
var brojIliString = 10;
//Any tip
var biloSta = "Moze bilo koji tip";
//void
function cao() {
    console.log("cao");
}
//null i undefined
var n = null;
var u = undefined;
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
