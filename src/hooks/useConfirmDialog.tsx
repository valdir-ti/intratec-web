import { useState } from 'react';
import {
    Button, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

const useConfirm = (title: string, message: string) => {

    const [promise, setPromise] = useState<any>(null);

    const confirm = () => new Promise((resolve, reject) => {
        setPromise({ resolve });
    })

    const handleClose = () => {
        setPromise(null)
    }

    const handleConfirm = () => {
        promise?.resolve(true)
        handleClose()
    }

    const handleCancel = () => {
        promise?.resolve(false)
        handleClose()
    }

    const ConfirmationDialog = () => (
        <Dialog
            open={promise !== null}
            fullWidth
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm}>Sim</Button>
                <Button onClick={handleCancel}>Não</Button>
            </DialogActions>
        </Dialog>
    )

    return { confirm, ConfirmationDialog }
}

export default useConfirm