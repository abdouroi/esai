const input = ["familiname", "name", "age" ] ;
    let i=1, j=0;
function Finput() {
document.getElementById("inpt").innerHTML= input[i] ;
     document.getElementById("textInf").placeholder=input[i];
   i=i+1;
    if (i>=input.length){
        i=0;  }
        let inf = document.getElementById("textInf").value;

            document.getElementById(input[j]).innerHTML= inf;
            j=j+1;
              if (j>=input.length){
                j=0;
            }document.getElementById("textInf").value ="";

}

function begin(){

    document.getElementById("textInf").placeholder=input[0];

document.getElementById("inpt").innerHTML= input[0] ;
}
