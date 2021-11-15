import { LogoIco } from '../../Icon';
import './logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <LogoIco />
            <p className="logo_subtitle">Sistema de estacionamento simples</p>
        </div>
    )
}

export default Logo;