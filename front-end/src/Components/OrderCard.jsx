import React from "react";
import { Link } from "react-router-dom";


const OrderCard = ({ordered: {id, sale_date, total_price}, index}) => {
  const priceFormated = parseFloat(total_price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const dataFormated = new Date(sale_date).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });

  return (
    <div>
      <Link to={`/orders/${id}`} className="link to remove">
        <div className="container-list" data-testid={`${index}-order-card-container`}>
          <div>
            <span className="elements" data-testid={`${index}-order-number`}>
              Pedido {id}
            </span>
          </div>
          <div>
            <span className="elements" data-testid={`${index}-order-date`}>
              {dataFormated}
            </span>
          </div>
          <div>
            <span className="elements" data-testid={`${index}-order-total-value`}>
              {priceFormated}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

// OrderCard.PropTypes = {
//     id: PropTypes.number,
//     orderPrice: PropTypes.number,
//     orderDate: PropTypes.number,
//     index: PropTypes.number,
//   };

export default OrderCard;