// Generated from d://Mi_Programa//Analizador//MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,14,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,2,
1,2,1,2,4,2,29,8,2,11,2,12,2,30,1,2,1,2,1,2,1,2,1,2,1,3,4,3,39,8,3,11,3,
12,3,40,1,3,3,3,44,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,5,
7,58,8,7,10,7,12,7,61,9,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,
0,5,6,60,0,19,1,0,0,0,2,23,1,0,0,0,4,25,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,
0,10,51,1,0,0,0,12,54,1,0,0,0,14,59,1,0,0,0,16,62,1,0,0,0,18,20,3,2,1,0,
19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,
24,3,4,2,0,24,3,1,0,0,0,25,26,5,1,0,0,26,28,5,7,0,0,27,29,3,6,3,0,28,27,
1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,32,1,0,0,0,32,33,5,
8,0,0,33,34,5,2,0,0,34,35,3,12,6,0,35,36,5,11,0,0,36,5,1,0,0,0,37,39,3,8,
4,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,
0,42,44,3,10,5,0,43,38,1,0,0,0,43,42,1,0,0,0,44,7,1,0,0,0,45,46,5,3,0,0,
46,47,5,9,0,0,47,48,3,14,7,0,48,49,5,10,0,0,49,50,5,11,0,0,50,9,1,0,0,0,
51,52,5,4,0,0,52,53,5,11,0,0,53,11,1,0,0,0,54,55,7,0,0,0,55,13,1,0,0,0,56,
58,3,16,8,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,15,
1,0,0,0,61,59,1,0,0,0,62,63,5,14,0,0,63,17,1,0,0,0,5,21,30,40,43,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'repetir'", "'hasta'", "'imprimir'", 
                            "'salir'", "'verdadero'", "'falso'", "'{'", 
                            "'}'", "'('", "')'", "';'", "'\"'" ];
    static symbolicNames = [ null, "REPETIR", "HASTA", "IMPRIMIR", "SALIR", 
                             "VERDADERO", "FALSO", "LLAVE_IZQ", "LLAVE_DER", 
                             "PAREN_IZQ", "PAREN_DER", "PUNTOYCOMA", "COMILLA", 
                             "WS", "CADENA" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion", "cadena", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.repeticion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeticion() {
	    let localctx = new RepeticionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(MiLenguajeParser.REPETIR);
	        this.state = 26;
	        this.match(MiLenguajeParser.LLAVE_IZQ);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.sentencia();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
	        this.state = 32;
	        this.match(MiLenguajeParser.LLAVE_DER);
	        this.state = 33;
	        this.match(MiLenguajeParser.HASTA);
	        this.state = 34;
	        this.condicion();
	        this.state = 35;
	        this.match(MiLenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_sentencia);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 37;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 40; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(MiLenguajeParser.IMPRIMIR);
	        this.state = 46;
	        this.match(MiLenguajeParser.PAREN_IZQ);
	        this.state = 47;
	        this.cadena();
	        this.state = 48;
	        this.match(MiLenguajeParser.PAREN_DER);
	        this.state = 49;
	        this.match(MiLenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MiLenguajeParser.SALIR);
	        this.state = 52;
	        this.match(MiLenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiLenguajeParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 56;
	            this.caracter();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiLenguajeParser.RULE_caracter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(MiLenguajeParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.REPETIR = 1;
MiLenguajeParser.HASTA = 2;
MiLenguajeParser.IMPRIMIR = 3;
MiLenguajeParser.SALIR = 4;
MiLenguajeParser.VERDADERO = 5;
MiLenguajeParser.FALSO = 6;
MiLenguajeParser.LLAVE_IZQ = 7;
MiLenguajeParser.LLAVE_DER = 8;
MiLenguajeParser.PAREN_IZQ = 9;
MiLenguajeParser.PAREN_DER = 10;
MiLenguajeParser.PUNTOYCOMA = 11;
MiLenguajeParser.COMILLA = 12;
MiLenguajeParser.WS = 13;
MiLenguajeParser.CADENA = 14;

MiLenguajeParser.RULE_programa = 0;
MiLenguajeParser.RULE_instruccion = 1;
MiLenguajeParser.RULE_repeticion = 2;
MiLenguajeParser.RULE_sentencia = 3;
MiLenguajeParser.RULE_salida = 4;
MiLenguajeParser.RULE_terminar = 5;
MiLenguajeParser.RULE_condicion = 6;
MiLenguajeParser.RULE_cadena = 7;
MiLenguajeParser.RULE_caracter = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instruccion;
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeticionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_repeticion;
    }

	REPETIR() {
	    return this.getToken(MiLenguajeParser.REPETIR, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(MiLenguajeParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(MiLenguajeParser.LLAVE_DER, 0);
	};

	HASTA() {
	    return this.getToken(MiLenguajeParser.HASTA, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiLenguajeParser.PUNTOYCOMA, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterRepeticion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitRepeticion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitRepeticion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(MiLenguajeParser.IMPRIMIR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(MiLenguajeParser.PAREN_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAREN_DER() {
	    return this.getToken(MiLenguajeParser.PAREN_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiLenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(MiLenguajeParser.SALIR, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiLenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(MiLenguajeParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(MiLenguajeParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_caracter;
    }

	CADENA() {
	    return this.getToken(MiLenguajeParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.ProgramaContext = ProgramaContext; 
MiLenguajeParser.InstruccionContext = InstruccionContext; 
MiLenguajeParser.RepeticionContext = RepeticionContext; 
MiLenguajeParser.SentenciaContext = SentenciaContext; 
MiLenguajeParser.SalidaContext = SalidaContext; 
MiLenguajeParser.TerminarContext = TerminarContext; 
MiLenguajeParser.CondicionContext = CondicionContext; 
MiLenguajeParser.CadenaContext = CadenaContext; 
MiLenguajeParser.CaracterContext = CaracterContext; 
