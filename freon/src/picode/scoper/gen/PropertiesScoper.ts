// Generated by the Freon Language Generator.
import { FreScoperBase, FreLogger, FreNode, FreNodeReference, FreNamespace, FreCompositeTyper } from "@freon4dsl/core";
import { PropertiesMetaType } from "../../language/gen";

const LOGGER = new FreLogger("PropertiesScoper");

/**
 * Class PropertiesScoper implements the scoper generated from, if present, the scoper definition,
 * otherwise this class implements the default scoper.
 */
export class PropertiesScoper extends FreScoperBase {
    /**
     * Returns the namespace to be used as alternative scope for 'modelelement'.
     * @param modelelement
     */
    getAlternativeScope(modelelement: FreNode): FreNamespace {
        return null;
    }

    /**
     * Returns true if there is an alternative scope defined for this 'modelelement'.
     * @param modelelement
     */
    hasAlternativeScope(modelelement: FreNode): boolean {
        return false;
    }

    /**
     * Returns all FreNodes that are defined as additional namespaces for `element'.
     * @param element
     */
    public additionalNamespaces(element: FreNode): FreNode[] {
        const result: FreNode[] = [];

        return result;
    }
}
