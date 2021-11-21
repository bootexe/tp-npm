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

fetch('https://raphaelattal.com/api.php',{
    method:'GET',
    mode:'cors'
})
.then(resp => resp.json())
.then(response => {
    response.forEach(function(e,i){
        $('body .scroll').append(`
        <div class="quartier" style="animation-delay:${i/10}s">
            <img src="${e.url}" />
            <h2>${e.name}</h2>
            <p>${e.city}</p>
        </div>
        `)
    })
})
.catch(err => {
    console.log('global error',err);
})



