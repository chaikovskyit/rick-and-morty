import React, { useState } from 'react';
import PopUp from './PopUp'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const CardInfo = ({name, image, person}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card className='card' onClick={() => toggle()} >
      <CardImg top width="100%" src={image} alt="Character image" />
      <CardBody>
        <CardTitle tag="h5">{name}<br/></CardTitle>
      </CardBody>
      <PopUp person={person} toggle={toggle} isOpen={isOpen} />
    </Card>
  );
};

export default CardInfo;