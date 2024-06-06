let navbar = document.getElementById("navid");

window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky")
    }
})

jQuery(document).ready(function(){
	jQuery(".modal").on('hidden.bs.modal', function (e) {
	var jQueryiframes = jQuery(e.target).find('iframe');
	jQueryiframes.each(function(index, iframe){
	jQuery(iframe).attr('src', jQuery(iframe).attr('src'));
	});
	})
});
 jQuery(document).ready(function($) {
    $('body').on('hidden.bs.modal', '#exampleModal', function() {
        $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
    });
}); 
jQuery(document).ready(function($) {
    $('body').on('hidden.bs.modal', '.modal', function(e) {
        $('video').trigger('pause');
        callPlayer('player', 'stopVideo');
    });
});