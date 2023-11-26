import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
