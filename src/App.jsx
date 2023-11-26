import { useEffect } from "react"
import Navbar from "./components/Navbar"
import ShopProducts from "./components/ShopProducts"
import { updateTotal} from './redux/future/shopSlice'
import { useDispatch, useSelector } from "react-redux"


function App() {
  const shop = useSelector((data) => data.shop)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [shop, dispatch])
  return (
    <>
    <Navbar/>
    <ShopProducts/>
    </>
  )
}

export default App