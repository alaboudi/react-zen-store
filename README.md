# React Zen Store ☮️

React Zen Store is the React binding for [Zen Store](https://github.com/alaboudi/zen-store). It let's
your React component retrieve the latest state from the store.

## Installation
```shell
yarn add @zenstack/react-zen-store
```
or

```shell
npm install @zenstack/react-zen-store
```


## Usage
This library exposes some hooks that allow you to bind the Zen Store
state value to your components.

### `useState`
The `useState` hook allows your component to stay in sync with the store.

```jsx
import {createStateStore} from "@zenstack/zen-store";
import {useState} from "@zenstack/react-zen-stack";

const store = createStateStore(13);

const MyComponent = () => {
    const state = useState(store); // assigned 13
    return <p>{state} is my favorite nummber</p>;
}
```

### `useSelector`
The `useSelector` hook is similar to `useState` but it provides the return value of the selector execution on the store.

```jsx
import {createStateStore} from "@zenstack/zen-store";
import {useSelector} from "@zenstack/react-zen-store";

const store = createStateStore(13);
const selector = (x) => x * 2;

const MyComponent = () => {
    const state = useSelector(store, selector); // assigned 26
    return <p>{state} is double my favorite number</p>
}
```
