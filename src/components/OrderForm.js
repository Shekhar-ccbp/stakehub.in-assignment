import {useState} from 'react'

function OrderForm({fetchPendingOrders}) {
  const [buyerQty, setBuyerQty] = useState('')
  const [buyerPrice, setBuyerPrice] = useState('')
  const [sellerPrice, setSellerPrice] = useState('')
  const [sellerQty, setSellerQty] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const order = {
      buyer_qty: buyerQty,
      buyer_price: buyerPrice,
      seller_price: sellerPrice,
      seller_qty: sellerQty,
    }

    await fetch('/api/add-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })

    fetchPendingOrders()
    setBuyerQty('')
    setBuyerPrice('')
    setSellerPrice('')
    setSellerQty('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={buyerQty}
        onChange={e => setBuyerQty(e.target.value)}
        placeholder="Buyer Quantity"
        required
      />
      <input
        type="number"
        value={buyerPrice}
        onChange={e => setBuyerPrice(e.target.value)}
        placeholder="Buyer Price"
        required
      />
      <input
        type="number"
        value={sellerPrice}
        onChange={e => setSellerPrice(e.target.value)}
        placeholder="Seller Price"
        required
      />
      <input
        type="number"
        value={sellerQty}
        onChange={e => setSellerQty(e.target.value)}
        placeholder="Seller Quantity"
        required
      />
      <button type="submit">Add Order</button>
    </form>
  )
}

export default OrderForm
