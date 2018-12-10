import React from 'react';
import Modal from 'react-modal';
import './deleteModelDialog.scss';

// Bind modal to appElement
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

// Modal.setAppElement('#root')

export class DeleteModelButton extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleSubmit() {
        this.props.deleteModel(this.props.modelId);
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button className='deleteButton' onClick={this.openModal}>Delete</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    className="deleteModelModal"
                    overlayClassName="deleteModelOverlay"
                >

                    <h2 className='modalTitle'>Delete Model?</h2>
                    <button className='modalButton' onClick={this.handleSubmit}>Yes</button>
                    <button className='modalButton' onClick={this.closeModal}>No</button>
            
                </Modal>
            </div>
        );
    }
}
export default DeleteModelButton