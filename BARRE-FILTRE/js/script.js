/*-------------------------
CURSEUR COULISSANT FILTRE RECHERCHE
-------------------------*/

$( function() {
  $( "#slider" ).slider({

    value:0,
    min: 0,
    max: 100,
    step: 25,
    //Après avoir bouger le curseur
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value + "km"   );
    }
  });

  //Au chargement de la page
  $( "#amount" ).val( $( "#slider" ).slider( "value" ) + "km"   );
});


/*-------------------------

-------------------------*/