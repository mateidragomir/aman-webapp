import $ from "jquery";

const API_URL = "http://localhost:8080/api/";

function post(endpoint, perform, data, callback) {
    data.perform = perform;
    $.ajax({
        type: 'POST',
        url: API_URL + endpoint,
        data: data,
        success: function(response) {
            callback(JSON.parse(response));
        },
        fail: function(response) {

        }
    });
}

function get(endpoint, callback) {
    $.ajax({
        type: 'GET',
        url: API_URL + endpoint,
        success: function(response) {
            callback(JSON.parse(response));
        },
        fail: function() {

        }
    });
}

export const apiAction = {
    post,
    get,
}