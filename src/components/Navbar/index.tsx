import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(true);

  function handleToggle () {
    console.log('handleToggle')
    setOpen(!open)
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