import { Table } from "../Table";

function EntryTable({ data, onRowClick }) {
    const columns = [
        {
            Header: "Line",
            accessor: "line"
        },
        {
            Header: "Qty",
            accessor: "qty"
        },
        {
            Header: "Code",
            accessor: "code",
        },
        {
            Header: "Desription",
            accessor: "desription"
        },
        {
            Header: "Hidden description",
            accessor: "hiddenDescription"
        },
        {
            Header: "Unit value",
            accessor: "unitValue"
        },
        {
            Header: "Discount",
            accessor: "discount"
        },
        {
            Header: "Tax",
            accessor: "tax"
        },
        {
            Header: "Line total",
            accessor: "lineTotal"
        },
    ];
    return (
        <Table columns={columns} data={data} onRowClick={onRowClick}/>
    );
}

export { EntryTable };