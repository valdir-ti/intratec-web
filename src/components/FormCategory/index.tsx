import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'

import Toaster from '../Toaster';
import FormField from '../Form/FormField';
import FormButton from '../Form/FormButton';
import Layout from '../../pages/Layout';
import FormCheckbox from '../Form/FormCheckbox';

import * as S from './styles';

interface LocationProps {
    id: string;
    title: string;
    description: string;
    specifications: string;
    price: string;
    stock: number;
    img: string;
    isActive: boolean;
}

interface Props {
    isEditing?: boolean;
}

const FormProduct = ({ isEditing }: Props) => {

    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as LocationProps

    const [title, setTitle] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [id, setId] = useState<string>(state?.id || "");

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState<boolean>(false)
    const [toasterMessage, setToasterMessage] = useState<string>("")
    const [toasterSeverity, setToasterSeverity] = useState<string>("")

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!title) {
            toasterStart("error", "O título é obrigatório (*)")
            setLoading(false)
            return
        }

        try {
            const itemId = uuidv4()
            await setDoc(doc(db, 'categories', itemId), {
                title,
                isActive,
                id: itemId,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item cadastrado com sucesso!")
            setTimeout(() => {
                navigate('/categories')
            }, 1500)
        } catch (err: any) {
            console.log('Error => ', err)
        }

    }

    async function handleFormUpdate(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!title) {
            toasterStart("error", "O título é obrigatório (*)")
            setLoading(false)
            return
        }

        try {
            await updateDoc(doc(db, 'categories', id), {
                title,
                isActive,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item atualizado com sucesso!")
            setTimeout(() => {
                navigate('/categories')
            }, 1500)
        } catch (err: any) {
            console.log('Error => ', err)
        }
    }

    function toasterStart(severity: string, message: string){
        setToasterSeverity(severity)
        setToasterMessage(message)
        setOpen(true)
    }

    function handleClose (event?: React.SyntheticEvent | Event, reason?: string) {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if(state) {
            const { id, title, isActive } = state
            setId(id)
            setTitle(title)
            setIsActive(isActive)
        }
    }, [state])

    const disabledButton = title === state?.title && isActive === state?.isActive

    return (
        <Layout>
            <S.Form onSubmit={isEditing ? handleFormUpdate : handleFormSubmit}>
                <S.Title>{isEditing ? 'Edit Category' : 'Add New Category'}</S.Title>

                <FormField
                    label='Title'
                    obrigatory
                    type='text'
                    placeholder='Title'
                    value={title}
                    autoComplete='off'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <FormCheckbox
                    label='isActive'
                    checked={isActive}
                    type='checkbox'
                    onChange={() => setIsActive(!isActive)}
                />

                <FormButton
                    label={isEditing ? 'Edit' : 'Save'}
                    loading={loading}
                    disabled={disabledButton}
                />

            </S.Form>
            <Toaster
                open={open}
                title={toasterMessage}
                severity={toasterSeverity}
                onClose={handleClose}
            />
        </Layout>
    )
}

export default FormProduct