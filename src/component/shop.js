export const Shop = ({ shop }) => {
  return (
    <div className="shop">
      <div className="shop-inner">
        <div className="shop-top">
          <img className="store-img" src={shop.photo.pc.l} />
          <img className="store-img" src={shop.photo.pc.l} />
          <img className="store-img" src={shop.photo.pc.l} />
          <div>
            <p className="shop-category">
              {shop.genre.name} | {shop.small_area.name}
            </p>
            <p className="shop-conditions">{shop.genre.catch}</p>
            <h3 className="shop-name-ttl3">
              <a className="shop-name">{shop.name}</a>
            </h3>
            <p className="shop-catch">{shop.catch}</p>
            <div className="shop-tag-container">
              {shop.card === "利用可" ? (
                <span className="shop-tag">カードOK</span>
              ) : null}
              {shop.non_smoking === "禁煙席なし" ? null : (
                <span className="shop-tag">全面禁煙</span>
              )}
            </div>
            <p className="shop-info">{shop.budget.name}</p>
            <p className="shop-info">{shop.mobile_access}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
