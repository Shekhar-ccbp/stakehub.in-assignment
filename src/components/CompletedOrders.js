import CompletedOrderItem from './CompletedOrderItem'

function CompletedOrders({orders}) {
  return (
    <div>
      <h2>Completed Orders</h2>
      <ul>
        {orders.map(order => (
          <CompletedOrderItem key={order.id} order={order} />
        ))}
      </ul>
    </div>
  )
}

export default CompletedOrders
