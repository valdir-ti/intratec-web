import { useState } from 'react';

import Box from '@mui/material/Box';
import { userRows, userColumns } from '../../datatablesource';

import useConfirm from '../../hooks/useConfirmDialog';

import { Datagrid, LinkStyle } from './styles';

const columns = userColumns

const Datatable = () => {

    const {ConfirmationDialog, confirm} = useConfirm(
      'Excluir',
      'Deseja realmente excluir o item selecionado?',
    );

    const [data, setData] = useState(userRows);

    const handleDelete = async (id: number) => {
      const confirmAnswer = await confirm()
      if(confirmAnswer){
        setData(data.filter((item) => item.id !== id));
      }
    };

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
      </Box>
    )
}

export default Datatable