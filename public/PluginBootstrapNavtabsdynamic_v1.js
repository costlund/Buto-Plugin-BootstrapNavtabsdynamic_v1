/**
 * Class to handle dynamic Bootstrap nav tabs.
 * @returns {PluginBootstrapNavtabsdynamic_v1}
 */
function PluginBootstrapNavtabsdynamic_v1(){
  /**
   * Create tab.
   * @param {type} id
   * @param {type} name
   * @param {type} url
   * @returns {undefined}
   */
  this.newTab = function(id, name, url){
    /*
     * Set name if empty.
     */
    if(name.length == 0){
      var name = prompt("Please enter a name!", "");      
    }
    if(name.length == 0){
      return;
    }
    /**
     * 
     */
    var uid = new Date().getTime();
    var myTabs = document.getElementById(id);
    var myContainer = document.getElementById(id+'_container');
    var li = document.createElement('li');
    li.setAttribute('id', uid+'_tab');
    li.setAttribute('role', 'presentation');
    li.setAttribute('class', '');
    var a = document.createElement(('a'));
    a.setAttribute('href', '#'+name);
    var p1 = document.createElement('span');
    p1.innerHTML = name;
    a.appendChild(p1);
    a.onclick = function(e){
      e.preventDefault();
      $(this).tab('show');
      /**
       * Hide all containers.
       */
      $("#"+id+"_container").children().hide(); 
      /**
       * Show one container.
       */
      $("#"+this.parentNode.id.replace('_tab', '_container')).show(); 
      /**
       * Add callback?
       */
    }
    li.appendChild(a);
    myTabs.appendChild(li);
    /**
     * Create container.
     */
    var container = document.createElement('div');
    container.setAttribute('id', uid+'_container')
    container.innerHTML = uid;
    /**
     * Add container.
     */
    myContainer.appendChild(container);
    /**
     * Load content with ajax.
     */
    //PluginWfAjax.load(uid+'_container', '/'+app.class+'/query_form');
    PluginWfAjax.load(uid+'_container', url);
    /**
     * Show tab.
     */
    $(a).tab('show');
    /**
     * Click on tab.
     */
    a.click();
  }
  /**
   * Close tab.
   * @param {type} id
   * @returns {undefined}
   */
  this.closeActiveTab = function(id){
    var li = $('#'+id+' .active')[0];
    if(li){
      var container = document.getElementById(li.id.replace('_tab', '_container'));
      li.parentNode.removeChild(li);
      container.parentNode.removeChild(container);
      /**
       * Set first tab active.
       */
      var a = $('#'+id+' a')[0];
      if(a){
        a.click();
      }
    }
  }
}
var PluginBootstrapNavtabsdynamic_v1 = new PluginBootstrapNavtabsdynamic_v1();
