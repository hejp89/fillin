fillInDate = function(start, end, delta){
    if(!end || !start || !delta){
        throw 'end, start, and delta must be supplied';
    }

    if(['day', 'week', 'month'].indexOf(delta) == -1){
        throw 'delta must be eith day, week, or month';
    }

    if(end < start){
        throw 'end must be after start';
    }

    var result = [];
    var current = new Date(start.getTime());

    while(current <= end){
        result.push(new Date(current.getTime()));

        switch (delta) {
            case 'day':
                current.setDate(current.getDate() + 1);
            break;
            case 'week':
                current.setDate(current.getDate() + 7);
            break;
            case 'month':
                current.setMonth(current.getMonth() + 1);
            break;
        }
    }

    return result;
}

fillin = {
    'date': fillInDate,
    'DAY': 'day',
    'WEEK': 'week',
    'MONTH': 'month'
}
