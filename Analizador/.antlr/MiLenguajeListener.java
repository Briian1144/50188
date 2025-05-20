// Generated from d://Mi_Programa//Analizador//MiLenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiLenguajeParser}.
 */
public interface MiLenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(MiLenguajeParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(MiLenguajeParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(MiLenguajeParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(MiLenguajeParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#repeticion}.
	 * @param ctx the parse tree
	 */
	void enterRepeticion(MiLenguajeParser.RepeticionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#repeticion}.
	 * @param ctx the parse tree
	 */
	void exitRepeticion(MiLenguajeParser.RepeticionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(MiLenguajeParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(MiLenguajeParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(MiLenguajeParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(MiLenguajeParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(MiLenguajeParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(MiLenguajeParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(MiLenguajeParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(MiLenguajeParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(MiLenguajeParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(MiLenguajeParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(MiLenguajeParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(MiLenguajeParser.CaracterContext ctx);
}