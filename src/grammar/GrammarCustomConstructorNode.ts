import TreeNode from "../base/TreeNode"
import TreeUtils from "../base/TreeUtils"

import GrammarBackedNonTerminalNode from "./GrammarBackedNonTerminalNode"
import GrammarBackedAnyNode from "./GrammarBackedAnyNode"
import GrammarBackedTerminalNode from "./GrammarBackedTerminalNode"
import GrammarBackedErrorNode from "./GrammarBackedErrorNode"
import GrammarConstants from "./GrammarConstants"

import types from "../types"

class GrammarCustomConstructorNode extends TreeNode {
  _getNodeConstructorFilePath() {
    return this.getWord(2)
  }

  // todo: allow for deeper nesting? use Utils.resolveProperty
  getSubModuleName() {
    return this.getWord(3)
  }

  _getBuiltInConstructors() {
    return {
      ErrorNode: GrammarBackedErrorNode,
      TerminalNode: GrammarBackedTerminalNode,
      NonTerminalNode: GrammarBackedNonTerminalNode,
      AnyNode: GrammarBackedAnyNode
    }
  }

  getErrors(): types.ParseError[] {
    if (this.getDefinedConstructor()) return []
    const parent = this.getParent()
    const context = parent.isRoot() ? "" : parent.getKeyword()
    const point = this.getPoint()
    return [
      {
        kind: GrammarConstants.invalidConstructorPathError,
        subkind: this.getKeyword(),
        level: point.x,
        context: context,
        message: `${GrammarConstants.invalidConstructorPathError} no constructor "${this.getLine()}" found at line ${
          point.y
        }`
      }
    ]
  }

  getDefinedConstructor(): types.RunTimeNodeConstructor {
    const filepath = this._getNodeConstructorFilePath()
    const builtIns = this._getBuiltInConstructors()
    const builtIn = builtIns[filepath]

    if (builtIn) return builtIn

    const rootPath = this.getRootNode().getTheGrammarFilePath()

    const basePath = TreeUtils.getPathWithoutFileName(rootPath) + "/"
    const fullPath = filepath.startsWith("/") ? filepath : basePath + filepath

    // todo: remove "window" below?
    if (!this.isNodeJs()) {
      const cls = window[TreeUtils.getClassNameFromFilePath(filepath)]
      if (!cls) console.error(`WARNING: class ${filepath} not found.`)
      return cls
    }

    const theModule = require(fullPath)
    const subModule = this.getSubModuleName()
    return subModule ? theModule[subModule] : theModule
  }
}

export default GrammarCustomConstructorNode
