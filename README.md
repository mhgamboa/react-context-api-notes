# React Context API Notes

Learning from the [React documentation](https://reactjs.org/docs/context.html)

- `Context` allows you to pass data to components without having to use `props`
- `const MyContext = React.createContext(defaultValue);` creates a **Context object**
  - `defaultValue` is only used when a component doesn't have a matching provider above it in the component tree
- **Every Context object comes with a React Provider Component.** EX: `< value={/* some value */}> </ MyContext.Provider`
  - The Provider Component accepts a prop called `value`. This is the data that is passed to consumers. When `value` changes all descendants re-render.
  - This provider component should be set up in a parent component. set the `value` prop to an object that uses state. (See example below)
- To have components subscribe to context providers create a descendent component and use the `useContext()` hook. You can now access the data without using props. Example:

```
import { useState, useContext, createContext } from "react";

const IsDarkContext=createContext("false");

function App() {
  const [isDark, setIsDark] = useState("true");
  return (
    <div className="App">
      <IsDarkContext.Provider value={{ isDark, setIsDark }}>
        <Child />
      </IsDarkContext.Provider>
    </div>
  );
}

const Child = () => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <>
      <h1>{isDark}</h1>
    </>
  );
};
```

## Questions I don't want to forget:

> When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider

> Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

-Are direct children subcribers/consumers? Or is it their children as well?

> The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.

- So does this mean that children components/consumers can know that there is a provider, without know which conext object the provider represents?
