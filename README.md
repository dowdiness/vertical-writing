# Vertical Writing

**Vertical Writing** is a bare bones multi-column layout library to solve layout problem when using CSS Writing Modes. It's library agnostic and 100% open source.

## What is the problem?

When you combine [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) for vertical writing and [multi-column layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts) together, the height of the contents will be the first collumn of height.

Therefore, if you put some contents after this, they will be overlapped with the multi-column layouts contents.

This library solves this problem by adding padding/margin-bottom to fill out the gap between the multi-column layouts contents and after contents.

![vertical-writing](https://user-images.githubusercontent.com/1616717/199655597-21f960c9-ac4e-4df8-8525-b5742cce9608.gif)

## Packages

- [vertical-writing](https://github.com/dowdiness/vertical-writing/tree/main/packages/vertical-wrtiting): vanilla js version of vertical-writing that all other packages depend on
- [vertical-writing-react](https://github.com/dowdiness/vertical-writing/tree/main/packages/vertical-writing-react): react hooks version of vertical-writing
- [vertical-writing-vue](https://github.com/dowdiness/vertical-writing/tree/main/packages/vertical-writing-vue): vue composable version of vertical-writing

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

## Examples

[React Example](https://codesandbox.io/s/vertical-writing-react-ob4wn1)

[Vue Example](https://codesandbox.io/s/vertical-writing-vue-wt97l1)
