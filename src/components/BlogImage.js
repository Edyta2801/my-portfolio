import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images1 = [{
    src: 'path/to/blog_1.png'
},
{
    src: './images/blog_2.png'
}];

class BlogImage extends React.Component {
    state = { modalIsOpen: false };
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };
    render() {
        const { modalIsOpen } = this.state;

        return (
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={this.toggleModal}>
                        <Carousel views={images1} />
                    </Modal>
                ) : null}
            </ModalGateway>
        );
    }
}
export default BlogImage;