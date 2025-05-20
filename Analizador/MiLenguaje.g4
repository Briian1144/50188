grammar MiLenguaje;

//  -= Grammar =-
programa
    : instruccion+
    ;

instruccion
    : repeticion
    ;

repeticion
    : REPETIR LLAVE_IZQ sentencia+ LLAVE_DER HASTA condicion PUNTOYCOMA
    ;

sentencia
    : salida+
    | terminar
    ;

salida
    : IMPRIMIR PAREN_IZQ cadena PAREN_DER PUNTOYCOMA
    ;

terminar
    : SALIR PUNTOYCOMA
    ;

condicion
    : VERDADERO
    | FALSO
    ;

cadena
    :  (caracter)* 
    ;

caracter
    : CADENA
    ;

// =====================
//   Lexer Rules
// =====================

// Palabras clave
REPETIR     : 'repetir' ;
HASTA       : 'hasta' ;
IMPRIMIR    : 'imprimir' ;
SALIR       : 'salir' ;
VERDADERO   : 'verdadero' ;
FALSO       : 'falso' ;

// Símbolos
LLAVE_IZQ   : '{' ;
LLAVE_DER   : '}' ;
PAREN_IZQ   : '(' ;
PAREN_DER   : ')' ;
PUNTOYCOMA  : ';' ;
COMILLA     : '"' ;

// Cadenas entre comillas dobles con letras, dígitos o símbolos
fragment LETRA   : [a-zA-Z] ;
fragment DIGITO  : [0-9] ;
fragment SIMBOLO : ' ' | '!' | '?' | ';' ;

// Ignorar espacios en blanco fuera de cadenas
WS : [ \t\r\n]+ -> skip ;

// Token agregado para reconocer cadenas de texto
CADENA : '"' (~["\r\n])* '"' ;
