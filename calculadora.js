<html>
    <head>
        <title>Calculadora</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
        <script type="text/javascript" src="index.js">
            function String2Number(valor){
                valor = valor.replace("," ,".");
                return(parseFloat(valor));
            }
            function digito(dig){
                if (res.value.lenght<12){
                    if(res.value!=="0")
                        res.value = res.value+dig;
                    else
                        res.value = dig;
                }
                
            }
            function total(){
                if(op.value === "+")
                res.value = parseFloat(v1.value)+parseFloat(res.value);
            else if(op.value==="-")
            es.value = parseFloat(v1.value)- parseFloat(res.value);
        else if (op.value === "X")
            es.value = parseFloat(v1.value)* parseFloat(res.value);
        else if(op.value==="/"){
            if(res.value !==0)
                es.value = parseFloat(v1.value) / parseFloat(res.value);
                    else
                        res.value = "ERRO";
                }
        }
        function operacao (ope){
            v1.value = res.value;
            op.value = ope;
            res.value = "0"; 
        }
        function separador(){
            if (res.value.indexOf(",")< 0 )
                res.value = res.value + ",";
        }
        function limpar(){
            res.valeu = "0";
        }
        function retornar(){
             window.opener.valor.valueOf=res.value;
             window.close();
        }
        </script>
        <h2>Calculadora</h2>
        <table bgcolor="#BBBBBB" border="0" cellpadding="3"
               cellspacing="0" summary="">
            <tr>
                 <td colspan="4">
                    <input type="text" id="res" value="0" size="12" readonly>
                           
                    <input type="hidden" id="v1" value="0">
                    <input type="hidden" id="op" value=" ">
                </td>
            </tr>
            <tr>
               
             <td><input type="button" id="off" value="Off" onclick='retornar()'></td>
            <td><input type="button" id="lim" value=" C " onclick='limpar()'></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td><input type="button" id="d7" value=" 7 "
    onclick='digito("7")'></td>
            <td><input type="button" id="d8" value=" 8 "
    onclick='digito("8")'></td><!-- comment -->
            <td><input type="button" id="d9" value=" 9 "
    onclick='digito("9")'></td>
            <td><input type="button" id="div" value=" /  "
    onclick='operacao("/")'></td>
        </tr>
         <tr>
            <td><input type="button" id="d4" value=" 4 "
    onclick='digito("4")'></td>
            <td><input type="button" id="d5" value=" 5 "
    onclick='digito("5")'></td>
            <td><input type="button" id="d6" value=" 6 "
    onclick='digito("6")'></td>
            <td><input type="button" id="mul" value=" X "
    onclick='operacao("X")'></td>
         </tr><!-- comment -->
          <tr>
            <td><input type="button" id="d1" value=" 1 "
    onclick='digito("1")'></td>
            <td><input type="button" id="d2" value=" 2 "
    onclick='digito("2")'></td><!-- comment -->
            <td><input type="button" id="d3" value=" 3 "
    onclick='digito("3")'></td>
            <td><input type="button" id="sub" value=" -  "
    onclick='operacao("-")'></td>
          </tr>        
         <tr>
            <td><input type="button" id="d0" value=" 0 " onclick='digito("0")'></td>
    
            <td><input type="button" id="sep" value="  , " onclick='separador()'></td>
    <!-- comment -->
            <td><input type="button" id="tot" value=" = " onclick='total()'></td>
    
            <td><input type="button" id="adi" value=" + " onclick='operacao("+")'></td>
   
        </tr>
        </table>
    </body>
</html>
