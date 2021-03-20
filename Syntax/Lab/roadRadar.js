function solve(speed, area) {
    let limit = 0;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    let speeding = speed - limit
    let status = ''
    if(speeding<=20){
        status = 'speeding';
    }else if(speeding >20 && speeding <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving'
    }
    
    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else if (speeding <= 20) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    } else if (speeding <= 90) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    } else if (speeding < 130) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
}
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));