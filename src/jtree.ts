import TreeUtils from "./base/TreeUtils"
import TreeNode from "./base/TreeNode"

import {
  GrammarProgram,
  AbstractRuntimeProgramRootNode,
  GrammarBackedTerminalNode,
  GrammarBackedNonTerminalNode,
  CompiledLanguageRootNode,
  CompiledLanguageNonRootNode,
  GrammarBackedBlobNode
} from "./GrammarLanguage"
import UnknownGrammarProgram from "./tools/UnknownGrammarProgram"
import TreeNotationCodeMirrorMode from "./codemirror/TreeNotationCodeMirrorMode"

class jtree {
  static programRoot = AbstractRuntimeProgramRootNode
  static Utils = TreeUtils
  static TreeNode = TreeNode
  static NonTerminalNode = GrammarBackedNonTerminalNode
  static TerminalNode = GrammarBackedTerminalNode
  static GrammarProgram = GrammarProgram
  static CompiledLanguageRootNode = CompiledLanguageRootNode
  static CompiledLanguageNonRootNode = CompiledLanguageNonRootNode
  static UnknownGrammarProgram = UnknownGrammarProgram
  static TreeNotationCodeMirrorMode = TreeNotationCodeMirrorMode
  static getVersion = () => "25.2.0"
}

export default jtree
