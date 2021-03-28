/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@component-controls/blocks"), require("@component-controls/core"), require("@component-controls/store"), require("fuse.js"), require("theme-ui"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@component-controls/blocks", "@component-controls/core", "@component-controls/store", "fuse.js", "theme-ui", "React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@component-controls/blocks"), require("@component-controls/core"), require("@component-controls/store"), require("fuse.js"), require("theme-ui"), require("react")) : factory(root["@component-controls/blocks"], root["@component-controls/core"], root["@component-controls/store"], root["fuse.js"], root["theme-ui"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__9553__, __WEBPACK_EXTERNAL_MODULE__6647__, __WEBPACK_EXTERNAL_MODULE__2348__, __WEBPACK_EXTERNAL_MODULE__3408__, __WEBPACK_EXTERNAL_MODULE__7631__, __WEBPACK_EXTERNAL_MODULE__8798__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4839:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(4115);

__webpack_require__(2501);

__webpack_require__(7233);

__webpack_require__(8673);

__webpack_require__(634);

__webpack_require__(796);

__webpack_require__(8145);

__webpack_require__(4908);

__webpack_require__(7950);

__webpack_require__(3105);

__webpack_require__(6936);

__webpack_require__(8695);

__webpack_require__(1939);

__webpack_require__(5342);

__webpack_require__(4769);

__webpack_require__(9805);

__webpack_require__(9228);

__webpack_require__(8188);

__webpack_require__(5735);

__webpack_require__(6886);

__webpack_require__(6781);

__webpack_require__(4083);

__webpack_require__(8319);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var path = __webpack_require__(1023);

var _require = __webpack_require__(6647),
    loadPageTab = _require.loadPageTab;

var configJSON = undefined;

var search = __webpack_require__(4910);

var story_0 = __webpack_require__(5547);

var contexts = [];
contexts.push({
  folder: "/Users/atanasster/component-controls/ui/components/src/Header",
  req: __webpack_require__(2072)
});
var store = {"stores":[{"filePath":"/Users/atanasster/component-controls/ui/components/src/Header/Header.stories.tsx","stories":{"overview":{"loc":{"start":{"column":33,"line":11},"end":{"column":62,"line":11}},"name":"overview","id":"overview","arguments":[],"source":"() => <Header>header</Header>"}},"doc":{"title":"Components/Header","component":"Header","category":"Display","componentsLookup":{"Header":"360a1a2b3bb1220cb76752ce28374c51"},"package":"95d22e88229c88536b101148951a375a","dateModified":"2021-03-05T05:18:11.433Z","date":"2021-03-05T05:18:11.433Z","fileName":"/Users/atanasster/component-controls/ui/components/src/Header/Header.stories.tsx"}}],"components":{"360a1a2b3bb1220cb76752ce28374c51":{"name":"Header","from":".","externalDependencies":{"react":[{"name":"FC","importedName":"FC"}],"theme-ui":[{"name":"jsx","importedName":"jsx"},{"name":"Flex","importedName":"Flex"},{"name":"BoxProps","importedName":"BoxProps"}]},"localDependencies":{},"importedName":"Header","jsx":[{"children":[],"name":"Flex","attributes":["as","variant"],"from":"theme-ui","importedName":"Flex"}],"request":"/Users/atanasster/component-controls/ui/components/src/Header/Header.tsx","fileName":"Header.tsx","package":"360a1a2b3bb1220cb76752ce28374c51","info":{"tags":{},"description":"A page header component","displayName":"Header","methods":[],"props":{"slot":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"style":{"parentName":"HTMLAttributes","type":{"name":"CSSProperties","raw":"CSSProperties"}},"title":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"key":{"parentName":"Attributes","type":{"name":"union","value":[{"name":"string"},{"name":"number"},{"name":"null"}],"raw":"string | number | null"}},"defaultChecked":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"defaultValue":{"parentName":"HTMLAttributes","type":{"name":"array","value":[{"name":"string | number | readonly string"}],"raw":"string | number | readonly string[]"}},"suppressContentEditableWarning":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"suppressHydrationWarning":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"accessKey":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"className":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"contentEditable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"inherit"}],"raw":"boolean | \"true\" | \"false\" | \"inherit\""}},"contextMenu":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"dir":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"draggable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"hidden":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"id":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"lang":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"placeholder":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"spellCheck":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"tabIndex":{"parentName":"HTMLAttributes","type":{"name":"number","raw":"number"}},"translate":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"yes"},{"name":"no"}],"raw":"\"yes\" | \"no\""}},"radioGroup":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"role":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"about":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"datatype":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"inlist":{"parentName":"HTMLAttributes","type":{"name":"any","raw":"any"}},"prefix":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"property":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"resource":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"typeof":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"vocab":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoCapitalize":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoCorrect":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoSave":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"color":{"description":"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)","parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemProp":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemScope":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"itemType":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemID":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemRef":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"results":{"parentName":"HTMLAttributes","type":{"name":"number","raw":"number"}},"security":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"unselectable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"on"},{"name":"off"}],"raw":"\"on\" | \"off\""}},"inputMode":{"description":"Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https ://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"text"},{"name":"none"},{"name":"tel"},{"name":"url"},{"name":"email"},{"name":"numeric"},{"name":"decimal"},{"name":"search"}],"raw":"\"text\" | \"none\" | \"tel\" | \"url\" | \"email\" | \"numeric\" | \"decimal\" | \"search\""}},"is":{"description":"Specify that a standard HTML element should behave like a defined custom built-in element\n@see https ://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"aria-activedescendant":{"description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-atomic":{"description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-autocomplete":{"description":"Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"none"},{"name":"inline"},{"name":"list"},{"name":"both"}],"raw":"\"none\" | \"inline\" | \"list\" | \"both\""}},"aria-busy":{"description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-checked":{"description":"Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"mixed"}],"raw":"boolean | \"true\" | \"false\" | \"mixed\""}},"aria-colcount":{"description":"Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-colindex":{"description":"Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-colspan":{"description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-controls":{"description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-current":{"description":"Indicates the element that represents the current item within a container or set of related elements.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"time"},{"name":"true"},{"name":"false"},{"name":"page"},{"name":"step"},{"name":"location"},{"name":"date"}],"raw":"boolean | \"time\" | \"true\" | \"false\" | \"page\" | \"step\" | \"location\" | \"date\""}},"aria-describedby":{"description":"Identifies the element (or elements) that describes the object.\n@see aria-labelledby","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-details":{"description":"Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-disabled":{"description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-dropeffect":{"description":"Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"link"},{"name":"none"},{"name":"copy"},{"name":"execute"},{"name":"move"},{"name":"popup"}],"raw":"\"link\" | \"none\" | \"copy\" | \"execute\" | \"move\" | \"popup\""}},"aria-errormessage":{"description":"Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-expanded":{"description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-flowto":{"description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-grabbed":{"description":"Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-haspopup":{"description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"dialog"},{"name":"menu"},{"name":"true"},{"name":"false"},{"name":"listbox"},{"name":"tree"},{"name":"grid"}],"raw":"boolean | \"dialog\" | \"menu\" | \"true\" | \"false\" | \"listbox\" | \"tree\" | \"grid\""}},"aria-hidden":{"description":"Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-invalid":{"description":"Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"grammar"},{"name":"spelling"}],"raw":"boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\""}},"aria-keyshortcuts":{"description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-label":{"description":"Defines a string value that labels the current element.\n@see aria-labelledby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-labelledby":{"description":"Identifies the element (or elements) that labels the current element.\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-level":{"description":"Defines the hierarchical level of an element within a structure.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-live":{"description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"off"},{"name":"assertive"},{"name":"polite"}],"raw":"\"off\" | \"assertive\" | \"polite\""}},"aria-modal":{"description":"Indicates whether an element is modal when displayed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-multiline":{"description":"Indicates whether a text box accepts multiple lines of input or only a single line.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-multiselectable":{"description":"Indicates that the user may select more than one item from the current selectable descendants.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-orientation":{"description":"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"horizontal"},{"name":"vertical"}],"raw":"\"horizontal\" | \"vertical\""}},"aria-owns":{"description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-placeholder":{"description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-posinset":{"description":"Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-pressed":{"description":"Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"mixed"}],"raw":"boolean | \"true\" | \"false\" | \"mixed\""}},"aria-readonly":{"description":"Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-relevant":{"description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"text"},{"name":"additions"},{"name":"additions removals"},{"name":"additions text"},{"name":"all"},{"name":"removals"},{"name":"removals additions"},{"name":"removals text"},{"name":"text additions"},{"name":"text removals"}],"raw":"\"text\" | \"additions\" | \"additions removals\" | \"additions text\" | \"all\" | \"removals\" | \"removals additions\" | \"removals text\" | \"text additions\" | \"text removals\""}},"aria-required":{"description":"Indicates that user input is required on the element before a form may be submitted.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-roledescription":{"description":"Defines a human-readable, author-localized description for the role of an element.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-rowcount":{"description":"Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-rowindex":{"description":"Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-rowspan":{"description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-selected":{"description":"Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-setsize":{"description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-sort":{"description":"Indicates if items in a table or grid are sorted in ascending or descending order.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"none"},{"name":"ascending"},{"name":"descending"},{"name":"other"}],"raw":"\"none\" | \"ascending\" | \"descending\" | \"other\""}},"aria-valuemax":{"description":"Defines the maximum allowed value for a range widget.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuemin":{"description":"Defines the minimum allowed value for a range widget.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuenow":{"description":"Defines the current value for a range widget.\n@see aria-valuetext.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuetext":{"description":"Defines the human readable text alternative of aria-valuenow for a range widget.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"dangerouslySetInnerHTML":{"parentName":"DOMAttributes","type":{"name":"object","raw":"{ __html: string; }"}},"onCopy":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onCopyCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onCut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onCutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onPaste":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onPasteCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLDivElement>) => void)"}},"onCompositionEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onCompositionEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onCompositionStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onCompositionStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onCompositionUpdate":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onCompositionUpdateCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLDivElement>) => void)"}},"onFocus":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLDivElement>) => void)"}},"onFocusCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLDivElement>) => void)"}},"onBlur":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLDivElement>) => void)"}},"onBlurCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLDivElement>) => void)"}},"onChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onBeforeInput":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onBeforeInputCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onInput":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onInputCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onReset":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onResetCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onSubmit":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onSubmitCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onInvalid":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onInvalidCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLDivElement>) => void)"}},"onLoad":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onError":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onErrorCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onKeyDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onKeyDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onKeyPress":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onKeyPressCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onKeyUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onKeyUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLDivElement>) => void)"}},"onAbort":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onAbortCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onCanPlay":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onCanPlayCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onCanPlayThrough":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onCanPlayThroughCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onDurationChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onDurationChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEmptied":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEmptiedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEncrypted":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEncryptedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEnded":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onEndedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadedData":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadedDataCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadedMetadata":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadedMetadataCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onLoadStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPause":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPauseCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPlay":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPlayCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPlaying":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onPlayingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onProgress":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onProgressCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onRateChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onRateChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSeeked":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSeekedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSeeking":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSeekingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onStalled":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onStalledCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSuspend":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSuspendCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onTimeUpdate":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onTimeUpdateCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onVolumeChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onVolumeChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onWaiting":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onWaitingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onAuxClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onAuxClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onContextMenu":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onContextMenuCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onDoubleClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onDoubleClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onDrag":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragEnterCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragExit":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragExitCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragLeaveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDragStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDrop":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onDropCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLDivElement>) => void)"}},"onMouseDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseOut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseOutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onMouseUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},"onSelect":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onSelectCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLDivElement, Event>) => void)"}},"onTouchCancel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchCancelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onTouchStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLDivElement>) => void)"}},"onPointerDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerCancel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerCancelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerEnterCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerLeaveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerOut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onPointerOutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onGotPointerCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onGotPointerCaptureCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onLostPointerCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onLostPointerCaptureCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLDivElement>) => void)"}},"onScroll":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: UIEvent<HTMLDivElement, UIEvent>) => void)"}},"onScrollCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: UIEvent<HTMLDivElement, UIEvent>) => void)"}},"onWheel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: WheelEvent<HTMLDivElement>) => void)"}},"onWheelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: WheelEvent<HTMLDivElement>) => void)"}},"onAnimationStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onAnimationStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onAnimationEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onAnimationEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onAnimationIteration":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onAnimationIterationCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLDivElement>) => void)"}},"onTransitionEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TransitionEvent<HTMLDivElement>) => void)"}},"onTransitionEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TransitionEvent<HTMLDivElement>) => void)"}},"ref":{"type":{"name":"function","raw":"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},"as":{"parentName":"BoxOwnProps","type":{"name":"union","value":[{"name":"symbol"},{"name":"object"},{"name":"div"},{"name":"a"},{"name":"abbr"},{"name":"address"},{"name":"area"},{"name":"article"},{"name":"aside"},{"name":"audio"},{"name":"b"},{"name":"base"},{"name":"bdi"},{"name":"bdo"},{"name":"big"},{"name":"blockquote"},{"name":"body"},{"name":"br"},{"name":"button"},{"name":"canvas"},{"name":"... 157 more ..."}],"raw":"\"symbol\" | \"object\" | \"div\" | \"a\" | \"abbr\" | \"address\" | \"area\" | \"article\" | \"aside\" | \"audio\" | \"b\" | \"base\" | \"bdi\" | \"bdo\" | \"big\" | \"blockquote\" | \"body\" | \"br\" | \"button\" | \"canvas\" | ... 157 more ..."}},"variant":{"parentName":"BoxOwnProps","type":{"name":"string","raw":"string"}},"css":{"parentName":"BoxOwnProps","type":{"name":"Interpolation<any>","raw":"Interpolation<any>"}},"sx":{"parentName":"BoxOwnProps","type":{"name":"union","value":[{"name":"ThemeUICSSObject"},{"name":"ThemeDerivedStyles"}],"raw":"ThemeUICSSObject | ThemeDerivedStyles"}},"m":{"description":"Margin on top, left, bottom and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"margin":{"description":"Margin on top, left, bottom and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"mt":{"description":"Margin on top","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginTop":{"description":"Margin on top","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"mr":{"description":"Margin on right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginRight":{"description":"Margin on right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"mb":{"description":"Margin on bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginBottom":{"description":"Margin on bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"ml":{"description":"Margin on left","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginLeft":{"description":"Margin on left","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"mx":{"description":"Margin on left and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginX":{"description":"Margin on left and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"my":{"description":"Margin on top and bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"marginY":{"description":"Margin on top and bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"p":{"description":"Padding on top, left, bottom and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"padding":{"description":"Padding on top, left, bottom and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"pt":{"description":"Padding on top","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingTop":{"description":"Padding on top","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"pr":{"description":"Padding on right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingRight":{"description":"Padding on right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"pb":{"description":"Padding on bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingBottom":{"description":"Padding on bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"pl":{"description":"Padding on left","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingLeft":{"description":"Padding on left","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"px":{"description":"Padding on left and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingX":{"description":"Padding on left and right","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"py":{"description":"Padding on top and bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"paddingY":{"description":"Padding on top and bottom","parentName":"SpaceProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"bg":{"description":"The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)","parentName":"BackgroundColorProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"backgroundColor":{"parentName":"BackgroundColorProps","type":{"name":"function","raw":"string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined"}},"opacity":{"description":"The opacity CSS property sets the transparency of an element or the degree to which content\nbehind an element is visible.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)","parentName":"OpacityProps","type":{"name":"function","raw":"\"inherit\" | \"-moz-initial\" | \"initial\" | \"revert\" | \"unset\" | (string & {}) | (number & {}) | (\"inherit\" | \"-moz-initial\" | \"initial\" | \"revert\" | \"unset\" | (string & {}) | (number & {}) | null)[] | { ...; } | null"}}}},"fileInfo":{"dateCreated":"2020-06-16T11:41:03.000Z","dateModified":"2020-06-16T11:41:03.000Z","sloc":{"total":12,"source":7,"comment":4,"single":0,"block":4,"mixed":0,"empty":1,"todo":0,"blockEmpty":0},"commits":[{"hash":"cbeb180c1aaf10c0ba0c754a6de0ff801c477c70","subject":"chore: merge app-components into components","authorName":"atanasster","authorDate":"2020-06-16T11:41:03.000Z","authorEmail":"atanasster@gmail.com","committerName":"atanasster","committerDate":"2020-06-16T11:41:03.000Z","committerEmail":"atanasster@gmail.com"}]}}},"packages":{"360a1a2b3bb1220cb76752ce28374c51":{"fileHash":"360a1a2b3bb1220cb76752ce28374c51","name":"@component-controls/components","version":"3.4.5","repository":{"browse":"https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Header/Header.tsx","docs":"https://github.com/ccontrols/component-controls/tree/master#readme","issues":"https://github.com/ccontrols/component-controls/issues"},"dependencies":{"@primer/octicons-react":"^10.0.0","@theme-ui/color":"^0.6.0-alpha.7","@theme-ui/css":"^0.6.0-alpha.7","@theme-ui/match-media":"^0.6.0-alpha.7","@theme-ui/presets":"^0.6.0-alpha.7","copy-to-clipboard":"^3.2.1","fast-memoize":"^2.5.2","markdown-to-jsx":"^6.11.0","md5":"^2.3.0","mdx-utils":"*","prism-react-renderer":"^1.0.2","react-animate-height":"^2.0.20","react-popper-tooltip":"^3.1.0","react-switch":"^5.0.1","react-table":"^7.0.0","react-tabs":"^3.1.0","scroll-into-view-if-needed":"^2.2.25","theme-ui":"^0.6.0-alpha.7"},"devDependencies":{"@component-controls/jest-snapshots":"^3.4.5","@component-controls/ts-markdown-docs":"^2.6.0","@theme-ui/css":"^0.6.0-alpha.7","@types/markdown-to-jsx":"^6.11.0","@types/md5":"^2.3.0","@types/react":"^16.9.34","@types/react-table":"^7.0.10","@types/react-tabs":"^2.3.1","cross-env":"^5.2.1","eslint":"^6.5.1","react":"^17.0.1","react-dom":"^17.0.1","typescript":"^4.0.5"},"peerDependencies":{"@theme-ui/css":">= 0.6.0-alpha.7","react":"^16.8.0 || ^17","react-dom":"^16.8.0 || ^17"}},"95d22e88229c88536b101148951a375a":{"fileHash":"95d22e88229c88536b101148951a375a","name":"@component-controls/components","version":"3.4.5","repository":{"browse":"https://github.com/ccontrols/component-controls/tree/master/ui/components/src/Header/Header.stories.tsx","docs":"https://github.com/ccontrols/component-controls/tree/master#readme","issues":"https://github.com/ccontrols/component-controls/issues"},"dependencies":{"@primer/octicons-react":"^10.0.0","@theme-ui/color":"^0.6.0-alpha.7","@theme-ui/css":"^0.6.0-alpha.7","@theme-ui/match-media":"^0.6.0-alpha.7","@theme-ui/presets":"^0.6.0-alpha.7","copy-to-clipboard":"^3.2.1","fast-memoize":"^2.5.2","markdown-to-jsx":"^6.11.0","md5":"^2.3.0","mdx-utils":"*","prism-react-renderer":"^1.0.2","react-animate-height":"^2.0.20","react-popper-tooltip":"^3.1.0","react-switch":"^5.0.1","react-table":"^7.0.0","react-tabs":"^3.1.0","scroll-into-view-if-needed":"^2.2.25","theme-ui":"^0.6.0-alpha.7"},"devDependencies":{"@component-controls/jest-snapshots":"^3.4.5","@component-controls/ts-markdown-docs":"^2.6.0","@theme-ui/css":"^0.6.0-alpha.7","@types/markdown-to-jsx":"^6.11.0","@types/md5":"^2.3.0","@types/react":"^16.9.34","@types/react-table":"^7.0.10","@types/react-tabs":"^2.3.1","cross-env":"^5.2.1","eslint":"^6.5.1","react":"^17.0.1","react-dom":"^17.0.1","typescript":"^4.0.5"},"peerDependencies":{"@theme-ui/css":">= 0.6.0-alpha.7","react":"^16.8.0 || ^17","react-dom":"^16.8.0 || ^17"}}},"config":{},"buildConfig":{"siteRoot":"/","siteMap":{"pages":{"home":{"priority":1},"index":{"priority":0.8},"doc":{"priority":0.5}}},"categories":["author","tags"],"ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md"],"pages":{"story":{"basePath":"docs/","sideNav":{"storyPaths":true,"collapseSingle":true},"tabs":{"page":"/Users/atanasster/component-controls/ui/pages/ClassicPage.js"}},"blog":{"basePath":"blogs/"},"author":{"basePath":"authors/"},"page":{"basePath":"pages/"},"tags":{"basePath":"tags/"}},"search":{"searchingModule":"@component-controls/search-fusejs"},"configPath":"test/.config","distFolder":"/Users/atanasster/component-controls/plugins/jest-snapshots/test/bundle","bundleName":"component-controls.js","staticFolder":"public/static","stories":["../../../../ui/components/src/Header/*.stories.tsx"]}};
store.search = search["default"] || search;
store.config = configJSON;
store.buildConfig = {
  "siteRoot": "/",
  "siteMap": {
    "pages": {
      "home": {
        "priority": 1
      },
      "index": {
        "priority": 0.8
      },
      "doc": {
        "priority": 0.5
      }
    }
  },
  "categories": ["author", "tags"],
  "ignore": ["readme.md", "changelog.md", "code_of_conduct.md", "contributing.md", "license.md"],
  "pages": {
    "story": {
      "basePath": "docs/",
      "sideNav": {
        "storyPaths": true,
        "collapseSingle": true
      },
      "tabs": {
        "page": "/Users/atanasster/component-controls/ui/pages/ClassicPage.js"
      }
    },
    "blog": {
      "basePath": "blogs/"
    },
    "author": {
      "basePath": "authors/"
    },
    "page": {
      "basePath": "pages/"
    },
    "tags": {
      "basePath": "tags/"
    }
  },
  "search": {
    "searchingModule": "@component-controls/search-fusejs"
  },
  "configPath": "test/.config",
  "distFolder": "/Users/atanasster/component-controls/plugins/jest-snapshots/test/bundle",
  "bundleName": "component-controls.js",
  "staticFolder": "public/static",
  "stories": ["../../../../ui/components/src/Header/*.stories.tsx"]
};
store.buildConfig.pages.story.tabs["page"] = loadPageTab(store.buildConfig.pages.story.tabs["page"], story_0);

var assignProps = function assignProps(obj, _ref) {
  var storyName = _ref.storyName,
      story = _ref.story,
      props = _objectWithoutProperties(_ref, ["storyName", "story"]);

  //preserve component and subcomponents as strings
  var componentName = obj.component;
  var subcomponentsName = obj.subcomponents;
  Object.assign(obj, props);

  if (componentName !== undefined) {
    obj.component = componentName;
  }

  if (subcomponentsName !== undefined) {
    obj.subcomponents = subcomponentsName;
  }

  if (storyName) {
    obj.name = storyName;
  }
};

var _loop = function _loop(_i) {
  var s = store.stores[_i];
  var doc = s.doc;

  if (doc) {
    var exports = null;

    var _iterator = _createForOfIteratorHelper(contexts),
        _step;

    try {
      var _loop2 = function _loop2() {
        var context = _step.value;
        var key = context.req.keys().find(function (k) {
          var fullPath = path.join(context.folder, k);
          var normalizedPath = context.folder.indexOf('\\') >= 0 ? fullPath.split('/').join('\\') : fullPath;
          i = _i;
          return doc.fileName === normalizedPath;
        });

        if (key) {
          exports = context.req(key);
          return "break";
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ret = _loop2();

        if (_ret === "break") break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (exports) {
      try {
        if (exports["default"]) {
          var _exports$default = exports["default"],
              storySource = _exports$default.storySource,
              rest = _objectWithoutProperties(_exports$default, ["storySource"]);

          assignProps(doc, rest);
        }

        Object.keys(exports).filter(function (key) {
          return key !== 'default';
        }).forEach(function (key) {
          var exported = exports[key];
          var story = s.stories[key];

          if (story) {
            story.renderFn = typeof exported === 'function' ? exported : doc.template || exported;
            assignProps(story, exported);

            if (exported.story) {
              assignProps(story, exported.story);
            }
          }
        });
      } catch (e) {
        console.error("unable to load module ".concat(doc.moduleId), e);
      }
    } else {
      //file could not be found
      store.stores.splice(_i, 1);
      _i -= 1;
    }
  }

  i = _i;
};

for (var i = 0; i < store.stores.length; i += 1) {
  _loop(i);
}

module.exports = store;

/***/ }),

/***/ 4910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(4115);

__webpack_require__(634);

__webpack_require__(8188);

__webpack_require__(796);

__webpack_require__(8673);

__webpack_require__(5735);

__webpack_require__(6886);

__webpack_require__(6936);

__webpack_require__(7233);

__webpack_require__(2356);

__webpack_require__(5094);

__webpack_require__(8625);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(4908);

__webpack_require__(7950);

__webpack_require__(3450);

__webpack_require__(4769);

__webpack_require__(3105);

__webpack_require__(5342);

__webpack_require__(2501);

__webpack_require__(3430);

__webpack_require__(8145);

var _react = _interopRequireWildcard(__webpack_require__(8798));

var _fuse = _interopRequireDefault(__webpack_require__(3408));

var _core = __webpack_require__(6647);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FusejsLogo = function FusejsLogo() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 90.000000 90.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0.000000,90.000000) scale(0.100000,-0.100000)",
    fill: "#a684c6",
    stroke: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M385 796 c-17 -12 -18 -19 -7 -109 20 -164 25 -158 -75 -77 -50 39\n-97 70 -110 70 -26 0 -73 -72 -73 -112 0 -23 10 -30 103 -68 56 -24 106 -46\n110 -50 4 -4 -32 -22 -80 -40 -146 -54 -155 -66 -108 -147 19 -31 32 -43 49\n-43 13 0 61 29 109 65 99 75 94 80 75 -72 -11 -90 -10 -97 7 -109 24 -18 106\n-18 130 0 17 12 18 19 7 109 -19 152 -24 147 75 72 47 -36 96 -65 109 -65 16\n0 30 13 48 44 47 81 39 92 -107 147 -48 18 -84 36 -80 39 5 4 54 26 111 50 92\n38 102 45 102 68 0 41 -47 112 -74 112 -13 0 -59 -29 -109 -70 -100 -81 -95\n-86 -75 77 11 90 10 97 -7 109 -10 8 -40 14 -65 14 -25 0 -55 -6 -65 -14z"
  })));
};

var useSearch = function useSearch(store) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _ref = store.config.search || {},
      options = _ref.options,
      _ref$hitsPerPage = _ref.hitsPerPage,
      hitsPerPage = _ref$hitsPerPage === void 0 ? 20 : _ref$hitsPerPage,
      fields = _ref.fields;

  var fusejs = options;
  var searchIndex = (0, _react.useMemo)(function () {
    var docs = store.docs;
    return new _fuse["default"](Object.keys(docs).map(function (key) {
      var doc = docs[key];
      return (0, _core.docToSearchObject)(doc, fields);
    }), Object.assign({
      includeScore: true,
      useExtendedSearch: true,
      keys: [{
        name: 'title',
        weight: 0.2
      }, {
        name: 'description',
        weight: 0.2
      }, {
        name: 'source',
        weight: 0.1
      }, {
        name: 'author',
        weight: 0.04
      }, {
        name: 'stories',
        weight: 0.04
      }, {
        name: 'tags',
        weight: 0.3
      }, {
        name: 'components',
        weight: 0.1
      }]
    }, fusejs));
  }, [fusejs, store.docs, fields]);
  var onSearch = (0, _react.useCallback)(function (search) {
    if (search) {
      var searchResults = searchIndex.search(search);
      var newItems = searchResults.sort(function (a, b) {
        return (a.score || 0) - (b.score || 0);
      }).slice(0, hitsPerPage).filter(function (result) {
        return store.docs[result.item.objectID];
      }).map(function (result) {
        return (0, _core.docToSearchItem)(store, result.item.objectID, search);
      });
      setItems(newItems);
    } else {
      setItems((0, _core.emptySearchDocuments)(store));
    }
  }, [store, searchIndex, hitsPerPage]);
  return {
    items: items,
    searchFn: onSearch,
    provider: {
      url: 'https://fusejs.io',
      name: 'Fuse.js',
      logo: /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement(FusejsLogo, null), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          fontWeight: 'bold'
        }
      }, "Fuse.js"))
    }
  };
};

