
export default {
    controller : [
        {
            method : 'get',
            path : '/list',
            func : 'personList'
        },
        {
            method : 'get',
            path : '/read',
            func : 'personRead'
        },
        {
            method : 'post',
            path : '/insert',
            func : 'personInsert'
        },
        {
            method : 'get',
            path : '/personIndex',
            func : 'personIndex'
        },
        {
            method : 'get',
            path : '/coffeeshopRead',
            func : 'coffeeshopRead'
        }
    ]
}