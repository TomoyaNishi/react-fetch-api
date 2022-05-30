import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [shops, setShops] = useState([]);

  function handleGetShops() {
    navigator.geolocation.getCurrentPosition(async function (success) {
      let lat = success.coords.latitude;
      let long = success.coords.longitude;

      let res = await fetch(
        `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9c3b52cc8cfb70b0&lat=${lat}&lng=${long}&range=5&format=json`
      );

      const json = await res.json();
      setShops(json.results.shop);
    });
  }

  console.log(shops);

  return (
    <div>
      {shops.length !== 0 ? (
        <div className="container">
          {shops.map((shop, index) => {
            return (
              <div key={index} className="shop">
                <div className="shop-inner">
                  <div className="shop-top">
                    {/*<img src={shop.photo.pc.l} />*/}
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
                    {/*<div>*/}
                    {/*  <p>このお店のクーポン</p>*/}
                    {/*  <p>2時間飲み放題付き全7品2,750円！コスパ良し♪</p>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="top-container">
          <button className="top-button" onClick={handleGetShops}>
            現在地から取得する
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
