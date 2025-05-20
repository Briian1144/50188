// Generated from d://Mi_Programa//Analizador//MiLenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MiLenguajeLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		REPETIR=1, HASTA=2, IMPRIMIR=3, SALIR=4, VERDADERO=5, FALSO=6, LLAVE_IZQ=7, 
		LLAVE_DER=8, PAREN_IZQ=9, PAREN_DER=10, PUNTOYCOMA=11, COMILLA=12, WS=13, 
		CADENA=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"REPETIR", "HASTA", "IMPRIMIR", "SALIR", "VERDADERO", "FALSO", "LLAVE_IZQ", 
			"LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "PUNTOYCOMA", "COMILLA", "LETRA", 
			"DIGITO", "SIMBOLO", "WS", "CADENA"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'repetir'", "'hasta'", "'imprimir'", "'salir'", "'verdadero'", 
			"'falso'", "'{'", "'}'", "'('", "')'", "';'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "REPETIR", "HASTA", "IMPRIMIR", "SALIR", "VERDADERO", "FALSO", 
			"LLAVE_IZQ", "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "PUNTOYCOMA", "COMILLA", 
			"WS", "CADENA"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MiLenguajeLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiLenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000er\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000fd\b"+
		"\u000f\u000b\u000f\f\u000fe\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0005\u0010l\b\u0010\n\u0010\f\u0010o\t\u0010\u0001\u0010\u0001"+
		"\u0010\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\u0000\u001b\u0000\u001d\u0000\u001f\r!\u000e\u0001\u0000\u0005"+
		"\u0002\u0000AZaz\u0001\u000009\u0003\u0000 !;;??\u0003\u0000\t\n\r\r "+
		" \u0003\u0000\n\n\r\r\"\"p\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0001#\u0001\u0000\u0000\u0000\u0003+\u0001\u0000\u0000\u0000\u0005"+
		"1\u0001\u0000\u0000\u0000\u0007:\u0001\u0000\u0000\u0000\t@\u0001\u0000"+
		"\u0000\u0000\u000bJ\u0001\u0000\u0000\u0000\rP\u0001\u0000\u0000\u0000"+
		"\u000fR\u0001\u0000\u0000\u0000\u0011T\u0001\u0000\u0000\u0000\u0013V"+
		"\u0001\u0000\u0000\u0000\u0015X\u0001\u0000\u0000\u0000\u0017Z\u0001\u0000"+
		"\u0000\u0000\u0019\\\u0001\u0000\u0000\u0000\u001b^\u0001\u0000\u0000"+
		"\u0000\u001d`\u0001\u0000\u0000\u0000\u001fc\u0001\u0000\u0000\u0000!"+
		"i\u0001\u0000\u0000\u0000#$\u0005r\u0000\u0000$%\u0005e\u0000\u0000%&"+
		"\u0005p\u0000\u0000&\'\u0005e\u0000\u0000\'(\u0005t\u0000\u0000()\u0005"+
		"i\u0000\u0000)*\u0005r\u0000\u0000*\u0002\u0001\u0000\u0000\u0000+,\u0005"+
		"h\u0000\u0000,-\u0005a\u0000\u0000-.\u0005s\u0000\u0000./\u0005t\u0000"+
		"\u0000/0\u0005a\u0000\u00000\u0004\u0001\u0000\u0000\u000012\u0005i\u0000"+
		"\u000023\u0005m\u0000\u000034\u0005p\u0000\u000045\u0005r\u0000\u0000"+
		"56\u0005i\u0000\u000067\u0005m\u0000\u000078\u0005i\u0000\u000089\u0005"+
		"r\u0000\u00009\u0006\u0001\u0000\u0000\u0000:;\u0005s\u0000\u0000;<\u0005"+
		"a\u0000\u0000<=\u0005l\u0000\u0000=>\u0005i\u0000\u0000>?\u0005r\u0000"+
		"\u0000?\b\u0001\u0000\u0000\u0000@A\u0005v\u0000\u0000AB\u0005e\u0000"+
		"\u0000BC\u0005r\u0000\u0000CD\u0005d\u0000\u0000DE\u0005a\u0000\u0000"+
		"EF\u0005d\u0000\u0000FG\u0005e\u0000\u0000GH\u0005r\u0000\u0000HI\u0005"+
		"o\u0000\u0000I\n\u0001\u0000\u0000\u0000JK\u0005f\u0000\u0000KL\u0005"+
		"a\u0000\u0000LM\u0005l\u0000\u0000MN\u0005s\u0000\u0000NO\u0005o\u0000"+
		"\u0000O\f\u0001\u0000\u0000\u0000PQ\u0005{\u0000\u0000Q\u000e\u0001\u0000"+
		"\u0000\u0000RS\u0005}\u0000\u0000S\u0010\u0001\u0000\u0000\u0000TU\u0005"+
		"(\u0000\u0000U\u0012\u0001\u0000\u0000\u0000VW\u0005)\u0000\u0000W\u0014"+
		"\u0001\u0000\u0000\u0000XY\u0005;\u0000\u0000Y\u0016\u0001\u0000\u0000"+
		"\u0000Z[\u0005\"\u0000\u0000[\u0018\u0001\u0000\u0000\u0000\\]\u0007\u0000"+
		"\u0000\u0000]\u001a\u0001\u0000\u0000\u0000^_\u0007\u0001\u0000\u0000"+
		"_\u001c\u0001\u0000\u0000\u0000`a\u0007\u0002\u0000\u0000a\u001e\u0001"+
		"\u0000\u0000\u0000bd\u0007\u0003\u0000\u0000cb\u0001\u0000\u0000\u0000"+
		"de\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000"+
		"\u0000fg\u0001\u0000\u0000\u0000gh\u0006\u000f\u0000\u0000h \u0001\u0000"+
		"\u0000\u0000im\u0005\"\u0000\u0000jl\b\u0004\u0000\u0000kj\u0001\u0000"+
		"\u0000\u0000lo\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000mn\u0001"+
		"\u0000\u0000\u0000np\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000"+
		"pq\u0005\"\u0000\u0000q\"\u0001\u0000\u0000\u0000\u0003\u0000em\u0001"+
		"\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}