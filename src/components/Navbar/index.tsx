import { useContext, useState } from 'react'

import { SidebarContext } from '../../context/SidebarContext';

const Navbar = () => {

  const sidebarContext = useContext(SidebarContext);
  const { state, dispatch } = sidebarContext;

  function handleToggle () {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  return (
    <>
      <div className="left">
        <button onClick={handleToggle}>Toggle</button>
      </div>
      <div className="right">Right</div>
    </>
  )
}

export default Navbar