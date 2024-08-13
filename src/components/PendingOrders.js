import OrderItem from './OrderItem'

function PendingOrders({orders}) {
  return (
    <div>
      <h2>Pending Orders</h2>
      <ul>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ul>
    </div>
  )
}

export default PendingOrders
