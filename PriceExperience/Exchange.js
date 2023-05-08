const Exchange = (props) => {
  // total을 props => won => 나라 select =>  dollor

  const { price } = props;

  return (
    <div className="Experience__ExchangeBox">
      <div className="Experience__ExchangeKR">
        <h1>Exchange</h1>
      </div>

      <div className="Experience__ExchangeOther">
        <h1>Exchange2</h1>
      </div>
    </div>
  );
};
export default Exchange;
