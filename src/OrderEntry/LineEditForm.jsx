import React from "react";

class LineEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 1,
            code: "",
            control: "",
            desription: "",
            hiddenDescription: "",
            unitValue: "",
            discount: 0,
            submitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { qty, code, unitValue } = this.state;
        this.setState({ submitted: true });
        if (qty && code && unitValue) {
            this.props.onSubmit(this.state);
            this.clearForm();
        }
    }
    
    handleCancel(e) {
        e.preventDefault();
        this.props.onCancel();
    }

    clearForm() {
        this.setState({
            qty: 1,
            code: "",
            control: "",
            desription: "",
            hiddenDescription: "",
            unitValue: "",
            discount: 0,
            submitted: false,
        });
    }

    componentDidMount() {
        const { qty, code, control, desription, hiddenDescription, unitValue, discount } = this.props.entry;
        this.setState({
            qty: qty,
            code: code,
            control: control,
            desription: desription,
            hiddenDescription: hiddenDescription,
            unitValue: unitValue,
            discount: discount,
        })
        console.log("mounted");
    }

    render() {
        const { qty, code, control, desription, hiddenDescription, unitValue, discount, submitted } = this.state;
        const { taxInt } = this.props;
        return (
            <div className="order-entry-form">
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !qty ? '-has-error' : '')}>
                        <label htmlFor="qty">Qty</label>
                        <input type="number" className="form-control" name="qty" value={qty} onChange={this.handleChange} />
                        {submitted && !qty &&
                            <div className="help-block">Please enter quantity</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !code ? '-has-error' : '')}>
                        <label htmlFor="code">Code</label>
                        <input type="text" className="form-control" name="code" value={code} onChange={this.handleChange} />
                        {submitted && !code &&
                            <div className="help-block">Please enter item code</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !control ? '-has-warning' : '')}>
                        <label htmlFor="control">Control</label>
                        <input type="text" className="form-control" name="control" value={control} onChange={this.handleChange} />
                        {submitted && !control &&
                            <div className="help-block">Control code may be required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="desription">Desription</label>
                        <input type="text" className="form-control" name="desription" value={desription} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hiddenDescription">Hidden description</label>
                        <input type="text" className="form-control" name="hiddenDescription" value={hiddenDescription} onChange={this.handleChange} />
                    </div>
                    <div className={'form-group' + (submitted && !unitValue ? '-has-error' : '') + (unitValue === '0' ? '-has-warning' : '')}>
                        <label htmlFor="unitValue">Unit value</label>
                        <input type="number" className="form-control" name="unitValue" value={unitValue} onChange={this.handleChange} />
                        {submitted && !unitValue &&
                            <div className="help-block">Please enter unit value</div>
                        }
                        {unitValue === '0' &&
                            <div className="help-block">Warning: unit value $0</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Discount</label>
                        <input type="number" className="form-control" name="discount" value={discount} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taxInt">Tax</label>
                        <p>{!taxInt || taxInt === 0 ? "None" : taxInt + '%'}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="LineTotal">Line total</label>
                        <p>${(qty * unitValue * (1 - discount / 100) * (1 + taxInt / 100)).toFixed(2)}</p>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit item" />
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }

}

export { LineEditForm };