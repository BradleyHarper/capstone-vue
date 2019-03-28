var food = document.getElementById('fbutton');
var water = document.getElementById('wbutton');

var data = food.addEventListener('click', function feedReq(){
    fetch('http://71.11.135.22:3000/api/servo2/sml', {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'POST',
        'body': JSON.stringify(data)
    }).then((Response) => Response.json);
});

var data2 = water.addEventListener('click', function waterReq(){
    fetch('http://71.11.135.22:3000/api/servo2/sml', {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'POST',
        'body': JSON.stringify(data2)
    }).then((Response) => Response.json);
});

console.log(Response);
