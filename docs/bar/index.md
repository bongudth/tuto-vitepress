---
title: Blogging Like a Hacker
lang: en-US
---

# Bar :tada: :100:

## Table of Contents
[[toc]]

## Links

### Internal Links
- [Home](/) <!-- sends the user to the root index.md -->
- [foo](/foo/) <!-- sends the user to index.html of directory foo -->
- [foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
- [bar - three](../bar/three) <!-- you can omit extention -->
- [bar - three](../bar/three.md) <!-- you can append .md -->
- [bar - four](../bar/four.html) <!-- or you can append .html -->

### External Links
[vuejs.org](https://vuejs.org/)

## Tables
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Custom Containers

### Default Title
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## Syntax Highlighting in Code Blocks
```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
## Line Highlighting in Code Blocks

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
