import "./App.css";
import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";
import { Shop } from "./component/shop";

function App() {
  const [shops, setShops] = useState([]);

  function handleGetShops() {
    navigator.geolocation.getCurrentPosition(async function (success) {
      let lat = success.coords.latitude;
      let long = success.coords.longitude;
      // const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9c3b52cc8cfb70b0&lat=${lat}&lng=${long}&range=5&format=json`;

      // await fetchJsonp(url, {})
      //   .then(function (response) {
      //     console.log(response);
      //     return response.json();
      //   })
      //   .then(function (json) {
      //     console.log("success", json);
      //     console.log(json);
      //     return json;
      //   })
      //   .catch(function (err) {
      //     console.log("error", err);
      //   });

      // console.log(a);

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
    </div>
  );
}

export default App;
