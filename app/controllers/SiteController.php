<?php

class SiteController extends BaseController {

	protected $layout = 'layouts.default';

	public function index()
	{
		Blade::setEscapedContentTags('[[', ']]');
    	Blade::setContentTags('[[[', ']]]');
		
		$this->layout->content = View::make('site.index');
	}

}
