/**
 * þþext.CategoriesCloud
 *
 * @author Hagai Asaban
 * @license MIT
 */

( function ( mw, $ ) {

	function loadCategoriesCloud() {
		
		var list = [['foo', 12], ['bar', 6]];
		
		WordCloud(document.getElementById('categoriesCloudCanvas'), { 
			list: list,
			gridSize: 18,
			weightFactor: 3,
			color: '#001000',
			hover: window.drawBox,
			click: function(item) {
				alert(item[0] + ': ' + item[1]);
			}			
		} );
	};

	$( function () {
        loadCategoriesCloud();
    });
	
}( mediaWiki, jQuery ) );