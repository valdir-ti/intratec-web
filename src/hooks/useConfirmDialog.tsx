import { useState } from 'react';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

import * as S from './styles';

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
        <S.Container
            open={promise !== null}
            fullWidth
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <S.DialogYesButton onClick={handleConfirm}>Sim</S.DialogYesButton>
                <S.DialogNoButton onClick={handleCancel}>Não</S.DialogNoButton>
            </DialogActions>
        </S.Container>
    )

    return { confirm, ConfirmationDialog }
}

export default useConfirm