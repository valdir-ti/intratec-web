import { useContext } from 'react';

import { SidebarContext } from "../../context/SidebarContext"

const Sidebar = () => {

  const { sidebarContext } = useContext(SidebarContext);

  console.log(sidebarContext)

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar