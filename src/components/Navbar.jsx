import {useSelector} from 'react-redux'

// icons 
import {SlBasketLoaded} from 'react-icons/sl'

function Navbar() {
    const {amount} = useSelector((data) => data.shop)
  return (
    <div className='max-w-3xl mx-auto py-5 px-3 flex justify-between'>
    <h1 className='text-3xl font-medium'>Home</h1>
    <p className='relative  w-9'>
        <span ><SlBasketLoaded className='text-3xl hover:text-pink-600 cursor-pointer font-bold'/></span>
        <span className='badge absolute cursor-pointer -top-2 -right-4 badge-secondary'>{amount}</span>
    </p>
    </div>
  )
}

export default Navbar