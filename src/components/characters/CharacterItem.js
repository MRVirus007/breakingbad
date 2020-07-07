import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CharacterItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <Button variant="primary" onClick={handleShow}>
                More Details
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                style={{ width: "80% !important" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Occupation:</strong>
                      <ol className="list-group">
                        {item.occupation.map((occupation) => (
                          <li className="list-group-item">{occupation}</li>
                        ))}
                      </ol>
                    </li>
                    <li className="list-group-item">
                      <strong>Appearance in Seasons:</strong>
                      <ul>
                        {item.appearance.map((appearance) => (
                          <button
                            className="btn btn-success btn-sm rounded-circle"
                            style={{ margin: "1%" }}
                          >
                            {appearance}
                          </button>
                        ))}
                      </ul>
                    </li>
                    <li className="list-group-item">
                      <strong>Portrayed As: </strong>
                      {item.portrayed}
                    </li>
                  </ul>
                </Modal.Body>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
