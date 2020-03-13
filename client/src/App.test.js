import React from "react";
import { render, cleanup, wait, getByTestId } from "@testing-library/react";
import axiosMock from "axios";
// import "jest-dom/extend-expect";

// jest.mock("./api/players");

// Components
import App from "./App";
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";

// Depreciated version of testing
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// cleanup after each test
afterEach(cleanup);

// Testing if entire App renders
test("Rendering App without crashing", () => {
  render(<App />);
});

// Testing if Header renders
test("Rendering header", () => {
  const { getByText } = render(<Header />);
  const testHeader = getByText(/women/i);
  expect(testHeader).not.toBeFalsy();
  expect(testHeader).toBeTruthy();
});

// test("Fetching API data", async () => {
//   axiosMock.get.mockResolvedValueOnce({res.data})
//   const url =
//   const {} = render(<PlayerList/>);
// });

test("Rendering PlayerList", () => {
  const { getByText } = render(<PlayerList />);
  const testPlayerList = getByText(/june/i);
  expect(testPlayerList).not.toBeFalsy();
  expect(testPlayerList).toBeTruthy();
});

test("Rendering players", async () => {
  const { getByText } = render(<PlayerList />);
  const players = [
    { name: "Alex Morgan", country: "United States", search: 100 }
  ];
  axiosMock.get.mockResovledValueOnce(players);
  await wait(() => expect(getByText("Alex Morgan")).toBeInTheDocument());
  players.forEach(player => expect(getByText(player.name)).toBeInTheDocument());
});
