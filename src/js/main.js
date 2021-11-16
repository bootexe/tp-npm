const $ = require( "jquery" );

console.log('hello world');


$('h1').on('click',function(e){
    console.log('click');
    if($(e.currentTarget).hasClass('active')){
        $(e.currentTarget).removeClass('active');
    }else{
        $(e.currentTarget).addClass('active');
    }
});