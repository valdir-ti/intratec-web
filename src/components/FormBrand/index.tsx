import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { supabaseClient } from '../../supabase';

import Toaster from '../Toaster';
import FormField from '../Form/FormField';
import FormButton from '../Form/FormButton';
import Layout from '../../pages/Layout';
import FormCheckbox from '../Form/FormCheckbox';

import * as S from './styles';

interface LocationProps {
    id: string;
    title: string;
    status: boolean;
}

interface Props {
    isEditing?: boolean;
}

const FormBrand = ({ isEditing }: Props) => {

    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as LocationProps
    const currentUser = JSON.parse(localStorage.getItem("user")!)

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(false);
    const [id, setId] = useState<string>(state?.id || "");

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState<boolean>(false)
    const [toasterMessage, setToasterMessage] = useState<string>("")
    const [toasterSeverity, setToasterSeverity] = useState<string>("")

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!title) {
            toasterStart("error", "O título da marca é obrigatório (*)")
            setLoading(false)
            return
        }

        try {
            const itemId = uuidv4()
            const { error } = await supabaseClient.from('brands').insert([
                { id: itemId, title: title, status: status, user_id: currentUser.uid  },
            ])

            if(!error){
                toasterStart("success", "Item cadastrado com sucesso!")
                setTimeout(() => {
                    navigate('/brands')
                }, 1500)
            }

        } catch (err) {
            console.log('Error: ', err)
        }
    }

    async function handleFormUpdate(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!title) {
            toasterStart("error", "O título da marca é obrigatório (*)")
            setLoading(false)
            return
        }

        try {
            const { error } = await supabaseClient.from('brands')
            .update({ title: title, status: status, user_id: currentUser.uid, updated_at: new Date() })
            .eq('id', id)

            if(!error){
                toasterStart("success", "Item atualizado com sucesso!")
                setTimeout(() => {
                    navigate('/brands')
                }, 1500)
            }

        } catch (err) {
            console.log('Error: ', err)
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
            const { id, title, status } = state
            setId(id)
            setTitle(title)
            setStatus(status)
        }
    }, [state])

    const disabledButton = title === state?.title && status === state?.status

    return (
        <Layout>
            <S.Form onSubmit={isEditing ? handleFormUpdate : handleFormSubmit}>
                <S.Title>{isEditing ? 'Edit Brand' : 'Add New Brand'}</S.Title>

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
                    label='Status'
                    checked={status}
                    type='checkbox'
                    onChange={() => setStatus(!status)}
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

export default FormBrand