var _default = useSearch;
exports.default = _default;

/***/ }),

/***/ 5547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(951);

/***/ }),

/***/ 951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var themeUi = __webpack_require__(7631);

var React = __webpack_require__(8798);

var blocks = __webpack_require__(9553);

var core = __webpack_require__(6647);

var store = __webpack_require__(2348);
/** @jsx jsx */


var ClassicPage = function ClassicPage(_ref) {
  var _ref$controlsThreshol = _ref.controlsThreshold,
      controlsThreshold = _ref$controlsThreshol === void 0 ? 10 : _ref$controlsThreshol;
  var story = store.useCurrentStory();
  var controlsCount = core.getControlsCount(story === null || story === void 0 ? void 0 : story.controls);
  var propsCount = store.useCurrentPropsCount();
  var splitControls = controlsCount > 0 && controlsCount <= controlsThreshold && (propsCount === 0 || controlsCount < propsCount && propsCount >= controlsThreshold);
  var mixedControls = !splitControls && controlsCount >= propsCount;
  return themeUi.jsx(React.Fragment, null, themeUi.jsx(blocks.PackageVersion, null), themeUi.jsx(blocks.Description, null), themeUi.jsx(blocks.ComponentSource, {
    id: ".",
    title: "Component"
  }), themeUi.jsx(blocks.Playground, {
    title: "."
  }, themeUi.jsx(blocks.Story, {
    id: "."
  })), splitControls && themeUi.jsx(blocks.PropsTable, {
    flat: controlsCount === propsCount,
    of: ".",
    title: "Controls",
    visibility: "controls"
  }), (propsCount > 0 || !splitControls && controlsCount > 0) && themeUi.jsx(blocks.PropsTable, {
    of: ".",
    title: mixedControls ? 'Controls' : 'Properties',
    flat: propsCount <= controlsThreshold && !mixedControls,
    visibility: splitControls ? 'info' : 'all'
  }), themeUi.jsx(blocks.ComponentCommits, {
    id: ".",
    title: "Commits"
  }), themeUi.jsx(blocks.ExternalDependencies, {
    id: ".",
    title: "External dependencies"
  }), themeUi.jsx(blocks.LocalDependencies, {
    id: ".",
    title: "Internal dependencies"
  }), themeUi.jsx(blocks.ComponentJSX, {
    id: ".",
    title: "Component JSX"
  }), themeUi.jsx(blocks.Stories, {
    dark: true
  }));
};

