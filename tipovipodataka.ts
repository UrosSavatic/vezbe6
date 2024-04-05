//Primitivni tipovi (osnovni)

let godine:number = 20;
let ime:string = "Uros";
let studira:boolean = true;

//Nizovi
let predmeti:string[] = ["EPOS", "KLIJENTSKE", "CLOUD"];
let ocene:number[] = [10, 8, 9];

//Tuples
let tuple:[string, number] = ["Uros", 20];

//Enums
enum Modul {
    TehnologijeElektronskogPoslovanja,
    SoftverstkoInzinjerstvo,
    InformacioniSistemi
}

let modul:Modul = Modul.TehnologijeElektronskogPoslovanja;

//Objekat

let student:{ime:string, godine:number, studira:boolean} = {
    ime: "Uros",
    godine: 20,
    studira: true
}

//Unija tipova

let brojIliString:number | string = 10;

//Any tip

let biloSta:any = "Moze bilo koji tip";

//void

function cao():void {
    console.log("cao");
}

//null i undefined

let n:null = null;
let u:undefined = undefined;

let nekaVrednost:any = "Neki string";
let duzinaStringa:number = (nekaVrednost as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);