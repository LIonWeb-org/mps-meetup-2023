// Generated by the Freon Language Generator.
import { Box, BoxUtil, BoxFactory, FreNode, FreBoxProvider, FreProjectionHandler, FreLanguage } from "@freon4dsl/core";

import { BooleanValue } from "../../language/gen";

/**
 * This class implements the box provider for a single node of type BooleanValue.
 * The box provider is able to create the (tree of) boxes for the node, based
 * on the projections that are currently selected by the user.
 * The top of the tree of boxes is always a box of type ElementBox, which is
 * a box that will never be rendered itself, only its content will. Thus, we
 * have a stable entry in the complete box tree for every FreNode node.
 */
export class BooleanValueBoxProvider extends FreBoxProvider {
    constructor(mainHandler: FreProjectionHandler) {
        super(mainHandler);
        this.knownBoxProjections = ["property_file_like", "default"];
        this.knownTableProjections = ["default"];
        this.conceptName = "BooleanValue";
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
        return BoxUtil.booleanBox(this._element as BooleanValue, "value", { yes: "true", no: "false" });
    }

    private getDefault(): Box {
        return BoxFactory.verticalLayout(this._element as BooleanValue, "BooleanValue-overall", "", [
            BoxFactory.horizontalLayout(
                this._element as BooleanValue,
                "BooleanValue-hlist-line-0",
                "",
                [
                    BoxUtil.labelBox(this._element as BooleanValue, "BooleanValue", "top-1-line-0-item-0"),
                    BoxUtil.labelBox(this._element as BooleanValue, "{", "top-1-line-0-item-1")
                ],
                { selectable: false }
            ),
            BoxUtil.indentBox(
                this._element as BooleanValue,
                4,
                "1",
                BoxFactory.horizontalLayout(
                    this._element as BooleanValue,
                    "BooleanValue-hlist-line-1",
                    "",
                    [
                        BoxUtil.labelBox(this._element as BooleanValue, "value", "top-1-line-1-item-0"),
                        BoxUtil.booleanBox(this._element as BooleanValue, "value", { yes: "true", no: "false" })
                    ],
                    { selectable: false }
                )
            ),
            BoxUtil.labelBox(this._element as BooleanValue, "}", "top-1-line-2-item-0")
        ]);
    }
}
