import Box from '@mui/material/Box';
import { userRows, userColumns } from '../../datatablesource';

import { Datagrid } from './styles';

const columns = userColumns
const rows = userRows

const Datatable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>View</div>
                        <div className='deleteButton'>Delete</div>
                    </div>
                )
            }
        }
    ]

  return (
    <Box sx={{ height: '80%', width: '100%' }}>
      <Datagrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  )
}

export default Datatable