function CompletedOrderItem({order}) {
  return (
    <li>
      Price: {order.price}, Quantity: {order.qty}
    </li>
  )
}

export default CompletedOrderItem
