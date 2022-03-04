import React from 'react';
import Button from './Button';

export default {
    title: 'Form/Button',
    component: Button,
}


export const primary = () => <Button variant = 'primary'>Primary</Button>
export const secondary = () => <Button variant = 'secondary'>Primary</Button>
export const success = () => <Button variant = 'success'>Primary</Button>
export const danger = () => <Button variant = 'danger'>Primary</Button>