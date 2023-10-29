import './Menu.css'
const Menu = ({isOpen, onClose}) => {
    return (
        <div className={`menu ${isOpen ? "open" : ""}`}>
            <div>
             <button onClick={onClose}><span class="material-symbols-outlined">cancel</span></button>
            </div>

            <div className='itens'>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                </ul> 
            </div>
        </div>
    )
}

export default Menu;