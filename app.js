// $('img').click(function(){
//     alert('Hello!')
// })


$('img').on('mouseenter', function(){
    $(this).css('border', '10px solid purple')
})

$('img').on('click', function(){
    // $(this).fadeOut(3000, function(){
    //     $(this).remove();
    // });
    $(this).animate({
        opacity: 0,
        width: '50px',  //DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
    }, 1000, function(){
        $(this).remove();
    })
})

$('#add-input').on('click', function(){
    $('form').append('<input type="text"/>');
})

$('form').on('focus', 'input', function(){
    $(this).val('Bamboozaled')
});