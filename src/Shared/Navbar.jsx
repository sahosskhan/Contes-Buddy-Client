import { NavLink } from "react-router-dom"
import Container from "../Components/Container"
import Logo from "./Logo"
import MenuDropdown from "./MenuDropdown"

const Navbar = () => {
  return (
    <div className='fixed w-full bg-red-50 z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
          <div className="flex flex-row  items-center justify-between gap-x-16">
          <Logo />
           <div id="sidebar" className=" flex-row lg:flex hidden items-center uppercase font-semibold justify-between gap-x-16 text-xl">
          <NavLink   to='/all-contest'> <h1>All Contest</h1></NavLink>
          <NavLink  to='/community'> <h1>Community</h1></NavLink>
          <NavLink  to='/about'> <h1>About</h1></NavLink>
          <NavLink  to='/about'> <h1>Learderboard</h1></NavLink>
           </div>

          </div>
          
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
