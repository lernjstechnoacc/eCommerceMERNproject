import "./adminPanel.scss"

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <div className="panel-control">
                <div className="control control-tea">
                    <h2 className="title tea-title">Чаи</h2>
                    <button className="option">Все</button>
                    <button className="option">Лучшие продажи</button>
                    <button className="option">Меньше всего остатков</button>
                    

                </div>
                <div className=" control control-things">
                    <h2 className="title things-title">Хуи</h2>
                    <button className="option">Все</button>
                    <button className="option">Лучшие продажи</button>
                    <button className="option">Меньше всего остатков</button>
                </div>
            </div>

            <div className="panel-list">
                <div className="list-header">
                    <div className="header-search">
                        <input type="text" className="search-input" />
                        <button className="search-btn"></button>
                    </div>
                    <div className="header-btn">
                        <button className='add-item'>Add new item</button> 
                        <button className='exit-btn'>Add new item</button> 
                    </div>      
                </div>
                <div className="list-items">
                    <ul className="items">
                        <li className="item">
                            <img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" />
                            <h2 className="item-title">Улун в бошку Уебун</h2>
                            <span>Продано:</span>
                            <span>Остаток</span>
                            <div className="item-btn">
                                <button className="btn">Удалить</button>
                                <button className="btn">Изменить</button>
                            </div>
                        </li>
                        <li className="item">
                        <img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" />
                            <h2 className="item-title">Улун в бошку Уебун</h2>
                            <span>Продано:</span>
                            <span>Остаток</span>
                            <div>
                                <button className="btn">Удалить</button>
                                <button className="btn">Изменить</button>
                            </div>
                        </li>
                        <li className="item">
                        <img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" />
                            <h2 className="item-title">Улун в бошку Уебун</h2>
                            <span>Продано:</span>
                            <span>Остаток</span>
                            <div>
                                <button>Удалить</button>
                                <button>Изменить</button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}



export default AdminPanel;