<?php
/**
 * Hooks for CategoriesCloud extension
 *
 * @file
 * @ingroup Extensions
 */

class CategoriesCloudHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {

        global  $wgIsCloudDisplay,
                $wgCategoriesMaxAmount,
                $wgCategoryLinkedMinSize,
                $wgCategoryCloudContainer;

		$out->addJsConfigVars( array(
			'wgIsCloudDisplay' => $wgIsCloudDisplay,
            'wgCategoriesMaxAmount' => $wgCategoriesMaxAmount,
            'wgCategoryLinkedMinSize' => $wgCategoryLinkedMinSize,
            'wgCategoryCloudContainer' => $wgCategoryCloudContainer
		) );
	
		$out->addModules( array('ext.CategoriesCloud') );
		
		return true;
	}
}
