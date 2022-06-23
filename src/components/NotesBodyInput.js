import React from 'react'

class NotesBodyInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            body : '',
            sisaKarakter : 50
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this)
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleEventHandler (event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title : event.target.value.substr(0,50)
            }
        })
    }
    onBodyEventHandler (event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body : event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state)
        this.setState(() => {
            return {
            body : '',
            title :''
            }
        })
    }

    render() {
        return (
            <div className='NotesBodyInput'>
            <h2>Buat Catatan</h2>
            <p>Sisa karakter : {this.state.sisaKarakter - this.state.title.length}</p>
            <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
                <input type='text' placeholder='Judul' value={this.state.title} onChange={this.onTitleEventHandler}/>
                <textarea type='text' placeholder='Tulis catatanmu disini' value={this.state.body} onChange={this.onBodyEventHandler}/>
                <button className='btn-input' type='submit'>Tambah</button>
            </form>
            </div>
        )
    }
}

export default NotesBodyInput