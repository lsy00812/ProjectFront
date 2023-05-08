import { useState } from "react";

const Info = (props) => {
  const { nameAndPrice } = props;

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const plusOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);

  return (
    <div className="Experience__Info">
      <div className="Experience__Info__top">
        <ul>선택상품명</ul>
        <ul>count</ul>
        <ul>단가</ul>
        <ul>금액</ul>
      </div>

      <div className="Experience__Info__bottom">
        <p1>
          {nameAndPrice.map((namaAndPrice) => (
            <>
              <ul>
                <p>{namaAndPrice.name}</p>
                <button onClick={plusOne}>+1</button>
                <p>{namaAndPrice.price}</p>
              </ul>
            </>
          ))}
        </p1>

        {/* <ul>
          <button onClick={plusOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <p> {count} </p>
        </ul> */}
      </div>
    </div>
  );
};

export default Info;
