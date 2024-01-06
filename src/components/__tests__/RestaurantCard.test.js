import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Andhra Gunpowder");
  expect(name).toBeInTheDocument();
});

test("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardWithPromoted resData={MOCK_DATA} />);
  const promotedRestaurant = screen.getByText("Promoted");
  expect(promotedRestaurant).toBeInTheDocument();
});
