import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { userColumns, productColumns, companyColumns, categoryColumns, brandColumns } from '../../datatablesource';

import { supabaseClient } from '../../supabase'

import { db } from '../../firebase';
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

import Toaster from '../Toaster';
import useConfirm from '../../hooks/useConfirmDialog';

import { Datagrid, LinkStyle } from './styles';

const datatableColumns: any = {users: userColumns, products: productColumns, companies: companyColumns, categories: categoryColumns, brands: brandColumns};

interface DataTableProps {
  slug: string;
}

const Datatable = ({ slug }: DataTableProps) => {

    const [data, setData] = useState<any[] | null>([])
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

    const handleDelete = async (id: string) => {
      const confirmAnswer = await confirm()

      if(confirmAnswer && slug !== 'brands'){
        await deleteDoc(doc(db, slug, id));
        setData(data!.filter((item: any) => item.id !== id));
        setOpen(true);
      }else{

        const { error } = await supabaseClient.from('brands')
        .delete()
        .eq('id', id)

        if(!error){
          setData(data!.filter((item: any) => item.id !== id));
          setOpen(true);
        }
      }

    };

    useEffect(() => {
      const unsub = onSnapshot(
        collection(db, slug),
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
    }, [slug]);

    useEffect(() => {
      const fetchBrands = async () => {
        const resp = await supabaseClient.from(slug).select("id, status, title")
        if(resp.status === 200){
          setData(resp.data)
        }
      }

      if(slug === 'brands'){
        fetchBrands()
      }
    }, [slug])

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params: any) => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>
                          <LinkStyle to={`/${slug}/${params.row.id}`} className='viewButtonLink'>
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
          rows={data!}
          columns={datatableColumns[slug].concat(actionColumn)}
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