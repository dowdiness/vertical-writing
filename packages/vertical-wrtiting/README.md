# Vertical Writing

**Vertical Writing** is a bare bones multi-column layout library to solve layout problem when using CSS Writing Modes. It's library agnostic and 100% open source.

## Examples

[React Example](https://codesandbox.io/s/vertical-writing-react-ob4wn1)

[Vue Example](https://codesandbox.io/s/vertical-writing-vue-wt97l1)

## API Reference

### Options

Vertical writing takes various options in order to customize how the library works.

#### spacing

type: `"padding" | "margin"`
default: `"padding"`

Choose how to make gap between `padding` and `margin`.

#### delayTime

type: `number`
default: `100`

We use [debounce](https://github.com/angus-c/just#just-debounce-it) function to reduce function calls on load and resize events. You can change delay time by passing this option.

### How to pass options

#### Vanilla JavaScript

The second argument of the VerticalWriting constructor is the options object:

```js
import VerticalWriting from "vertical-writing";
const vw = VerticalWriting(vwNode, { spacing: "margin" });
```

#### React

The first argument to the useVirticalWriting hook is the options object:

```js
import useVerticalWriting from "vertical-writing-react";

const [vwRef] = useVerticalWriting({ spacing: "margin" });
```

#### Vue

The first argument to the useVirticalWriting function is the options object:

```js
import useVirticalWriting from "vertical-writing-vue";

const [vwNode, vwApi] = useVirticalWriting({ spacing: "margin" });
```
