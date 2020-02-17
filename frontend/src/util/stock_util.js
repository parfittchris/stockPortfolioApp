import $ from 'jquery';

export const buyStock = stock => (
    $.ajax({
        method: 'POST',
        url: 'api/stocks',
        data: stock
    })
);

export const updateStock = stock => (
    $.ajax({
        method: 'PATCH',
        url: `api/stocks/1`,
        data: stock
    })
);

export const sellStock = stock => (
    $.ajax({
        method: 'DELETE',
        url: `api/stocks/1`,
        data: stock
    })
);