import React, { useState, useRef } from 'react';
import {
  Container,
  Model,
  ModelHeading,
  ModelBody,
  ModelFooter,
} from './InputDialog.styles';
import { useOnClickOutSide } from '@hooks/custom';

const InputDialog = ({ active, accept, cancel, children }) => {
  if (!active) return <></>;

  const modelRef = useRef();
  useOnClickOutSide(modelRef, () => {
    cancel();
  });

  return (
    <Container>
      <Model ref={modelRef}>
        <ModelHeading>Confirm delete ?</ModelHeading>
        <ModelBody>{children}</ModelBody>
        <ModelFooter>
          <button
            className="mr-1 p-2 rounded border border-stone-400"
            onClick={() => cancel()}
          >
            Cancel
          </button>
          <button
            className="ml-1 p-2 rounded text-white bg-red-500"
            onClick={() => accept()}
          >
            Delete
          </button>
        </ModelFooter>
      </Model>
    </Container>
  );
};

export default InputDialog;
