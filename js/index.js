$(document).ready(function (){
    var arr = [];
    var screen = $('#screen');
    var str = '';
    
    $('.buttons').click(function(event){
        var number = ($(event.target).context.innerHTML);
        screen.append(number);
        arr.push(number)
    })
    $('#equals').click(function(event){
        str = arr.join('');
        total = eval(str);
        screen.empty();
        screen.append(total);
    })
    $('#clear').click(function(event){
        location.reload(true);
    })
})