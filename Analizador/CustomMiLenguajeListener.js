import MiLenguajeListener from "./generated/MiLenguajeListener.js";

export class CustomMiLenguajeListener extends MiLenguajeListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}