# piniajs-vue2-bug-report

## Bug description

### Project description

This project has two simple pinia stores, each has one number (`number1` and `number2`),
one getter (`number1Getter` and `number2Getter`) returning the number,
and one action (`updateTest1` and `updateTest2`) to increment the number.

There are two pages `/test1` and `/test2` each rendering `TestCmp.vue`. The component renders
numbers and getters from both stores, and calls `updateTest1` and `updateTest2` on mount.

### Reproduction

Initial render is good. However, if you click on `test2` link to navigate,
the `mount` hook of `TestCmp.vue` will be called, and `number1`, `number1Getter`, `number2` will
be incremented, but `number2Getter` which just returns `number2`, will not be updated.

Also interesting, if you place `number2` and `number2Getter` before `number1` and `number1Getter`
in `TestCmp.vue`, then `number1Getter` will not be updated.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

