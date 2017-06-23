 "use strict;"

  function Utils() {};



    Utils.prototype.goPage = goPage;



    function goPage(pageName) {

    
        document.location.href = "#" + pageName;
    }




 // Exports ----------------------------------------------
    module["exports"] = new Utils();