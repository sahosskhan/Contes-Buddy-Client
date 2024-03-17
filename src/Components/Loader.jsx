/* eslint-disable react/prop-types */
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='h-[250px] 
      flex 
      flex-col 
      justify-center 
      items-center 
      min-h-screen'
    >
      <PacmanLoader size={100} color='red' />
    </div>
  )
}

export default Loader
