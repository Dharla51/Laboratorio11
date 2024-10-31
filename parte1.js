let Nota= prompt("DIGITE SU NOTA: ");
if (Nota>=90){
   console.log("EXCELENTE NOTA, APROBADO CON HONORES");
   document.write("EXCELENTE NOTA, APROBADO CON HONORES <br>");
} else{
   if (Nota>=70 && Nota<90){
       console.log("APROBADO"); 
       document.write("APROBADO <br>");
   } else{
   if(Nota<70){
       console.log("REPROBADO"); 
       document.write("REPROBADO <br>"); 
       }
   }
}
