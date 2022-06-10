import { Label } from "../ui/label";
import { ShopName } from "../ui/shopName";
import { ShopDescription } from "../ui/ShopDescription";
import { ShopInfo } from "../ui/shopInfo";
import { ShopHeading } from "../ui/shopHeading";

export const Shop = ({ shop }) => {
  return (
    <div className="shop">
      <div className="shop-inner">
        <div className="shop-top">
          <div className="shop-img-wrap">
            <img className="store-img" src={shop.photo.pc.l} />
            <img className="store-img" src={shop.photo.pc.l} />
            <img className="store-img" src={shop.photo.pc.l} />
          </div>
          <div>
            <ShopDescription shop={shop} />
            <ShopName shop={shop} />
            <ShopHeading shop={shop} />
            <div className="shop-tag-container">
              {shop.card === "利用可" ? <Label text="カードOK" /> : null}
              {shop.non_smoking !== "禁煙席なし" ? (
                <Label text="全面禁煙" />
              ) : null}
            </div>
            <ShopInfo shop={shop} />
          </div>
        </div>
      </div>
    </div>
  );
};
