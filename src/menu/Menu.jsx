import './Menu.css'
import cancelIcon from '../assets/img/cancel.png'
const Menu = ({isOpen, onClose}) => {
    return (
        <div className={`menu ${isOpen ? "open" : ""}`}>
            <div>
             <button onClick={onClose}><img src={cancelIcon} alt="" /></button>
            </div>

            <div className='itens'>
                <ul>
                    <li>Atlas da diabete</li>
                    <li>Dicas</li>
                    <li>Nutrição</li>
                    <li>Atividades físicas</li>
                </ul> 
            </div>
        </div>
    )
}

export default Menu;