var ClassicPage$1 = {
  title: 'Documentation',
  component: ClassicPage,
  controlsThreshold: 10
};
module.exports = ClassicPage$1;

/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_stories),
  "overview": () => (/* binding */ overview)
});

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(8798);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);
;// CONCATENATED MODULE: ../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
;// CONCATENATED MODULE: ../../ui/components/src/Header/Header.tsx


var _this = undefined,
    _jsxFileName = "/Users/atanasster/component-controls/ui/components/src/Header/Header.tsx";

/** @jsx jsx */

/**
 * A page header component
 */

var Header = function Header(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return (0,external_theme_ui_.jsx)(external_theme_ui_.Flex, Object.assign({
    as: "header",
    variant: "header"
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }), children);
};
;// CONCATENATED MODULE: ../../ui/components/src/Header/Header.stories.tsx
var Header_stories_this = undefined,
    Header_stories_jsxFileName = "/Users/atanasster/component-controls/ui/components/src/Header/Header.stories.tsx";



/* harmony default export */ const Header_stories = ({
  title: 'Components/Header',
  component: Header,
  category: 'Display'
});
var overview = function overview() {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default().createElement(Header, {
    __self: Header_stories_this,
    __source: {
      fileName: Header_stories_jsxFileName,
      lineNumber: 11,
      columnNumber: 40
    }
  }, "header");
};

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 8505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 9736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(95);
var create = __webpack_require__(2391);
var definePropertyModule = __webpack_require__(1787);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 6637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = __webpack_require__(966).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 7728:
/***/ ((module) => {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ 1176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 6570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(9996).forEach;
var arrayMethodIsStrict = __webpack_require__(6038);
var arrayMethodUsesToLength = __webpack_require__(3037);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ 507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(7636);
var toObject = __webpack_require__(2991);
var callWithSafeIterationClosing = __webpack_require__(4960);
var isArrayIteratorMethod = __webpack_require__(1943);
var toLength = __webpack_require__(4237);
var createProperty = __webpack_require__(2324);
var getIteratorMethod = __webpack_require__(8830);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 9540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(905);
var toLength = __webpack_require__(4237);
var toAbsoluteIndex = __webpack_require__(3231);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 9996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(7636);
var IndexedObject = __webpack_require__(9337);
var toObject = __webpack_require__(2991);
var toLength = __webpack_require__(4237);
var arraySpeciesCreate = __webpack_require__(7501);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ 1460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);
var wellKnownSymbol = __webpack_require__(95);
var V8_VERSION = __webpack_require__(6358);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 6038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(4229);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 3037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var fails = __webpack_require__(4229);
var has = __webpack_require__(816);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ 7501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);
var isArray = __webpack_require__(3718);
var wellKnownSymbol = __webpack_require__(95);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 4960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);
var iteratorClose = __webpack_require__(7281);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ 4575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(95);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 7079:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 1589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1601);
var classofRaw = __webpack_require__(7079);
var wellKnownSymbol = __webpack_require__(95);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 3370:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(8787);
var getWeakData = __webpack_require__(5926).getWeakData;
var anObject = __webpack_require__(1176);
var isObject = __webpack_require__(5052);
var anInstance = __webpack_require__(7728);
var iterate = __webpack_require__(9003);
var ArrayIterationModule = __webpack_require__(9996);
var $has = __webpack_require__(816);
var InternalStateModule = __webpack_require__(6407);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ 9789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var global = __webpack_require__(9859);
var isForced = __webpack_require__(6541);
var redefine = __webpack_require__(7487);
var InternalMetadataModule = __webpack_require__(5926);
var iterate = __webpack_require__(9003);
var anInstance = __webpack_require__(7728);
var isObject = __webpack_require__(5052);
var fails = __webpack_require__(4229);
var checkCorrectnessOfIteration = __webpack_require__(4575);
var setToStringTag = __webpack_require__(4555);
var inheritIfRequired = __webpack_require__(835);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 7081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(816);
var ownKeys = __webpack_require__(4826);
var getOwnPropertyDescriptorModule = __webpack_require__(7933);
var definePropertyModule = __webpack_require__(1787);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 7528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 3723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = __webpack_require__(693).IteratorPrototype;
var create = __webpack_require__(2391);
var createPropertyDescriptor = __webpack_require__(5358);
var setToStringTag = __webpack_require__(4555);
var Iterators = __webpack_require__(5495);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 5762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var definePropertyModule = __webpack_require__(1787);
var createPropertyDescriptor = __webpack_require__(5358);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 5358:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 2324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(2066);
var definePropertyModule = __webpack_require__(1787);
var createPropertyDescriptor = __webpack_require__(5358);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 7675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var createIteratorConstructor = __webpack_require__(3723);
var getPrototypeOf = __webpack_require__(7567);
var setPrototypeOf = __webpack_require__(6540);
var setToStringTag = __webpack_require__(4555);
var createNonEnumerableProperty = __webpack_require__(5762);
var redefine = __webpack_require__(7487);
var wellKnownSymbol = __webpack_require__(95);
var IS_PURE = __webpack_require__(4231);
var Iterators = __webpack_require__(5495);
var IteratorsCore = __webpack_require__(693);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9276);
var has = __webpack_require__(816);
var wrappedWellKnownSymbolModule = __webpack_require__(5391);
var defineProperty = __webpack_require__(1787).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 7400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 2635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var isObject = __webpack_require__(5052);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 5694:
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1333);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 6358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var userAgent = __webpack_require__(598);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 3837:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 3103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var getOwnPropertyDescriptor = __webpack_require__(7933).f;
var createNonEnumerableProperty = __webpack_require__(5762);
var redefine = __webpack_require__(7487);
var setGlobal = __webpack_require__(2079);
var copyConstructorProperties = __webpack_require__(7081);
var isForced = __webpack_require__(6541);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(7950);
var redefine = __webpack_require__(7487);
var fails = __webpack_require__(4229);
var wellKnownSymbol = __webpack_require__(95);
var regexpExec = __webpack_require__(3466);
var createNonEnumerableProperty = __webpack_require__(5762);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 8476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 7636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(3819);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 1333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9276);
var global = __webpack_require__(9859);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(1589);
var Iterators = __webpack_require__(5495);
var wellKnownSymbol = __webpack_require__(95);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 9859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 816:
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 5977:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 3777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1333);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var fails = __webpack_require__(4229);
var createElement = __webpack_require__(2635);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 9337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);
var classof = __webpack_require__(7079);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);
var setPrototypeOf = __webpack_require__(6540);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 8511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5353);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 5926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hiddenKeys = __webpack_require__(5977);
var isObject = __webpack_require__(5052);
var has = __webpack_require__(816);
var defineProperty = __webpack_require__(1787).f;
var uid = __webpack_require__(1441);
var FREEZING = __webpack_require__(8476);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 6407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(8694);
var global = __webpack_require__(9859);
var isObject = __webpack_require__(5052);
var createNonEnumerableProperty = __webpack_require__(5762);
var objectHas = __webpack_require__(816);
var shared = __webpack_require__(5353);
var sharedKey = __webpack_require__(4399);
var hiddenKeys = __webpack_require__(5977);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 1943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(95);
var Iterators = __webpack_require__(5495);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 3718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(7079);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 6541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 4231:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 8311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);
var classof = __webpack_require__(7079);
var wellKnownSymbol = __webpack_require__(95);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 9003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);
var isArrayIteratorMethod = __webpack_require__(1943);
var toLength = __webpack_require__(4237);
var bind = __webpack_require__(7636);
var getIteratorMethod = __webpack_require__(8830);
var iteratorClose = __webpack_require__(7281);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ 7281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(4229);
var getPrototypeOf = __webpack_require__(7567);
var createNonEnumerableProperty = __webpack_require__(5762);
var has = __webpack_require__(816);
var wellKnownSymbol = __webpack_require__(95);
var IS_PURE = __webpack_require__(4231);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 5495:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 3839:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(4229);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ 8694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var inspectSource = __webpack_require__(8511);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 47:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(7400);
var fails = __webpack_require__(4229);
var objectKeys = __webpack_require__(5632);
var getOwnPropertySymbolsModule = __webpack_require__(894);
var propertyIsEnumerableModule = __webpack_require__(9195);
var toObject = __webpack_require__(2991);
var IndexedObject = __webpack_require__(9337);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ 2391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);
var defineProperties = __webpack_require__(219);
var enumBugKeys = __webpack_require__(3837);
var hiddenKeys = __webpack_require__(5977);
var html = __webpack_require__(3777);
var documentCreateElement = __webpack_require__(2635);
var sharedKey = __webpack_require__(4399);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var definePropertyModule = __webpack_require__(1787);
var anObject = __webpack_require__(1176);
var objectKeys = __webpack_require__(5632);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 1787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var IE8_DOM_DEFINE = __webpack_require__(4394);
var anObject = __webpack_require__(1176);
var toPrimitive = __webpack_require__(2066);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var propertyIsEnumerableModule = __webpack_require__(9195);
var createPropertyDescriptor = __webpack_require__(5358);
var toIndexedObject = __webpack_require__(905);
var toPrimitive = __webpack_require__(2066);
var has = __webpack_require__(816);
var IE8_DOM_DEFINE = __webpack_require__(4394);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(905);
var nativeGetOwnPropertyNames = __webpack_require__(8151).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(140);
var enumBugKeys = __webpack_require__(3837);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(816);
var toObject = __webpack_require__(2991);
var sharedKey = __webpack_require__(4399);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(7528);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(816);
var toIndexedObject = __webpack_require__(905);
var indexOf = __webpack_require__(9540).indexOf;
var hiddenKeys = __webpack_require__(5977);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 5632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(140);
var enumBugKeys = __webpack_require__(3837);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 9195:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);
var aPossiblePrototype = __webpack_require__(8505);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(1601);
var classof = __webpack_require__(1589);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 4826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1333);
var getOwnPropertyNamesModule = __webpack_require__(8151);
var getOwnPropertySymbolsModule = __webpack_require__(894);
var anObject = __webpack_require__(1176);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 9276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);

