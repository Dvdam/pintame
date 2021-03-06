var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $seleccionColorPaletaPersonalizado = $('#color-personalizado');

$seleccionColorPaletaPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $seleccionColorPaletaPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $colorSeleccionadoPaleta.css('background-color', colorActual);
});


//GUIA 1

//PALETA
var $grillaPaleta = $('#paleta');
function crearGrillaPaleta(){
  //Recorremos el array con el listado de colores
  for (var i = 0 ; i < nombreColores.length ; i++) {
    // Creamos cada color para asignarlo como fondo y Asignamos la clase y el background al elemento creado
    var $seleccionColorPaleta = $('<div>', {'class': 'color-paleta'});
    $seleccionColorPaleta.css('background-color',nombreColores[i]);
    $grillaPaleta.append($seleccionColorPaleta);
  }
}
crearGrillaPaleta();


// for (var ci = 0; ci < nombreColores.length; ci++) {
//   var nomcolor = nombreColores[ci];
//   $(document).ready(function() {
//       var $creaPaleta = $('<div>');
//       $('#paleta').append($creaPaleta);
      
//  });
// }



//GRILLA PIXELES
var $grillaPixeles = $('#grilla-pixeles');
function crearGrillaPixeles(){
  for (var i = 0 ; i < 1750 ; i++) {
    var $pixeles = $('<div>', {'class': 'grilla-de-pixeles'});
    $grillaPixeles.append($pixeles);

  }
}
crearGrillaPixeles();

//GUIA 2

//SELECCIONAR COLOR POR EL USUARIO
var $colorSeleccionadoPaleta = $('#indicador-de-color');
var $colorDePaletaElegido = $('#paleta div').click(function(){
  $colorElegido = $(this).css('backgroundColor');
  var $seleccionPaleta = $('#indicador-de-color').css('background-color',$colorElegido);
  $colorSeleccionadoPaleta.append($seleccionPaleta);
});

/*BONUS CAMBIO DE COLOR DEL BODY-------------------*/
$colorDePaletaElegido.click(function(){
  $colorElegido = $(this).css('backgroundColor');
  var $FondoBody = $('body').css('background-color',$colorElegido);
  $('body').append($FondoBody);
});
/*BONUS CAMBIO DE COLOR DEL BODY-------------------*/

//PINTAR LA GRILLA CON EL COLOR SELECCIONADO POR EL USUARIO
var $pintamosLaGrilla = $('#grilla-pixeles div');
$pintamosLaGrilla.click(function(){
  $(this).css('background-color', $colorSeleccionadoPaleta.css('background-color'));
});

//DETECTAMOS SI EL BOTON DEL MOUSE ESTA APRETADO
var mousePintor = false;
var $mouseEnGrilla = $('.grilla-de-pixeles');

$mouseEnGrilla.mousedown( function () {
  mousePintor = true;
});
$mouseEnGrilla.mouseup( function () {
  mousePintor = false;
});


//PINTAMOS CON EL MOUSE PRESIONADO POR EL USUARIO
$mouseEnGrilla.mousemove(function () {
  if (mousePintor) {
    $(this).css('background-color', $colorSeleccionadoPaleta.css('background-color'));
  }
});

//GUIA 3

//PASO 1 GUIA 3
var $borroLaGrilla = $('div.grilla-de-pixeles');
var $botonBorrador = $('#borrar');

$botonBorrador.click(function () {
  $borroLaGrilla.each(function () {
    $(this).animate({ 'background-color':'rgb(255,255,255)'}, 2500);
  });
});

//Paso 2 - GUIA 3
$('#batman').click(function () {
  cargarSuperheroe(batman);
});

$('#wonder').click(function () {
  cargarSuperheroe(wonder);
});

$('#flash').click(function () {
  cargarSuperheroe(flash);
});

$('#invisible').click(function () {
  cargarSuperheroe(invisible);
});

//Paso 3 - GUIA 3
var $botonGuardar = $('#guardar');
$botonGuardar.click(function () {
  guardarPixelArt();
});