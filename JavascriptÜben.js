


    // function example() {
    //     if(true){
    //         var x = 10;
    //         let y = 20;
    //         const z = 30;
    //     }
    //     console.log(x);
    //     console.log(y);
    //     console.log(z);
        
    // }

    // example();


    // let age = 15 ;
    // console.log(age);

  
    //console.log(x);

   /* let zahl = 10;
    if(zahl > 5)
    {
        console.log("Die Zahl ist größer als 5.");
    }
    else {
        console.log("Die Zahl ist 5 oder kleiner.")
    }*/



    /* let punkte = 5;
    let note;

    if(punkte >= 90) {
        note = "A";

    } else if(punkte >= 80){
      note = "B";

    }

    else if(punkte >= 70) {
        note = "C";
    }

    else if(punkte >= 60) {
        note = "D";
    }
    else{
        note = "F";
    }
    console.log("Die note ist: " + note );
*/

    let farbe = "rot";

    switch(farbe) {
        case "rot":
            console.log("Die farbe ist rot");
            break;
        case "blau":
            console.log("Die farbe ist blau")
            break; 
        default:
            console.log("Unbekannte farbe.");       
    }

    for(let i= 0 ; i < 5; i++){
      console.log("Durchlauf Nummer " +i);
    }

    // let count = 0;

    // while(count < 5) {
    //     console.log("Zähler: " + count)
    //     count++;
    // }


    let count = 0;

    do{

        console.log("Zähler: " + count);
        count++;

    } while (count < 5);

    let person = {

        name: "John",
        alter: 30
    };
  

    for(let eigenschaft in person){
        console.log(eigenschaft + ":" + person[eigenschaft]);
    }