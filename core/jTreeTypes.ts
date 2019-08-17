//tooling product jtree.node.js
//tooling product jtree.browser.js
//tooling product commandLineApp.node.js
//tooling product treeBase.node.js
//tooling product SandboxServer.node.js
//tooling product core.test.browser.js
//tooling product abstractBuilder.node.js

export namespace jTreeTypes {
  export interface point {
    x: int
    y: int
  } // Point on the Cartesian plane where the node is located. Assumes canonical whitespace delimiters. -Y = Y.

  export interface inheritanceInfo {
    node: treeNode
    nodeId: string
    parentId: string
  }

  export interface TreeError {
    getLineIndex(): positiveInt
    getLine(): line
    getExtension(): fileExtension
    getNode(): treeNode
    getErrorTypeName(): string
    getCellIndex(): positiveInt
    hasSuggestion(): boolean
    getSuggestionMessage(): string
    applySuggestion(): void
    getMessage(): string
  }

  export interface regexTest {
    regex: RegExp
    nodeConstructor: TreeNodeConstructor
  }

  export interface regexTestDef {
    regex: string
    nodeConstructor: string
  }

  export declare type treeNode = any
  export declare type line = string // no YI (\n)
  export declare type int = number
  export declare type positiveInt = number
  export declare type stringMap = { [firstWord: string]: any }
  export declare type queryStringMap = { [firstWord: string]: any }
  export declare type htmlString = string
  export declare type xmlString = string
  export declare type dataTable = (any[])[]
  export declare type delimiter = string

  // A subset of JSON that has the property that it translates to and from JSON and Tree identically.
  // So, this rules out JSON objects with non-string types or spaces in their key name.
  // For closer fidelity to JSON, use a tree language.
  export declare type jsonSubset = string

  export declare type formatString = string // "Hello {name}! You are {age} years old."
  export declare type firstWordPath = string // user emailAddress
  export declare type pathVector = int[] // example: [0,1,1]
  export declare type word = string // string that cannot contain the YI, XI or ZI
  export declare type firstWord = word
  export declare type triInt = int // -1 0 1
  export declare type filepath = string
  export declare type url = string
  export declare type typeScriptFilePath = filepath
  export declare type treeProgramFilePath = filepath
  export declare type grammarFilePath = filepath
  export declare type fileName = string
  export declare type grammarName = string
  export declare type globPattern = string
  export declare type highlightScope = string
  export declare type fileExtension = string
  export declare type globPath = string // * firstWord firstWord *
  export declare type targetLanguageId = fileExtension
  export declare type sortFn = (nodeA: treeNode, nodeB: treeNode) => triInt
  export declare type filterFn = (node: treeNode, index: int) => boolean
  export declare type forEachFn = (node: treeNode, index: int) => void
  export declare type everyFn = (node: treeNode, index: int) => boolean
  export declare type nodeToStringFn = (node: treeNode) => string
  export declare type formatFunction = (val: string, rowIndex: positiveInt, colIndex: positiveInt) => string
  export declare type nodeIdRenameMap = { [oldNodeTypeId: string]: string }
  export declare type typeScriptCode = string
  export declare type javascriptCode = string
  export declare type id = string
  export declare type portNumber = int

  export declare type testTree = { [testName: string]: (equalMethod: Function) => void }

  export declare type idAccessorFunction = (tree: treeNode) => id

  export declare type nodeTypeId = string // todo: add character restrictions.
  export declare type cellTypeId = string // todo: add character restrictions.

  export declare type semanticVersion = string

  export declare type absoluteFilePath = filepath
  export declare type absoluteFolderPath = absoluteFilePath

  export declare type javascriptClassPath = string // "jtree.Foo.Bar"

  export declare type children = string | Object | treeNode | any // todo: specify better.

  export declare type TreeNodeConstructor = Function // A constructor extending TreeNodeConstructor
  export declare type RunTimeNodeConstructor = Function // A constructor extending AbstractRuntimeNode
  export declare type TreeProgramConstructor = Function // A constructor extending AbstractRuntimeNode
  export declare type treeProgram = treeNode // A constructor extending AbstractRuntimeNode

  export declare type upgradeFunction = (tree: treeNode) => treeNode
  export declare type upgradeToMap = { [toVersion: string]: upgradeFunction }
  export declare type upgradeFromMap = { [fromVersion: string]: upgradeToMap }

  export declare type firstWordToNodeConstructorMap = { [firstWord: string]: TreeNodeConstructor }
}

/*TSC_HACK*/ export default jTreeTypes
