// Generated by the Freon Language Generator.
import { BooleanValue, DecValue, IntValue, MainModel, PropertiesFile, Property, StringValue, Value } from "../../language/gen";
import { PropertiesWorker } from "./PropertiesWorker";

/**
 * Class PropertiesDefaultWorker is part of the implementation of the visitor pattern on models.
 * It implements the interface PropertiesWorker with empty methods, and can thus be used as
 * base to any class that needs to traverse the model tree.
 * Class PropertiesWalker implements the traversal of the model tree. This class implements
 * the actual visiting of each node in the tree.
 */
export class PropertiesDefaultWorker implements PropertiesWorker {
    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeMainModel(modelelement: MainModel): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterMainModel(modelelement: MainModel): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforePropertiesFile(modelelement: PropertiesFile): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterPropertiesFile(modelelement: PropertiesFile): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeProperty(modelelement: Property): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterProperty(modelelement: Property): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeValue(modelelement: Value): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterValue(modelelement: Value): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeBooleanValue(modelelement: BooleanValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterBooleanValue(modelelement: BooleanValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeDecValue(modelelement: DecValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterDecValue(modelelement: DecValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeIntValue(modelelement: IntValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterIntValue(modelelement: IntValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeStringValue(modelelement: StringValue): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterStringValue(modelelement: StringValue): boolean {
        return false;
    }
}
