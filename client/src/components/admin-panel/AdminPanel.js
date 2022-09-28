import {useState} from 'react';
import './adminPanel.scss'
import ItemModal from './modal/ItemModal';

const AdminPanel = () => {
    const[showModal, setShowModal] =useState(false);
    const lokshowModal = ()=>{
        setShowModal(!showModal);
    }
    return (
        <>
            {showModal ? <ItemModal/> : null}
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Чайный архив</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Выйти</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        <span data-feather="home" className="align-text-bottom"></span>
                        Dashboard
                        </a>
                    </li>
                    
                    </ul>
                </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-outline-dark btn-lg">Добавить товар</button>
                    </div>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">Img</th>
                        <th scope="col">Наименовние</th>
                        <th scope="col">Проданно</th>
                        <th scope="col">Остаток</th>
                        <th scope="col">Дата Добавления</th>
                        <th scope="col">Кнопки</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" /></td>
                        <td className ='title'>Улун из 7 залуп 2022</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>ыыыы</td>
                        <td className="control-btn">
                            <button className ='btn btn-success btn-sm'>Изменить</button>
                            <button onClick={lokshowModal} className ='btn btn btn-danger btn-sm'>Добавить</button>
                        </td>
                        </tr>
                        <tr>
                        <td><img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" /></td>
                        <td className ='title'>Улун из 7 залуп 2022</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>ыыыы</td>
                        <td className="control-btn">
                            <button className ='btn btn-success btn-sm'>Изменить</button>
                            <button className ='btn btn btn-danger btn-sm'>Добавить</button>
                        </td>
                        </tr>    
                        <tr>
                        <td><img src="https://fs1.secunda.com.ua/photo/goods/card/401/660655/660655_20211015_1090_1345_010_02157_11.jpg" alt="" /></td>
                        <td className ='title'>Улун из 7 залуп 2022</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>ыыыы</td>
                        <td className="control-btn">
                            <button className ='btn btn-success btn-sm'>Изменить</button>
                            <button className ='btn btn btn-danger btn-sm'>Добавить</button>
                        </td>
                        </tr>           
                    </tbody>
                    </table>
                </div>
                </main>
            </div>
            </div>
        </>
    )
}

export default AdminPanel;