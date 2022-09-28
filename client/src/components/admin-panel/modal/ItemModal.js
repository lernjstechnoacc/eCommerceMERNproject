import './itemModal.scss'
const ItemModal = (props) => {
    const {typeModal} = props
    return (
        <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{typeModal === 'new' ? 'Добавить товар' : 'Измениение товара'}</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="POST">
                    <div className="form-group">
                        <label>Название:</label>
                        <input name='name' type="name" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Тип:</label>
                        <input name="type" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Страна:</label>
                        <input name="country" className="form-control"  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Цена за 25грамм:</label>
                        <input name="price" type='number' className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Количество в граммах:</label>
                        <input name="amount" type='number' className="form-control" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">Количество сохраняеться в граммах с градацией 25 грамм</small>
                    </div>
                    {typeModal === 'new' ?
                        <div>
                            <label for="formFileMultiple" className="form-label">Фотографии</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                        </div> : null
                    }
                   
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">{typeModal === 'new' ? 'Добавить товар' : 'Сохранить изменение'}</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ItemModal;