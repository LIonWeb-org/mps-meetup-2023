// Generated by the Freon Language Generator.
// Generated my Freon, will be overwritten with every generation.
import { InterpreterContext, RtObject, RtError } from "@freon4dsl/core";
import { Property, Value, BooleanValue, DecValue, IntValue, StringValue } from "../../language/gen";

/**
 * The base class containing all interpreter functions that should be defined.
 * All functions throw an error when called.
 */
export class PropertiesInterpreterBase {
    constructor() {}

    evalProperty(node: Property, ctx: InterpreterContext): RtObject {
        throw new RtError("evalProperty is not defined");
    }

    evalValue(node: Value, ctx: InterpreterContext): RtObject {
        throw new RtError("evalValue is not defined");
    }

    evalBooleanValue(node: BooleanValue, ctx: InterpreterContext): RtObject {
        throw new RtError("evalBooleanValue is not defined");
    }

    evalDecValue(node: DecValue, ctx: InterpreterContext): RtObject {
        throw new RtError("evalDecValue is not defined");
    }

    evalIntValue(node: IntValue, ctx: InterpreterContext): RtObject {
        throw new RtError("evalIntValue is not defined");
    }

    evalStringValue(node: StringValue, ctx: InterpreterContext): RtObject {
        throw new RtError("evalStringValue is not defined");
    }
}
