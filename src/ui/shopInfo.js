export const ShopInfo = ({ shop }) => {
  return (
    <>
      <p className="shop-info">{shop.budget.name}</p>
      <p className="shop-info">{shop.mobile_access}</p>
    </>
  );
};
