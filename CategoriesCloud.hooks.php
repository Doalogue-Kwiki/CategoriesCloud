<?php
/**
 * Hooks for CategoriesCloud extension
 *
 * @file
 * @ingroup Extensions
 */

class CategoriesCloudHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {
        $out->addModules( array( "ext.CategoriesCloud" ) );       
		return true;
	}
}
