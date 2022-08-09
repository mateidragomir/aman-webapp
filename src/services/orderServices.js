import { apiAction } from './apiActions';

const ORDER_ENDPOINT = "order";

async function addOrUpdateLine(orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents) {
    const data = {
        orderNumber: orderNumber,
        line: line,
        code: code,
        control: control,
        description: description,
        hiddenDescription: hiddenDescription,
        discount: discount,
        tax: tax,
        rawAmountCents: rawAmountCents,
    };
    const perform = "";
    let addOrUpdateLineReq;

    const callback = (response) => {
        if (response.code === 200) {
            addOrUpdateLineReq = {
                wasSuccessful:  true,
                data:           response.data,
            }
        } else if (response.code === 409) {
            addOrUpdateLineReq = {
                wasSuccessful:  false,
                msg:            response.errorMessage,
            }
        } else {
            addOrUpdateLineReq = {
                wasSuccessful:  false,
                msg:            "Error",
            }
        }
    };

    await apiAction.post(ORDER_ENDPOINT, perform, data, callback);
    return addOrUpdateLineReq;
}

export const orderService = {
    addOrUpdateLine,
}