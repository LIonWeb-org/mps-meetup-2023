// Generated by the Freon Language Generator.
import {
    MobxModelElementImpl,
    observableprim,
    observablepartlist,
    FreModel,
    FreLanguage,
    FreParseLocation,
    FreUtils,
    matchElementList
} from "@freon4dsl/core";
import { PropertiesModelUnitType, PropertiesFile, PropertiesMetaType } from "./internal";

/**
 * Class MainModel is the implementation of the model with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to any changes in the state of its properties.
 */
export class MainModel extends MobxModelElementImpl implements FreModel {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data
     */
    static create(data: Partial<MainModel>): MainModel {
        const result = new MainModel();
        if (!!data.name) {
            result.name = data.name;
        }
        if (!!data.files) {
            data.files.forEach(x => result.files.push(x));
        }
        if (!!data.parseLocation) {
            result.parseLocation = data.parseLocation;
        }
        return result;
    }

    readonly $typename: PropertiesMetaType = "MainModel"; // holds the metatype in the form of a string
    $id: string; // a unique identifier
    parseLocation: FreParseLocation; // if relevant, the location of this element within the source from which it is parsed
    name: string; // implementation of name
    files: PropertiesFile[]; // implementation of part 'files'

    constructor(id?: string) {
        super();
        if (!!id) {
            this.$id = id;
        } else {
            this.$id = FreUtils.ID(); // uuid.v4();
        }

        // Both 'observablepart' and 'observablepartlist' change the get and set of the attribute
        // such that the parent-part relationship is consistently maintained,
        // and make sure the part is observable. In lists no 'null' or 'undefined' values are allowed.
        observablepartlist(this, "files");
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    freLanguageConcept(): PropertiesMetaType {
        return this.$typename;
    }

    /**
     * Returns the unique identifier of this instance.
     */
    freId(): string {
        return this.$id;
    }

    /**
     * Returns true if this instance is a model concept.
     */
    freIsModel(): boolean {
        return true;
    }

    /**
     * Returns true if this instance is a model unit.
     */
    freIsUnit(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is an expression concept.
     */
    freIsExpression(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    freIsBinaryExpression(): boolean {
        return false;
    }
    /**
     * A convenience method that copies this instance into a new object.
     */
    copy(): MainModel {
        const result = new MainModel();
        if (!!this.name) {
            result.name = this.name;
        }
        if (!!this.files) {
            this.files.forEach(x => result.files.push(x.copy()));
        }
        return result;
    }
    /**
     * Matches a partial instance of this class to this object
     * based on the properties defined in the partial.
     * @param toBeMatched
     */
    public match(toBeMatched: Partial<MainModel>): boolean {
        let result: boolean = true;
        if (result && toBeMatched.name !== null && toBeMatched.name !== undefined && toBeMatched.name.length > 0) {
            result = result && this.name === toBeMatched.name;
        }
        if (result && !!toBeMatched.files) {
            result = result && matchElementList(this.files, toBeMatched.files);
        }
        return result;
    }

    /**
     * A convenience method that finds a unit of this model based on its name and 'metatype'.
     * @param name
     * @param metatype
     */
    findUnit(name: string, metatype?: PropertiesMetaType): PropertiesModelUnitType {
        let result: PropertiesModelUnitType = null;
        result = this.files.find(mod => mod.name === name);
        if (!!result && !!metatype) {
            if (FreLanguage.getInstance().metaConformsToType(result, metatype)) {
                return result;
            }
        } else {
            return result;
        }
        return null;
    }

    /**
     * Replaces a model unit by a new one. Used for swapping between complete units and unit public interfaces.
     * Returns false if the replacement could not be done, e.g. because 'oldUnit' is not a child of this object.
     * @param oldUnit
     * @param newUnit
     */
    replaceUnit(oldUnit: PropertiesModelUnitType, newUnit: PropertiesModelUnitType): boolean {
        if (oldUnit.freLanguageConcept() !== newUnit.freLanguageConcept()) {
            return false;
        }
        if (oldUnit.freOwnerDescriptor().owner !== this) {
            return false;
        }
        // we must store the interface in the same place as the old unit, which info is held in FreContainer()
        if (oldUnit.freLanguageConcept() === "PropertiesFile" && oldUnit.freOwnerDescriptor().propertyName === "files") {
            const index = this.files.indexOf(oldUnit as PropertiesFile);
            this.files.splice(index, 1, newUnit as PropertiesFile);
        } else {
            return false;
        }
        return true;
    }

    /**
     * Adds a model unit. Returns false if anything goes wrong.
     *
     * @param newUnit
     */
    addUnit(newUnit: PropertiesModelUnitType): boolean {
        if (!!newUnit) {
            const myMetatype = newUnit.freLanguageConcept();
            switch (myMetatype) {
                case "PropertiesFile": {
                    this.files.push(newUnit as PropertiesFile);
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Removes a model unit. Returns false if anything goes wrong.
     *
     * @param oldUnit
     */
    removeUnit(oldUnit: PropertiesModelUnitType): boolean {
        if (!!oldUnit) {
            const myMetatype = oldUnit.freLanguageConcept();
            switch (myMetatype) {
                case "PropertiesFile": {
                    this.files.splice(this.files.indexOf(oldUnit as PropertiesFile), 1);
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Returns an empty model unit of type 'unitTypeName' within 'model'.
     *
     * @param model
     * @param unitTypeName
     */
    newUnit(typename: PropertiesMetaType): PropertiesModelUnitType {
        switch (typename) {
            case "PropertiesFile": {
                const unit: PropertiesFile = new PropertiesFile();
                this.files.push(unit as PropertiesFile);
                return unit;
            }
        }
        return null;
    }

    /**
     * Returns a list of model units.
     */
    getUnits(): PropertiesModelUnitType[] {
        let result: PropertiesModelUnitType[] = [];
        result = result.concat(this.files);
        return result;
    }

    /**
     * Returns a list of model units of type 'type'.
     */
    getUnitsForType(type: string): PropertiesModelUnitType[] {
        switch (type) {
            case "PropertiesFile": {
                return this.files;
            }
        }
        return [];
    }
}
