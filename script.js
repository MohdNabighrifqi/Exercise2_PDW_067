$(document).ready(function(){
    $('.btn-group-vertical button').click(function(){
        $('.form-container, .page-container').removeClass('active');
        $($(this).data('target')).addClass('active');
    });
});

function showAlert() {
    alert("Ini Merupakan Web");
}