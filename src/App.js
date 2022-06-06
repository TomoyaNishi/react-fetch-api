import "./App.css";
import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";
import { Shop } from "./shop/shop";

function App() {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleGetShops() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async function (success) {
      let lat = success.coords.latitude;
      let long = success.coords.longitude;
      const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9c3b52cc8cfb70b0&lat=${lat}&lng=${long}&range=5&format=jsonp`;
      console.log("before request");
      const json = await fetchJsonp(url, {})
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          return json;
        })
        .catch(function (err) {
          console.log("error", err);
        });

      setShops(json.results.shop);
      setIsLoading(false);
      // console.log(a);

      // let res = await fetch(
      //   `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9c3b52cc8cfb70b0&lat=${lat}&lng=${long}&range=5&format=json`
      // );
      //
      // const json = await res.json();
      // setShops(json.results.shop);
    });
  }

  console.log(shops);

  return (
    <div>
      {!isLoading ? (
        <>
          {shops.length !== 0 ? (
            <div className="container">
              {shops.map((shop, index) => {
                return <Shop key={index} shop={shop} />;
              })}
            </div>
          ) : (
            <div className="top-container">
              <button className="top-button" onClick={handleGetShops}>
                現在地から取得する
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="loading">Loading now...</div>
      )}
    </div>
  );
}

export default App;
