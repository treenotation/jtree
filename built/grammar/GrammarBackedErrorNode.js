"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRuntimeNonRootNode_1 = require("./AbstractRuntimeNonRootNode");
const TreeErrorTypes_1 = require("./TreeErrorTypes");
class GrammarBackedErrorNode extends AbstractRuntimeNonRootNode_1.default {
    getLineCellTypes() {
        return "error ".repeat(this.getWords().length).trim();
    }
    getErrors() {
        return [new TreeErrorTypes_1.UnknownNodeTypeError(this)];
    }
}
exports.default = GrammarBackedErrorNode;
