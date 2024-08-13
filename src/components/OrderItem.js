function OrderItem({order}) {
  return (
    <li>
      Buyer: {order.buyer_qty} @ {order.buyer_price}, Seller: {order.seller_qty}{' '}
      @ {order.seller_price}
    </li>
  )
}

export default OrderItem
