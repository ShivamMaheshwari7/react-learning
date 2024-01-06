import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

/* Testing the ADD TO CART flow */

// jest.fn() gives you a mock function , this mock function basically takes a callback function and this function should be
// exactly similar to fetch function thats why we are returning a promise here
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Bucket Biryani (3)");
  fireEvent.click(accordionHeader);

  // Assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // Assertion
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  // Assertion
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  // 5 foodItems -> 3 from RestaurantMenu and 2 from Cart Page
  // as we have loaded 3 Components together (Header, RestaurantMenu and Cart)
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!!")
  ).toBeInTheDocument();

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
});
