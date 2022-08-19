import { apiAction } from "../services";

const ORDER_ENDPOINT = "order";

const addOrUpdateLine = (parms, callback) => {
	const data = {
        qty: parms.qty,
        orderNumber: parms.orderNumber,
        line: parms.line,
        code: parms.code,
        control: parms.control,
        description: parms.description,
        hiddenDescription: parms.hiddenDescription,
        discount: parms.discount,
        tax: parms.tax,
        rawAmountCents: parms.rawAmountCents,
    };
	const perform = '';

	const onApiSuccess = (response) => {
		let req;
		switch (response.code) {
			case 200:
				req = {
					wasSuccessful: true,
					data: response.data,
				}
				break;
			default:
				req = {
                    wasSuccessful: false,
                    msg: response.errorMessage,
                }
		}
		callback(req);
	}
	apiAction.post(ORDER_ENDPOINT, perform, data, onApiSuccess);
}

const itemCodeCheck = (parms, callback) => {
	const data = {
        code: parms.code,
    };
	const perform = '';

	const onApiSuccess = (response) => {
		let req;
		switch (response.code) {
			case 200:
				req = {
					wasSuccessful: true,
					data: response.data,
				}
				break;
			default:
				req = {
                    wasSuccessful: false,
                    msg: response.errorMessage,
                }
		}
		callback(req);
	}
	apiAction.post(ORDER_ENDPOINT, perform, data, onApiSuccess);
}

export const orderActions = {
    addOrUpdateLine,
    itemCodeCheck,
}