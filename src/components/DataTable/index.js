import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = (props) => {
    const { columns, rows, pageSize, rowsPerPageOptions, checkboxSelection } = props;

    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={rowsPerPageOptions}
            checkboxSelection={checkboxSelection}
        />
        </div>
    );
}

export default DataTable;