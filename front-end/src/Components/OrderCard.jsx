// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import orderList from '../mockAPI/orders';

const orderCard = ({ order, index }) => {
	console.log(order);
	const values = Object.keys(orderList);
	console.log(values);

	const { id, orderPrice, orderDate} = order;
  const priceFormated = orderPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const dataFormated = new Date(orderDate).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "numeric",
  });

  return (
    <Link to={`/orders/${id}`} className="link to remove">
      <div>
        <div className="container-list" data-testid={`${index}-order-card-container`}>
          <span className="elements" data-testid={`${index}-order-number`}>
            Pedido {id}
          </span>
          <span className="elements" data-testid={`${index}-order-date`}>
            {dataFormated}
          </span>
          <span className="elements" data-testid={`${index}-order-total-value`}>
            {priceFormated}
          </span>
        </div>
      </div>
    </Link>
  );
}

// OrderCard.PropTypes = {
//     id: PropTypes.number,
//     orderPrice: PropTypes.number,
//     orderDate: PropTypes.number,
//     index: PropTypes.number,
//   };

export default orderCard;
