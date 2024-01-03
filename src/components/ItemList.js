import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const cardInfo = item.card.info;

        return (
          <div
            key={cardInfo.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-2 font-semibold">
                <span>{cardInfo.name}</span>
                <span>
                  {" "}
                  - ₹
                  {cardInfo.price
                    ? cardInfo.price / 100
                    : cardInfo.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-justify">{cardInfo.description}</p>
            </div>

            <div className="ml-10 my-2">
              <div className="absolute">
                <button className="p-1 mx-9 bg-black text-white shadow-lg border border-gray-400 rounded-lg">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + cardInfo.imageId}
                className="min-w-32 w-32 rounded-md max-h-20"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
