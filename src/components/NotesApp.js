import React, { Component } from "react";
import { getInitialData } from "../utils";
import NotesBody from "./NotesBody";
import NotesHeader from "./NotesHeader";
import Swal from "sweetalert2";

export class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: getInitialData(),
      keyword : ''
    };

    this.onAddNotes = this.onAddNotes.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.onSearch = this.onSearch.bind(this)
  }

  onAddNotes({ title, body }) {
    this.setState((state) => {
      return {
        Data: [
          ...state.Data,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
    Swal.fire('Berhasil Menambahkan Catatan')
  }

  onDeleteHandler(id) {
    const Data = this.state.Data.filter(item => item.id !== id)
    this.setState({Data})
    Swal.fire({
      title: 'Apakah kamu yakin?',
      text: "Kamu tidak bisa mengembalikan catatan yang dihapus",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus catatan!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Catatan berhasil dihapus.',
          'success'
        )
      }
    })
  }

  onArsipHandler (id) {
    const noteIndex = this.state.Data.findIndex((note) => note.id === id);
    this.setState((state) => {
      return state.Data[noteIndex].archived = !state.Data[noteIndex].archived;
    })
    Swal.fire({
      title: 'Apakah kamu yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Arsipkan'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Catatan di Arsipkan',
          'success'
        )
      }
    })
  }

  onSearch(event) {
    const lowerCase = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        keyword : lowerCase
      }
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <NotesHeader search={this.onSearch}/>
        <NotesBody Data={this.state.Data} addNotes={this.onAddNotes} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler} search={this.state.keyword}/>
      </div>
    );
  }
}

export default NotesApp;
