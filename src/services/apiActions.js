import $ from "jquery";

const API_URL = "/api/";

function post(endpoint, perform, data, callback) {
    data.perform = perform;
    $.ajax({
        type: 'POST',
        url: API_URL + endpoint,
        data: data,
        success: function(response) {

            callback(response);
        },
        fail: function() {

        }
    });
}

function get(endpoint, callback) {
    $.ajax({
        type: 'GET',
        url: API_URL + endpoint,
        success: function(response) {

            callback(response);
        },
        fail: function() {

        }
    })
}

export const apiAction = {
    post,
    get,
}