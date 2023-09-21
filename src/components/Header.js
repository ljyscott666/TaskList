import Logo from '../assets/logo192.png'
import './Header.css'



export default function Header() {
  return (
    <header>Header
        <img src={Logo} alt="" />
        <a href='/'>Home</a>
    </header>
  )
}
