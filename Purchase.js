import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";

const Payment = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  return (
    <Base>
      <div>
        <div>
          <Paymentb products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Payment;
