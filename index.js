function createShell () {
  const interface = prompt('How many pages do you wish to create?: ');
  
  if (isNaN(interface) === true) {
    alert("Not a number.");
          
    createShell();
  }
  
  else {
    function makeid (length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
     
    for (i = 0; i < interface.length; i++) {     
      const add_new_page = document.querySelector('[title="Add new page"]');
      add_new_page.click();
      
      const src_iframe = document.querySelector('[title="Optimizely Internal Frame"]');
      const src_iframe_new_page = document.getElementById("create-page-dialog__title");
      
      src_iframe_new_page.value = makeId(5);
      document.getElementByClassName("wds-button wds-is-text create-page-dialog__button").click();
    }
  }
}

createShell();
