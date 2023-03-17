/* 
existiert eine txt Datei bereits?           access
wenn nein,    --> dann erselen           writeFile 
wenn ja,   --mit Paramet-->    eine neue Zeile der txt hinzufügen           open   a+     */  


import fs, { access } from 'fs';
import { counter } from './counter.js';



// ! Unterordner erstellen
// ! erst ProjektOrdner
fs.access(("./ProjektOrdner/"), fs.constants.R_OK, (err)=>{
    if(err) {
        console.log("Error fs.access existiert   noch  nich     also erstellen --> " , err);

        fs.mkdir(("./ProjektOrdner/"), (err)=>{
            if(err) {
                console.log("Error fs.mkdir --> " , err)
            }
            else {
                console.log("fs.mkdir ProjektOrdner erstellen hat geklappt")
        
                // ! jetzt unterOrdner
                fs.mkdir(("./ProjektOrdner/unterOrdner/"), (err)=>{
                    if(err) {
                        console.log("Error fs.mkdir ProjektOrdner/unterOrdner erstellen hat geklappt")
                    }
                    else {
        
                        testFunktion("test hallo ich bin im else von fs.mkdir und fs.mkdir")
        
        
                    }
                })
            }
        })



    }
    else {
        console.log("fs.access existiert    schon    , also erstellen")
        
       

        testFunktion("was geht ab, du bist schon zum " +  counter(1) + " mal hier :-)")
        
       


    }
})




// prüfen ob txt erstellt ist oder nicht,     wenn nicht erstellt, dann txt erstellen
function testFunktion(para){
    let a = para

    // ! prüft ob txt schon vorhanden
    fs.access(("./ProjektOrdner/unterOrdner/test.txt"), fs.constants.F_OK, (err)=> {
        if(err){
            console.log("Error fs.access --> " , err)

            // ! nein, jetzt wird txt erstellt
            // ! a soll rein als dataInput
            fs.writeFile(("./ProjektOrdner/unterOrdner/test.txt"), a , ("utf-8"), (err)=>{
                if(err){
                    console.log("Error fs.writeFile   test.txt --> " , err)
                }
                else {
                    console.log("test.txt erstellt")
                }
            })
        }
        else{
            console.log("Datei txt  schon   vorhande ")

            // ! input an Datei anhängen
            fs.open(("./ProjektOrdner/unterOrdner/test.txt"), "a+", ( err , fd) => {
                if (err){
                    console.log("Error fs.open test.txt --> " , err)
                }
                else {
                    console.log("fs.open hat geklappt")
                    fs.write(fd, "\n" + a,(err) => {
                        if (err) {
                            console.log("Error fs.write hat nicht geklappt --> " , err)
                        }
                        else {
                            console.log("fs.write hat geklappt ")
                        }
                    })
                }
                fs.close(fd, (err) =>{
                    if (err) {
                        console.log("Error fs.close test.txt hat nicht geklappt --> " , err)
                    }
                })
            })
        }
    })
}

let c = "Hallo Hallo Hallo Hallo"

testFunktion(c)
testFunktion("wer")
testFunktion("bist")
testFunktion("du ")
testFunktion("denn")
testFunktion("Oh ")
testFunktion("wie ")
testFunktion("heißt")
testFunktion("du denn")


