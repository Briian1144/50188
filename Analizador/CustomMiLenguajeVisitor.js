import MiLenguajeVisitor from './generated/MiLenguajeVisitor.js';
import MiLenguajeParser from './generated/MiLenguajeParser.js';

class CustomMiLenguajeVisitor extends MiLenguajeVisitor {
    constructor() {
        super();
        this.memory = {}; // Almacén de variables
    }

    visitDecl(ctx) {
        const varName = ctx.ID().getText();
        if (ctx.expr()) {
            this.memory[varName] = this.visit(ctx.expr());
        }
        console.log(`Declaración: ${ctx.getChild(0).getText()} ${varName} = ${this.memory[varName] || 'undefined'};`);
    }

    visitAssign(ctx) {
        const varName = ctx.ID().getText();
        this.memory[varName] = this.visit(ctx.expr());
        console.log(`${varName} = ${this.memory[varName]};`);
    }

    visitNumber(ctx) {
        return Number(ctx.getText());
    }

    visitId(ctx) {
        return this.memory[ctx.getText()] || 0;
    }

    visitMulDiv(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return ctx.op.type === MiLenguajeParser.MUL ? left * right : left / right;
    }

    visitAddSub(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return ctx.op.type === MiLenguajeParser.ADD ? left + right : left - right;
    }
}

export default CustomMiLenguajeVisitor;