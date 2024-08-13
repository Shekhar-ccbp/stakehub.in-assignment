import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import OrderForm from './components/OrderForm'
import PendingOrders from './components/PendingOrders'
import CompletedOrders from './components/CompletedOrders'
import './App.css'

function App() {
  const [pendingOrders, setPendingOrders] = useState([])
  const [completedOrders, setCompletedOrders] = useState([])

  const fetchPendingOrders = async () => {
    const response = await fetch('/api/pending-orders')
    const data = await response.json()
    setPendingOrders(data)
  }

  const fetchCompletedOrders = async () => {
    const response = await fetch('/api/completed-orders')
    const data = await response.json()
    setCompletedOrders(data)
  }

  useEffect(() => {
    console.log('n')
    fetchPendingOrders()
    fetchCompletedOrders()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <OrderForm fetchPendingOrders={fetchPendingOrders} />
      <PendingOrders orders={pendingOrders} />
      <CompletedOrders orders={completedOrders} />
    </div>
  )
}

export default App
