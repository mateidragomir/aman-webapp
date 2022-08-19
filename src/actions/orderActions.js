import { orderService } from '../services';

function addOrUpdateLine( orderLine ) {
    const { qty, orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents } = orderLine;

    const addOrUpdateLineReq = Promise.resolve(orderService.addOrUpdateLine( qty, orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents));

    addOrUpdateLineReq.then( value => {
		let itemData;
		if (value.wasSuccessful) {
			itemData = value.data;
		} else {
			itemData = value.msg;
		}
		return itemData;
    });
}

function itemCodeCheck( code, callback ) {
    const itemCodeCheckReq = Promise.resolve(orderService.itemCodeCheck( code ));

    itemCodeCheckReq.then( value => {
		let itemData;
		if (value.wasSuccessful) {
			itemData = value.data;
		} else {
			itemData = value.msg;
		}
		callback(itemData);
    });
}

export const orderAction = {
    addOrUpdateLine,
    itemCodeCheck,
}