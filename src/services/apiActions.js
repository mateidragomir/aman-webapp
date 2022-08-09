import $ from "jquery";

const API_URL = "http://localhost:8080/api/";

async function post(endpoint, perform, data, callback) {
    data.perform = perform;
    await $.ajax({
        type: 'POST',
        url: API_URL + endpoint,
        data: data,
        success: function(response) {
            const parsedResponse = JSON.parse(response);
            callback(parsedResponse);
        },
        fail: function(response) {

        }
    });
}

async function get(endpoint, callback) {
    await $.ajax({
        type: 'GET',
        url: API_URL + endpoint,
        success: function(response) {
            const parsedResponse = JSON.parse(response);
            callback(parsedResponse);
        },
        fail: function() {

        }
    })
}

export const apiAction = {
    post,
    get,
}