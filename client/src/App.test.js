import React from "react";
import { render, cleanup, wait, getByTestId } from "@testing-library/react";
// import axiosMock from "axios";
// import axios from "./mocks/axois";
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
test("Rendering Header", () => {
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

// Testing if PlayerList renders
test("Rendering PlayerList", () => {
  const { getByText } = render(<PlayerList />);
  const testPlayerList = getByText(/june/i);
  expect(testPlayerList).not.toBeFalsy();
  expect(testPlayerList).toBeTruthy();
});

// // Testing API request
// test("Rendering players", async () => {
//   // setup
//   axiosMock.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: {
//         res: [{ name: "Alex Morgan", country: "United States", search: 100 }]
//       }
//     })
//   );

//   // run test code
//   const players = await [
//     { name: "Alex Morgan", country: "United States", search: 100 }
//   ];

//   // assertions / expects
//   expect(players).toEqual([]);
//   expect(axiosMock.get).toHaveBeenCalledTimes(1);
//   expect(axiosMock.get).toHaveBeenCalledWith(
//     "http://localhost:5000/api/players"
//   );

//   // const { getByText } = render(<PlayerList />);
//   // axiosMock.get.mockImplementationOnce(players);
//   // await wait(() => expect(getByText("Alex Morgan")).toBeInTheDocument());
//   // players.forEach(player => expect(getByText(player.name)).toBeInTheDocument());
// });
