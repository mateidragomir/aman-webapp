import React from "react";

import { ManualOrderEntryForm } from "./ManualOrderEntryForm";
import { LineEditForm } from "./LineEditForm";
import { EntryTable } from "./EntryTable";

class OrderEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editIndex: 0,
            orderNumber: 1,
            items: [{
            }],
        }

        this.addEntry = this.addEntry.bind(this);
        this.editEntry = this.editEntry.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.editRow = this.editRow.bind(this);
    }

    addEntry(state) {
        const entry = new Entry();
        entry.setState(state);
        entry.setState({
            line: this.state.items.length,
            orderNumber: this.state.orderNumber,
            tax: "GST", 
        });
        const items = this.state.items.concat(entry);
        this.setState({
            items: items,
        });
    }

    editEntry(state) {
        const entry = new Entry();
        entry.setState(state);
        entry.setState({
            line: this.state.editIndex,
            orderNumber: this.state.orderNumber,
            tax: "GST", 
        });
        const items = this.state.items;
        items.splice(this.state.editIndex, 1, entry);
        this.setState({
            isEditing: false,
            items: items,
        });
    }

    cancelEdit() {
        this.setState({
            isEditing: false,
        });
    }

    editRow(i) {
        this.setState({
            isEditing: true,
            editIndex: i,
        })
    }

    render() {
        const data = this.state.items;
        const { isEditing, editIndex } = this.state;
        const entry = this.state.items[editIndex];
        return (
            <div className="order-entry-page">
                <div className="form-container">
                    {isEditing ? <LineEditForm taxInt="5" entry={entry} onSubmit={this.editEntry} onCancel={this.cancelEdit}/> : <ManualOrderEntryForm taxInt="5" onSubmit={this.addEntry} />}
                </div>
                <div className="table-container">
                    <EntryTable data={data} onRowClick={this.editRow}/>
                </div>
            </div>
        );
    }
}

class Entry {
    constructor() {
        this.qty = null;
        this.orderNumber = null;
        this.line = null;
        this.code = null;
        this.control = null;
        this.desription = null;
        this.hiddenDescription = null;
        this.unitValue = null;
        this.discount = 0;
        this.tax = "NONE";
        
        this.taxInt = 0;
        this.lineTotal = null;
        this.rawAmountCents = null;

        this.setState = this.setState.bind(this);
    }

    setState(state) {
        this.qty = state.qty ? state.qty : this.qty;
        this.orderNumber = state.orderNumber ? state.orderNumber : this.orderNumber;
        this.line = state.line ? state.line : this.line;
        this.code = state.code ? state.code : this.code;
        this.control = state.control ? state.control : this.control;
        this.desription = state.desription ? state.desription : this.desription;
        this.hiddenDescription = state.hiddenDescription ? state.hiddenDescription : this.hiddenDescription;
        this.unitValue = state.unitValue ? state.unitValue : this.unitValue;
        this.discount = state.discount ? state.discount : this.discount;
        this.tax = state.tax ? state.tax : this.tax;

        this.taxInt = state.tax === "GST" ? 5 : this.taxInt;
 
        this.lineTotal = this.qty && this.unitValue ? (this.qty * this.unitValue * (1 - this.discount / 100) * (1 + this.taxInt / 100)).toFixed(2) : null;

        this.rawAmountCents = this.qty && this.unitValue ? this.qty * this.unitValue : null;
    }
}

export { OrderEntry };