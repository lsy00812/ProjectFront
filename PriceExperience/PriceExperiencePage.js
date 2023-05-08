import { useEffect, useState } from "react";
import Info from "./Info";
import Exchange from "./Exchange";
import "./PriceExperiencePage.css";

const PriceExperiencePage = () => {
  // axios DB
  const [productLists, setProductLists] = useState([
    {
      id: 0,
      productName: "야채타임",
      price: 1000,
      imgURL:
        "https://image.homeplus.kr/td/1c2a26fd-ba7d-46fc-bb5a-0e7b11abb2a6",
    },
    {
      id: 1,
      productName: "태양초",
      price: 500,
      imgURL: "https://www.sempio.com/image/_product/1017880B.png",
    },
    { id: 2, productName: "순창", price: 700 },
    { id: 3, productName: "해찬들", price: 600 },
  ]);

  const [nameAndPrice, setNameAndPrice] = useState([]);

  // const handlerSetNameAndPrice = (name, price) => {
  //     setNameAndPrice([...nameAndPrice, { name, price }])
  // }

  const handlerSetNameAndPrice = (name, price) => {
    setNameAndPrice([{ name, price }]);
  };

  return (
    <>
      <nav>
        <p>123</p>
      </nav>

      <main>
        <div className="Experience__container">
          <Info nameAndPrice={nameAndPrice} />
          <Exchange />
        </div>

        <div className="Experience__product">
          {productLists.map((p) => {
            return (
              <>
                <div className="Experience__product__image">
                  <img
                    src={p.imgURL}
                    style={{ width: 100, height: 100 }}
                    onClick={() =>
                      handlerSetNameAndPrice(p.productName, p.price)
                    }
                  />
                </div>
              </>
            );
          })}
        </div>
      </main>

      <footer>
        <p>123</p>
      </footer>
    </>
  );
};
export default PriceExperiencePage;
