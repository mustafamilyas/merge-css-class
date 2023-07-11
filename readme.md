# Merge CSS Classes

A tiny utility function for merging class names. An alternative library to [classnames](https://github.com/JedWatson/classnames) and [clsx](https://github.com/lukeed/clsx) with limited functionality.

This npm node module's goal is to do **just enough** for merging CSS class names. Plan to make the bundle size even smaller, currently, the bundle size is `240B`.

## Installation

```
npm i merge-css-class
#or
yarn add merge-css-class
```

## How To Use It

This library only merges the arguments if the expression evaluates to `string`

```
let a = true
mergeCssClass(a && 'A', 'B') // => 'A B'
// if the arguments don't evaluate to string, it will be ignored
mergeCssClass(a && 'A', {test: true}, 1) // => 'A'
```

## Feedback

No standard rule, you can ask me through this repository or if you prefer email then please send it to emailpribadiilyas@gmail.com
