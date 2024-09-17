import { NavLink } from "react-router-dom"
import { Item } from "../utils/types"
import { useContext } from "react"
import { SWContext } from "../utils/context"

interface NavItemProps {
  item: Item
}

const NavItem = ({ item }: NavItemProps) => {
  const { hero } = useContext(SWContext)
  return (
    <NavLink
      className="bg-red-color border-black border-2 rounded-md cursor-pointer hover:text-white hover:bg-red-500 px-3 py-2"
      to={`/${item.path}/${hero}`}
    >
      {item.title}
    </NavLink>
  )
}

export default NavItem