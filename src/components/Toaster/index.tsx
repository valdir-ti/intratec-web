import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface IToaster {
    title: string;
    severity: any;
    open: boolean;
    onClose: () => void;
}

export default function Toaster({ title, severity, open, onClose }: IToaster) {
    const newLocal = 'top right';
    return (
        <>
        <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            key={newLocal}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {title}
            </Alert>
        </Snackbar>
        </>
    );
}