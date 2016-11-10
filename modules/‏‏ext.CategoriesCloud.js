/**
 * þþext.CategoriesCloud
 *
 * @author Hagai Asaban
 * @license MIT
 */

( function ( mw, $ ) {

	function createCategoriesSizeList(allcategories) {
		var categoriesSizeList = [];
		
		allcategories.map( function (item) {  
			categoriesSizeList.push( [
				item,
				item.size
			] );
		});
				
		var list = [['foo', 12], ['bar', 6]];
						
		loadCategoriesCloud(list);
	}

	function loadApiCategoriesPageUsage() {
		///w/api.php?action=query&format=json&list=allcategories&utf8=1&aclimit=500&acprop=size
		api.get({
            formatversion: 2,
            action: 'query',
            aclimit: 500,
            list: 'allcategories',
            utf8: true,
            acprop: 'size'
        }).done(function (res) {
			console.log(res);
            createCategoriesSizeList(res.query.allcategories);            
        }).fail(function (code, result) {
            if (code === "http") {
                mw.log("HTTP error: " + result.textStatus); // result.xhr contains the jqXHR object
            } else if (code === "ok-but-empty") {
                mw.log("Got an empty response from the server");
            } else {
                mw.log("API error: " + code);
            }
        });
	};

	function loadCategoriesCloud(categoriesSizeList) {
		
		WordCloud(document.getElementById('categoriesCloudCanvas'), { 
			list: categoriesSizeList,
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
        loadApiCategoriesPageUsage();
    });
	
}( mediaWiki, jQuery ) );