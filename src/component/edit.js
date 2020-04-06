import React, { Component } from "react";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { editTask } from '../js/actions/actions';
import Modal from 'react-awesome-modal';
class Edit extends Component {
    state = { 
        title: this.props.MovieEl.title,
        rating: this.props.MovieEl.rating,
        year:this.props.MovieEl.year,
        image:this.props.MovieEl.image,
        id:this.props.MovieEl.id,
         visible: false }
    handleChange = evt => { this.setState({ [evt.target.name]: evt.target.value }); }
  
    handleOk= (event)=>{
        this.props.editTask(this.props.MovieEl.id, this.state )
    }
    
    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                <input type="button" value="Edit" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Edit</h1>
                        <input className="form-control mr-sm-2" value={this.state.title} type="text" name="title" onChange={this.handleChange} placeholder="title" />
                        <input className="form-control mr-sm-2" value={this.state.image} type="url" name="image" onChange={this.handleChange} placeholder="image" />
                        <input className="form-control mr-sm-2" maxLength="4" value={this.state.year} type="number" name="year" onChange={this.handleChange} placeholder="Year" />
                        <input className="form-control mr-sm-2" maxLength="1" value={this.state.rating} type="number" name="rating" onChange={this.handleChange} placeholder="Rating" />
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(New)=>this.handleOk(New)}>Edit</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>





        )
    }
}
export default connect(null, { editTask })(Edit);






