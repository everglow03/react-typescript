import React from 'react';
import Styled from 'styled-components';



export const Input: React.FunctionComponent = () => <input type="text" placeholder="Name" />;
export const Form: React.FunctionComponent = ({ children }) => <form>{children}</form>;