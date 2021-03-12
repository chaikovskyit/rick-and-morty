import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const PopUp = ({ className, person, toggle, isOpen }) => (
  <div>
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      <ModalHeader className='modalHeaedr' toggle={toggle}>
        <img src={person.image} alt="person icon"/>
      </ModalHeader>
      <ModalBody>
        <b>Name:</b> {person.name}<br/>
        <b>Status:</b> {person.status}<br/>
        <b>Species:</b> {person.species}<br/>
        <b>Gender:</b> {person.gender}<br/>
        <b>Origin:</b> {person.origin.name} {person.origin.url}<br/>
        <b>Location:</b> {person.location.name} {person.location.url}<br/>
        <b>Episodes:</b> {person.episode.length}
        <ul>
          {person.episode.map( e => <li>{e}</li>)}
        </ul>
      </ModalBody>
    </Modal>
  </div>
);

export default PopUp;