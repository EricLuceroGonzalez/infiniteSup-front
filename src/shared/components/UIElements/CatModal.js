import React from 'react';

import Modal from './Modal';
import Button from './Button';

const CatModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.show}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.message}</p>
    </Modal>
  );
};

export default CatModal;