module.exports = global;


/***/ }),

/***/ 8787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(7487);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 7487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var createNonEnumerableProperty = __webpack_require__(5762);
var has = __webpack_require__(816);
var setGlobal = __webpack_require__(2079);
var inspectSource = __webpack_require__(8511);
var InternalStateModule = __webpack_require__(6407);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 8115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(7079);
var regexpExec = __webpack_require__(3466);

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ 3466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpFlags = __webpack_require__(895);
var stickyHelpers = __webpack_require__(5650);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(1176);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(4229);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ 8885:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 2101:
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ 2079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var createNonEnumerableProperty = __webpack_require__(5762);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 4555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(1787).f;
var has = __webpack_require__(816);
var wellKnownSymbol = __webpack_require__(95);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 4399:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(3036);
var uid = __webpack_require__(1441);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var setGlobal = __webpack_require__(2079);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 3036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(4231);
var store = __webpack_require__(5353);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 7942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(1176);
var aFunction = __webpack_require__(3819);
var wellKnownSymbol = __webpack_require__(95);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ 966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(6051);
var requireObjectCoercible = __webpack_require__(8885);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 3231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(6051);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(9337);
var requireObjectCoercible = __webpack_require__(8885);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 6051:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 4237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(6051);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 2991:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(8885);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5052);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 1601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(95);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1441:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 6969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(3839);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 5391:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(95);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 95:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var shared = __webpack_require__(3036);
var has = __webpack_require__(816);
var uid = __webpack_require__(1441);
var NATIVE_SYMBOL = __webpack_require__(3839);
var USE_SYMBOL_AS_UID = __webpack_require__(6969);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 5342:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var $filter = __webpack_require__(9996).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(1460);
var arrayMethodUsesToLength = __webpack_require__(3037);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var $find = __webpack_require__(9996).find;
var addToUnscopables = __webpack_require__(9736);
var arrayMethodUsesToLength = __webpack_require__(3037);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 8695:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var forEach = __webpack_require__(6570);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 7233:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var from = __webpack_require__(507);
var checkCorrectnessOfIteration = __webpack_require__(4575);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 4083:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var $indexOf = __webpack_require__(9540).indexOf;
var arrayMethodIsStrict = __webpack_require__(6038);
var arrayMethodUsesToLength = __webpack_require__(3037);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 8145:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var isArray = __webpack_require__(3718);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 5735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(905);
var addToUnscopables = __webpack_require__(9736);
var Iterators = __webpack_require__(5495);
var InternalStateModule = __webpack_require__(6407);
var defineIterator = __webpack_require__(7675);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 6781:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var IndexedObject = __webpack_require__(9337);
var toIndexedObject = __webpack_require__(905);
var arrayMethodIsStrict = __webpack_require__(6038);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 3450:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var $map = __webpack_require__(9996).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(1460);
var arrayMethodUsesToLength = __webpack_require__(3037);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 2501:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var isObject = __webpack_require__(5052);
var isArray = __webpack_require__(3718);
var toAbsoluteIndex = __webpack_require__(3231);
var toLength = __webpack_require__(4237);
var toIndexedObject = __webpack_require__(905);
var createProperty = __webpack_require__(2324);
var wellKnownSymbol = __webpack_require__(95);
var arrayMethodHasSpeciesSupport = __webpack_require__(1460);
var arrayMethodUsesToLength = __webpack_require__(3037);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 3430:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var aFunction = __webpack_require__(3819);
var toObject = __webpack_require__(2991);
var fails = __webpack_require__(4229);
var arrayMethodIsStrict = __webpack_require__(6038);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ 9805:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var toAbsoluteIndex = __webpack_require__(3231);
var toInteger = __webpack_require__(6051);
var toLength = __webpack_require__(4237);
var toObject = __webpack_require__(2991);
var arraySpeciesCreate = __webpack_require__(7501);
var createProperty = __webpack_require__(2324);
var arrayMethodHasSpeciesSupport = __webpack_require__(1460);
var arrayMethodUsesToLength = __webpack_require__(3037);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 6936:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7400);
var defineProperty = __webpack_require__(1787).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 3105:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var assign = __webpack_require__(47);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 5094:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var DESCRIPTORS = __webpack_require__(7400);
var objectDefinePropertyModile = __webpack_require__(1787);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ 8625:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var fails = __webpack_require__(4229);
var toIndexedObject = __webpack_require__(905);
var nativeGetOwnPropertyDescriptor = __webpack_require__(7933).f;
var DESCRIPTORS = __webpack_require__(7400);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 4769:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(3103);
var toObject = __webpack_require__(2991);
var nativeKeys = __webpack_require__(5632);
var fails = __webpack_require__(4229);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1601);
var redefine = __webpack_require__(7487);
var toString = __webpack_require__(4059);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 7950:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var exec = __webpack_require__(3466);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = __webpack_require__(966).charAt;
var InternalStateModule = __webpack_require__(6407);
var defineIterator = __webpack_require__(7675);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 4908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(4954);
var anObject = __webpack_require__(1176);
var requireObjectCoercible = __webpack_require__(8885);
var sameValue = __webpack_require__(2101);
var regExpExec = __webpack_require__(8115);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ 8319:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(4954);
var isRegExp = __webpack_require__(8311);
var anObject = __webpack_require__(1176);
var requireObjectCoercible = __webpack_require__(8885);
var speciesConstructor = __webpack_require__(7942);
var advanceStringIndex = __webpack_require__(6637);
var toLength = __webpack_require__(4237);
var callRegExpExec = __webpack_require__(8115);
var regexpExec = __webpack_require__(3466);
var fails = __webpack_require__(4229);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(3103);
var DESCRIPTORS = __webpack_require__(7400);
var global = __webpack_require__(9859);
var has = __webpack_require__(816);
var isObject = __webpack_require__(5052);
var defineProperty = __webpack_require__(1787).f;
var copyConstructorProperties = __webpack_require__(7081);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(8423);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 4115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3103);
var global = __webpack_require__(9859);
var getBuiltIn = __webpack_require__(1333);
var IS_PURE = __webpack_require__(4231);
var DESCRIPTORS = __webpack_require__(7400);
var NATIVE_SYMBOL = __webpack_require__(3839);
var USE_SYMBOL_AS_UID = __webpack_require__(6969);
var fails = __webpack_require__(4229);
var has = __webpack_require__(816);
var isArray = __webpack_require__(3718);
var isObject = __webpack_require__(5052);
var anObject = __webpack_require__(1176);
var toObject = __webpack_require__(2991);
var toIndexedObject = __webpack_require__(905);
var toPrimitive = __webpack_require__(2066);
var createPropertyDescriptor = __webpack_require__(5358);
var nativeObjectCreate = __webpack_require__(2391);
var objectKeys = __webpack_require__(5632);
var getOwnPropertyNamesModule = __webpack_require__(8151);
var getOwnPropertyNamesExternal = __webpack_require__(166);
var getOwnPropertySymbolsModule = __webpack_require__(894);
var getOwnPropertyDescriptorModule = __webpack_require__(7933);
var definePropertyModule = __webpack_require__(1787);
var propertyIsEnumerableModule = __webpack_require__(9195);
var createNonEnumerableProperty = __webpack_require__(5762);
var redefine = __webpack_require__(7487);
var shared = __webpack_require__(3036);
var sharedKey = __webpack_require__(4399);
var hiddenKeys = __webpack_require__(5977);
var uid = __webpack_require__(1441);
var wellKnownSymbol = __webpack_require__(95);
var wrappedWellKnownSymbolModule = __webpack_require__(5391);
var defineWellKnownSymbol = __webpack_require__(8423);
var setToStringTag = __webpack_require__(4555);
var InternalStateModule = __webpack_require__(6407);
var $forEach = __webpack_require__(9996).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 2356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(9859);
var redefineAll = __webpack_require__(8787);
var InternalMetadataModule = __webpack_require__(5926);
var collection = __webpack_require__(9789);
var collectionWeak = __webpack_require__(3370);
var isObject = __webpack_require__(5052);
var enforceIternalState = __webpack_require__(6407).enforce;
var NATIVE_WEAK_MAP = __webpack_require__(8694);

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var DOMIterables = __webpack_require__(5694);
var forEach = __webpack_require__(6570);
var createNonEnumerableProperty = __webpack_require__(5762);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ 6886:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(9859);
var DOMIterables = __webpack_require__(5694);
var ArrayIteratorMethods = __webpack_require__(5735);
var createNonEnumerableProperty = __webpack_require__(5762);
var wellKnownSymbol = __webpack_require__(95);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ 1023:
/***/ ((module) => {

"use strict";
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ 2072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Header.stories.tsx": 956
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2072;

/***/ }),

/***/ 9553:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9553__;

/***/ }),

/***/ 6647:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6647__;

/***/ }),

/***/ 2348:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2348__;

/***/ }),

/***/ 3408:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3408__;

/***/ }),

/***/ 7631:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7631__;

/***/ }),

/***/ 8798:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__8798__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4839);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});