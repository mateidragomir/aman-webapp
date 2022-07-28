import React from "react";
import { useMemo } from "react";

import { Table } from "../Table";

class OrderEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
            }],
        }

        this.addEntry = this.addEntry.bind(this);
    }

    addEntry(state) {
        const entry = new Entry();
        entry.setState(state);
        const items = this.state.items.concat(entry);
        this.setState({
            items: items,
        });
    }

    render() {
        const data = this.state.items;
        return (
            <div className="order-entry-page">
                <div className="form-container">
                    <ManualOrderEntryForm tax="5" onSubmit={this.addEntry} />
                </div>
                <div className="table-container">
                    <EntryTable data={data}></EntryTable>
                </div>
            </div>
        );
    }
}

class Entry {
    constructor() {
        this.qty = null;
        this.item = null;
        this.vendor = null;
        this.desription = null;
        this.unitValue = null;
        this.discount = 0;
        this.tax = 0;
        this.lineTotal = null;

        this.setState = this.setState.bind(this);
    }

    setState(state) {
        this.qty = state.qty ? state.qty : this.qty;
        this.item = state.item ? state.item : this.item;
        this.vendor = state.vendor ? state.vendor : this.vendor;
        this.desription = state.desription ? state.desription : this.desription;
        this.unitValue = state.unitValue ? state.unitValue : this.unitValue;
        this.discount = state.discount ? state.discount : this.discount;
        this.tax = state.tax ? state.tax : this.tax;
        this.lineTotal = this.qty && this.unitValue ? this.qty * this.unitValue * (1 - this.discount / 100) * (1 + this.tax / 100) : null;
    }
}

class ManualOrderEntryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 1,
            item: "",
            vendor: "",
            desription: "",
            unitValue: "",
            discount: 0,
            tax: 0,
            submitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { qty, item, vendor, unitValue } = this.state;
        this.setState({ submitted: true });
        if (qty && item && vendor && unitValue) {
            this.props.onSubmit(this.state);
            this.clearForm();
        }
    }

    clearForm() {
        this.setState({
            qty: 1,
            item: "",
            vendor: "",
            desription: "",
            unitValue: "",
            discount: 0,
            submitted: false,
        });
    }

    componentDidMount() {
        this.setState({ tax: this.props.tax });
    }

    render() {
        const { qty, item, vendor, desription, unitValue, discount, tax, submitted } = this.state;
        return (
            <div className="order-entry-form">
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !qty ? ' has-error' : '')}>
                        <label htmlFor="qty">Qty</label>
                        <input type="number" className="form-control" name="qty" value={qty} onChange={this.handleChange} />
                        {submitted && !qty &&
                            <div className="help-block">Please enter quantity</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !item ? ' has-error' : '')}>
                        <label htmlFor="item">Item</label>
                        <input type="text" className="form-control" name="item" value={item} onChange={this.handleChange} />
                        {submitted && !item &&
                            <div className="help-block">Please enter item id</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !vendor ? ' has-error' : '')}>
                        <label htmlFor="vendor">Vendor</label>
                        <input type="text" className="form-control" name="vendor" value={vendor} onChange={this.handleChange} />
                        {submitted && !vendor &&
                            <div className="help-block">Please enter vendor id</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="desription">Desription</label>
                        <input type="text" className="form-control" name="desription" value={desription} onChange={this.handleChange} />
                    </div>
                    <div className={'form-group' + (submitted && !unitValue ? ' has-error' : '')}>
                        <label htmlFor="unitValue">Unit value</label>
                        <input type="number" className="form-control" name="unitValue" value={unitValue} onChange={this.handleChange} />
                        {submitted && !unitValue &&
                            <div className="help-block">Please enter unit value</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Discount</label>
                        <input type="number" className="form-control" name="discount" value={discount} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tax">Tax</label>
                        <p>{!tax || tax === 0 ? "None" : tax + '%'}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="LineTotal">Line total</label>
                        <p>${qty * unitValue * (1 - discount / 100) * (1 + tax / 100)}</p>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add item" />
                    </div>
                </form>
            </div>
        );
    }

}

function EntryTable({ data }) {
    const columns = useMemo(() => [
        {
            Header: "Qty",
            accessor: "qty"
        },
        {
            Header: "Item",
            accessor: "item"
        },
        {
            Header: "Vendor",
            accessor: "vendor"
        },
        {
            Header: "Desription",
            accessor: "desription"
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
    ], []);
    return (
        <Table columns={columns} data={data} />
    );
}
export { OrderEntry };