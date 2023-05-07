// Generated by the Freon Language Generator.
import { Box, BoxUtil, BoxFactory, FreNode, FreBoxProvider, FreProjectionHandler, FreLanguage } from "@freon4dsl/core";

import { Property } from "../../language/gen";

/**
 * This class implements the box provider for a single node of type Property.
 * The box provider is able to create the (tree of) boxes for the node, based
 * on the projections that are currently selected by the user.
 * The top of the tree of boxes is always a box of type ElementBox, which is
 * a box that will never be rendered itself, only its content will. Thus, we
 * have a stable entry in the complete box tree for every FreNode node.
 */
export class PropertyBoxProvider extends FreBoxProvider {
    constructor(mainHandler: FreProjectionHandler) {
        super(mainHandler);
        this.knownBoxProjections = ["property_file_like", "default"];
        this.knownTableProjections = ["default"];
        this.conceptName = "Property";
    }

    protected getContent(projectionName: string): Box {
        // console.log("GET CONTENT " + this._element?.freId() + ' ' +  this._element?.freLanguageConcept() + ' ' + projectionName);
        // see if we need to use a custom projection
        if (!this.knownBoxProjections.includes(projectionName) && !this.knownTableProjections.includes(projectionName)) {
            const BOX: Box = this.mainHandler.executeCustomProjection(this._element, projectionName);
            if (!!BOX) {
                // found one, so return it
                return BOX;
            }
        } else {
            // select the box to return based on the projectionName
            if (projectionName === "property_file_like") {
                return this.getProperty_file_like();
            } else if (projectionName === "default") {
                return this.getDefault();
            }
        }
        // in all other cases, return the default
        return this.getDefault();
    }

    private getProperty_file_like(): Box {
        return BoxFactory.horizontalLayout(
            this._element as Property,
            "Property-hlist-line-0",
            "",
            [
                BoxUtil.textBox(this._element as Property, "name"),
                BoxUtil.labelBox(this._element as Property, "=", "top-1-line-0-item-1"),
                BoxUtil.getBoxOrAction(this._element as Property, "value", "Value", this.mainHandler)
            ],
            { selectable: false }
        );
    }

    private getDefault(): Box {
        return BoxFactory.verticalLayout(this._element as Property, "Property-overall", "", [
            BoxFactory.horizontalLayout(
                this._element as Property,
                "Property-hlist-line-0",
                "",
                [
                    BoxUtil.labelBox(this._element as Property, "Property", "top-1-line-0-item-0"),
                    BoxUtil.textBox(this._element as Property, "name"),
                    BoxUtil.labelBox(this._element as Property, "{", "top-1-line-0-item-2")
                ],
                { selectable: false }
            ),
            BoxUtil.indentBox(
                this._element as Property,
                4,
                "1",
                BoxFactory.horizontalLayout(
                    this._element as Property,
                    "Property-hlist-line-1",
                    "",
                    [
                        BoxUtil.labelBox(this._element as Property, "value", "top-1-line-1-item-0"),
                        BoxUtil.getBoxOrAction(this._element as Property, "value", "Value", this.mainHandler)
                    ],
                    { selectable: false }
                )
            ),
            BoxUtil.labelBox(this._element as Property, "}", "top-1-line-2-item-0")
        ]);
    }
}
