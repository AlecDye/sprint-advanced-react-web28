- [ ] Why would you use class component over function components (removing hooks from the question)?
      A: Class components have access to the component lifecycle and can be preferred when the project requires state to be rendered (or not rendered) at certain times during a component's lifecycle.

- [ ] Name three lifecycle methods and their purposes.
      A:
      componentDidMount: Adding nodes to the DOM, used to call API, setup event listeners / timers
      componentDidUpdate: Runs if state or props change after being initialized
      componentWillUnmount: Removal of the component, used to clean up event listeners / timers that were triggered during the initial mount. Prevents memory leaks.

- [ ] What is the purpose of a custom hook?
      A: A custom hook allows us to build component logic into a reusable function. This means we can write DRYer code and reuse that code snippet where it is needed (in multiple components for example).

- [ ] Why is it important to test our apps?
      A: Running tests within the app allows us to identify errors and unwanted side effects much faster than running a physical-use test. Testing also also use to improve the app's stability for a wide range of use-cases.
