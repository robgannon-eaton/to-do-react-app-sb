import React from 'react';
import Button from './Button';

export default {
    title: 'Form/Button',
    component: Button,
}


export const Primary = () => <Button variant = 'primary'>HELLO!!!</Button>
export const Secondary = () => <Button variant = 'secondary'>Primary</Button>
export const Success = () => <Button variant = 'success'>Primary</Button>
export const Danger = () => <Button variant = 'danger'>Primary</Button>