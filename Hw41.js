$('.t1 .block').each(function(a){
    $(this).click(function(){
        $(this).css('background', 'red')
    })
})
$('.t2 .block').click(function(){
    $(this).css('background', 'red')
})
$('.t2 .block').first().click(function(){
    $(this).css('background', 'green')
})
$('.t3 .block').click(function(){
    $(this).css('background', 'red')
})
$('.t3 .block').last().click(function(){
    $(this).css('background', 'green')
})
$('.t4 .blackBtn').click(function(){
    $('.t4 .blocks').append('<div class="redBlock"></div>')
})
$('.t5 .blackBtn').click(function(){
    $('.t5 .blocks').prepend('<div class="redBlock"></div>')
})
$('.t6 .blackBtn').click(function(){
    $('<div class="redBlock"></div>').prependTo($('.t6 .blocks'))
})
$('.t7 .blackBtn').click(function(){
    $('<div class="redBlock"></div>').appendTo($('.t7 .blocks'))
})
$('.t8 .blackBtn').click(function(){
    $('.t8 .task').before('<div class="redBlock"></div>')
})
$('.t9 .blackBtn').click(function(){
    $('.t9 .task').after('<div class="redBlock"></div>')
})
$('.t10 .blackBtn').click(function(){
    $('.t10 .greenBlock').empty()
})
$('.t11 .blackBtn').click(function(){
    $('.t11 .greenBlock').remove()
})
const i12 = document.querySelector('.t12 .inp input')
let currentHeight = 50
$('.t12 .inp .blackBtn').click(function(){
    $('.t12 .greenBlock').height(i12.value + 'px')
    currentHeight = +(i12.value)
})
$('.t12 .h .blackBtn').click(function(){
    $('.t12 .greenBlock').text('Высота ' + String(currentHeight))
})
const i13 = document.querySelector('.t13 .inp input')
let currentWidth = 50
$('.t13 .inp .blackBtn').click(function(){
    $('.t13 .greenBlock').width(i13.value + 'px')
    currentWidth = +(i13.value)
})
$('.t13 .h .blackBtn').click(function(){
    $('.t13 .greenBlock').text('Ширина ' + String(currentWidth))
})