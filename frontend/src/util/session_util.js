import $ from 'jquery';
 
export const login = user => (
    $.ajax({
        method: 'POST',
        url:'localhost:3000/api/session',
        data: user
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'localhost:3000/api/session'
    })
);