import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import axios from "axios";
import EpisodeGrid from "../episodes/EpisodeGrid";
import QuoteGrid from "../quotes/QuoteGrid";
import DeathGrid from "../deaths/DeathGrid";
const MenuHeader = () => {
  const [show, setShow] = useState(false);
  const [quo, setQuo] = useState(false);
  const [detro, setDetro] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/episodes`);
      setEpisodes(result.data);
      const quore = await axios(`https://www.breakingbadapi.com/api/quotes`);
      setQuotes(quore.data);
      const detros = await axios(`https://www.breakingbadapi.com/api/deaths`);
      setDeaths(detros.data);
    };
    fetchItems();
  }, []);
  return (
    <>
      <Navbar variant="dark">
        <Nav className="mr-auto">
          <Button
            style={{ margin: "2%" }}
            variant="success"
            onClick={() => setShow(true)}
          >
            Episodes
          </Button>
          <Button
            style={{ margin: "2%" }}
            variant="success"
            onClick={() => setQuo(true)}
          >
            Quotes
          </Button>
          <Button
            style={{ margin: "2%" }}
            variant="success"
            onClick={() => setDetro(true)}
          >
            Deaths
          </Button>
        </Nav>
      </Navbar>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Episodes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EpisodeGrid episodes={episodes} />
        </Modal.Body>
      </Modal>
      <Modal
        show={quo}
        onHide={() => setQuo(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Quotes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QuoteGrid quotes={quotes} />
        </Modal.Body>
      </Modal>
      <Modal
        show={detro}
        onHide={() => setDetro(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Deaths
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeathGrid deaths={deaths} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MenuHeader;
