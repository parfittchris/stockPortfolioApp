import $ from 'jquery';

export const signUp = user => (
    $.ajax({
        method: 'POST',
        url: 'localhost:3000/api/users',
        data: user
    })
);
