export const ShopDescription = ({ shop }) => {
  return (
    <>
      <p className="shop-category">
        {shop.genre.name} | {shop.small_area.name}
      </p>
      <p className="shop-conditions">{shop.genre.catch}</p>
    </>
  );
};
