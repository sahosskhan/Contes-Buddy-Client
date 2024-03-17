import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import avatarImg from '../../src/assets/placeholder.jpg'
import useUserData from '../Hooks/useUserData'
import useAuth from '../Hooks/useAuth'

const MenuDropdown = () => {
  const { user, logOut } = useAuth()
  const {userList}=useUserData();
  const FilterUserList = userList.filter(item => item.email === user?.email);
  const imageFilter = FilterUserList.map(user => user.image);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && imageFilter ? imageFilter : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-auto  bg-red-50 overflow-hidden right-0 top-12 text-sm'>
          <div id="sidebar" className='flex flex-col cursor-pointer w-48 uppercase'>
            <Link
              to='/'
              className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            <Link
              to='/all-contest'
              className='block lg:hidden px-4 py-3  hover:bg-neutral-100 transition font-semibold'
            >
              All Contest
            </Link>
            <Link
              to='/community'
              className='block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
             Community
            </Link>
            

            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-red-200 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 py-3 hover:bg-red-200 transition font-semibold'
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
