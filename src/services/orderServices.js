import { apiAction } from './apiActions';

const ORDER_ENDPOINT = "order";

async function addOrUpdateLine(qty, orderNumber, line, code, control, description, hiddenDescription, discount, tax, rawAmountCents) {
    const data = {
        qty,
        orderNumber,
        line,
        code,
        control,
        description,
        hiddenDescription,
        discount,
        tax,
        rawAmountCents,
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

// async function itemCodeCheck(code) {
//     const data = {
//         code,
//     }

//     const perform = "";
//     let itemCodeCheckReq;

//     const callback = (response) => {
//         if (response.code === 200) {
//             itemCodeCheckReq = {
//                 wasSuccessful:  true,
//                 data:           response.data,
//             }
//         } else if (response.code === 409) {
//             itemCodeCheckReq = {
//                 wasSuccessful:  false,
//                 msg:            response.errorMessage,
//             }
//         } else {
//             itemCodeCheckReq = {
//                 wasSuccessful:  false,
//                 msg:            "Error",
//             }
//         }
//     };

//     await apiAction.post(ORDER_ENDPOINT, perform, data, callback);
//     return itemCodeCheckReq;
// }

async function itemCodeCheck(code) {
    return {
        wasSuccessful: true,
        data: {
            exists: false,
        }
    }
}
export const orderService = {
    addOrUpdateLine,
    itemCodeCheck,
}