import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { userColumns } from '../../datatablesource';

import { collection, onSnapshot } from "firebase/firestore";

import useConfirm from '../../hooks/useConfirmDialog';

import Toaster from '../Toaster';

import { Datagrid, LinkStyle } from './styles';
import { db } from '../../firebase';

const columns = userColumns

const Datatable = () => {

    const [data, setData] = useState<any[]>([])
    const [open, setOpen] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const { ConfirmationDialog, confirm } = useConfirm(
      'Excluir',
      'Deseja realmente excluir o item selecionado?',
    );

    const handleDelete = async (id: number) => {
      const confirmAnswer = await confirm()
      if(confirmAnswer){
        setData(data.filter((item: any) => item.id !== id));
        setOpen(true);
      }
    };

    useEffect(() => {
      const unsub = onSnapshot(
        collection(db, 'users'),
        (snapshot) => {
            let list: any = []
            snapshot.docs.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() })
            })
            setData(list)
        }, (err) => {
            console.log('Error =>', err)
        })
        return () => {
            unsub()
        }
    }, []);

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params: any) => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>
                          <LinkStyle to={`/users/${params.row.id}`} className='viewButtonLink'>
                            View
                          </LinkStyle>
                        </div>
                        <div className='deleteButton deleteButtonLink' onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
      <Box sx={{ height: '85%', width: '100%' }}>
        <Datagrid
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
        <ConfirmationDialog />
        <Toaster
          open={open}
          title='Item deletado com sucesso!'
          severity='success'
          onClose={handleClose}
        />
      </Box>
    )
}

export default Datatable