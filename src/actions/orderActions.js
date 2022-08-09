import { orderService } from '../services';

function addOrUpdateLine({ orderLine }) {
    const { orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents } = orderLine;

    const addOrUpdateLineReq = Promise.resolve(orderService.addOrUpdateLine(orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents));

    addOrUpdateLine.then( value => {

    });

    //TODO return somthing probably
}

export const orderAction = {
    addOrUpdateLine,
}