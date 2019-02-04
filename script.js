

var $container = $('#container').isotope({
  itemSelector: '.grid-item',
  masonry: {
  columnWidth: 100,
    isFitWidth: true,
}  
});

var $output = $('#output');

 // filter with selects and checkboxes
  var $inputs = $('#form-ui select, #form-ui input').change( function() {
    // map input values to an array
    var values = [];
    $inputs.each( function( i, elem ) {
      var value;
      if ( elem.type === 'checkbox' ) {
        // if checkbox, use value if checked
        value = elem.checked && elem.value;
      } else {
        // or use select's value
        value = elem.value;
      }
      if ( value ) {
        values.push( value )
      }
    });
    
    var filterValue = values.join(', ');
    $output.text( filterValue );
    $container.isotope({ filter: filterValue })
  });




