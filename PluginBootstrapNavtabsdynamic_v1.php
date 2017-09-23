<?php

class PluginBootstrapNavtabsdynamic_v1{
  /**
   <p>Widget to include javascript.</p>
   <p>Include js and widget then use with javascript.</p>
  #code-javascript#
  PluginBootstrapNavtabsdynamic_v1.newTab('myTabs', 'New tab', '/doc/a_page');
  PluginBootstrapNavtabsdynamic_v1.closeActiveTab('myTabs');
  #code#
   * 
   * 
   */
  public static function widget_include($data){
    /**
     * This is in use in js.
     */
    wfPlugin::includeonce('wf/ajax');
    /**
     * 
     */
    $element = array();
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/bootstrap/navtabsdynamic_v1/PluginBootstrapNavtabsdynamic_v1.js', 'type' => 'text/javascript'));
    wfDocument::renderElement($element);
  }
  /**
   * Widget to render nav-tabs with an container.
   */
  public function widget_navtabs($data){
    wfPlugin::includeonce('wf/array');
    $data = new PluginWfArray($data);
    $element = array();
    $element[] = wfDocument::createHtmlElement('ul', null, array('class' => 'nav nav-tabs', 'id' => $data->get('data/id'), 'role' => 'tablist'));
    $element[] = wfDocument::createHtmlElement('div', null, array('id' => $data->get('data/id').'_container'));
    wfDocument::renderElement($element);
  }
}