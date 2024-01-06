import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for Pizza text input", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // adding one more thing to check the number of cards on load
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // Querying
  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  // firing an change event and passing fake event object (e.target.value)
  fireEvent.change(searchInput, { target: { value: "pizza" } });

  // firing an click event on search button
  fireEvent.click(searchButton);

  // screen should load 3 restaurant cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // Assertion
  expect(cardsAfterSearch.length).toBe(3);
});

test("Should filter Top Rated Restaurants", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(18);
});
