import logo from '@assets/logo.svg' 

function Header() {
  return (
    <div className='h-16 flex items-center justify-center bg-pink-200'>
      <img className='h-10' src={logo} alt='moneybox logo' />
    </div>
  )
}

export default Header