import React from "react";
import { render } from "@testing-library/react";

// Components
import App from "./App";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// Testing if entire App renders
test("Rendering App without crashing", () => {
  render(<App />);
});
