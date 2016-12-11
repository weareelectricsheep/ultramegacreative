$('.item').hide();

$('.divbox').hover(function() {
    $(this).children('.item').fadeToggle("slow");
}, function() {
    $(this).children('.item').hide();
});
