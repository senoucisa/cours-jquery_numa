$(function(){
    $('aside a').click(function(){
        // alert('clic');

        // J'annule le clic sur le lien
        event.preventDefault();
        $(this).attr('href');
        console.log($(this).attr('href'));

        var monHref = $(this).attr('href');

        $('figure img').attr("src", monHref);
        

        // Recuperer dans une variable le ALT des images vignettes puis changer le contenu de figcaption avec cette variable
        var monAlt = $(this).attr('title');
        $('figcaption h3').html(monAlt);

       
    });
});
