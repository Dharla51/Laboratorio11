let Monto= prompt("DIGITE SU MONTO: ");
if(Monto>100){
    let Desc= Monto-Monto*0.1; 
    console.log("SE APLICO UN DESCUENTO DEL 10%"); 
    console.log("EL MONTO FINAL ES: "+Desc);
    document.write("SE APLICO UN DESCUENTO DEL 10% <br>"); 
    document.write("EL MONTO FINAL ES: "+Desc+"<br>");
}else{
    if (Monto<=100){
        console.log("NO SE APLICO DESCUENTO"); 
        console.log("EL MONTO FINAL ES: "+Monto); 
        document.write("NO SE APLICO DESCUENTO <br>");
        document.write("EL MONTO FINAL ES:" +Monto+"<br>");
    }
}

