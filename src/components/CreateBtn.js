import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Home, RotateCcw } from "react-feather";

function CreateBtn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="mt-3">
            <button className="create-btn-ah" onClick={handleShow}>Create +</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton
                    style={{ padding: "10px 50px" }} >
                    <Modal.Title>What would you like to create?</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "15px 50px" }}>
                    <div className="create-quiz-ah mb-4">
                        <h5>
                            <RotateCcw style={{ background: "#ffe3ba" }} className="create-icon-ah" />    New Product
                        </h5>
                        <p>Price and Description has to be added</p>
                    </div>

                    <div className="create-quiz-ah">
                        <h5>
                            <Home style={{ background: "#c7eaff" }} className="create-icon-ah" />    New Vendor
                        </h5>
                        <p>Vendor contact details are needed.</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default CreateBtn;
