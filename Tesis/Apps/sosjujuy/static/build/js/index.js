$( document ).ready(function() {
    var tok = $('input[name=csrfmiddlewaretoken]').attr("value");
    //console.log(tok);

    $("#beneficiarioForm").submit(function( event ) {
    	var textPais = $("a[class=chosen-single]")[0].text.replace(/\s/g, '');
    	var textProvincia = $("a[class=chosen-single]")[1].text.replace(/\s/g, '');
    	
	  	var paisesList = JSON.parse(localStorage.getItem('paises'));
	  	var provinciaList = JSON.parse(localStorage.getItem('provincias'));
	  	
	  	$("<input />").attr("type", "hidden")
          .attr("name", "pais")
          .attr("value", paisesList[textPais])
          .attr("id", "id_pais")
          .attr("data", textPais)
          .appendTo("#beneficiarioForm");

        $("<input />").attr("type", "hidden")
          .attr("name", "provincia")
          .attr("value", provinciaList[textProvincia])
          .attr("id", "id_provincia")
          .attr("data", textProvincia)
          .appendTo("#beneficiarioForm");
	});	

	$("#DerivacionForm").submit(function( event ) {
    	var textBene = $("a[class=chosen-single]")[0].text.replace(/\s/g, '');
	  	var benefiList = JSON.parse(localStorage.getItem('beneficiario'));	  	
        $("<input />").attr("type", "hidden")
          .attr("name", "beneficiario")
          .attr("value", benefiList[textBene])
          .attr("id", "id_beneficiario")
          .attr("data", textBene)
          .appendTo("#DerivacionForm");
	});	

	$("#notificacionForm").submit(function( event ) {
    	var textPrestador = $("a[class=chosen-single]")[0].text.replace(/\s/g, '');
	  	var prestadorList = JSON.parse(localStorage.getItem('prestador'));	  	
        $("<input />").attr("type", "hidden")
          .attr("name", "prestador")
          .attr("value", prestadorList[textPrestador])
          .attr("id", "id_beneficiario")
          .attr("data", textPrestador)
          .appendTo("#notificacionForm");
	});	

	
	// si existe el formulario hace el pedido ajax
	var formBeneficiarios = document.getElementById('beneficiarioForm');
	if (formBeneficiarios != null){
	    $.ajax({
		    type:"POST", 
		    url:"/search/", 
		    data:{url:"Z562316", "csrfmiddlewaretoken": tok},
		    success:function(datos){ 
		    	loadBeneficiario(datos);
		    },
		});
		$.ajax({
		    type:"POST", 
		    url:"/provincias/", 
		    data:{url:"Z562316", "csrfmiddlewaretoken": tok},
		    success:function(datos){ 
		    	loadProvincia(datos);
		    },
		});
	}
	// si existe el formulario hace el pedido ajax
	var formDerivacion = document.getElementById('DerivacionForm');
	if (formDerivacion != null){
		$.ajax({
		    type:"POST", 
		    url:"/beneficiariosearch/", 
		    data:{url:"Z562316", "csrfmiddlewaretoken": tok},
		    success:function(datos){ 
		    	loadDerivacion(datos);
		    },
		});
	}

	// si existe el formulario hace el pedido ajax
	var notificacionForm = document.getElementById('notificacionForm');
	if (notificacionForm != null){
		$.ajax({
		    type:"POST", 
		    url:"/prestadorsearch/", 
		    data:{url:"Z562316", "csrfmiddlewaretoken": tok},
		    success:function(datos){ 
		    	loadPrestador(datos);
		    },
		});
		$.ajax({
		    type:"POST", 
		    url:"/beneficiariosearch/", 
		    data:{url:"Z562316", "csrfmiddlewaretoken": tok},
		    success:function(datos){ 
		    	loadBeneficiarioNotificacion(datos);
		    },
		});
	}
});

function loadBeneficiario(datos){
	var textSelect = $("#id_pais option:selected").text();
	// en el editar esta el select comun
	if (textSelect != "---------"){
		//
	} else {
		//console.log(textSelect);
		var valSelect = $("#id_pais option:selected").val();
		//console.log(valSelect);
		$("#id_pais").parent().append(
			`<select data-placeholder="Elija un País..." class="chosen-select id_pais" tabindex="2">
            <option value=""></option>`);

		var paises = {};
		for (x in datos) {
    		//console.log(datos[x]["pk"]);

    		paises[datos[x]["fields"]["nombre"]] = datos[x]["pk"];
    		$(".chosen-select").append($("<option />").val(datos[x]["fields"]["nombre"]).text(datos[x]["fields"]["nombre"]));
    	}
    	//console.log(typeof  paises);
	    localStorage.setItem('paises', JSON.stringify(paises));

	    $(".id_pais").chosen({width: "100%"});
	    $("#id_pais").remove(); 	    
	}
};

function loadProvincia(datos){
	var textSelect = $("#id_provincia option:selected").text();
	// en el editar esta el select comun
	if (textSelect == "---------"){
		//
		//console.log(textSelect);
		var valSelect = $("#id_provincia option:selected").val();
		//console.log(valSelect);
		$("#id_provincia").parent().append(
			`<select data-placeholder="Elija una Provincia..." class="chosen-select id_provincia" tabindex="2">
            <option value=""></option>`);

		var provincias = {};
		for (x in datos) {
    		//console.log(datos[x]["pk"]);

    		provincias[datos[x]["fields"]["nombre"]] = datos[x]["pk"];
    		$(".id_provincia").append($("<option />").val(datos[x]["fields"]["nombre"]).text(datos[x]["fields"]["nombre"]));
    	}
    	//console.log(typeof  paises);
	    localStorage.setItem('provincias', JSON.stringify(provincias));

	    $(".id_provincia").chosen({width: "100%"});
	    $("#id_provincia").remove(); 	    
	}
};

function loadDerivacion(datos){
	var textSelect = $("#id_beneficiario option:selected").text();
	// en el editar esta el select comun
	if (textSelect == "---------"){
		//
		//console.log(textSelect);
		var valSelect = $("#id_beneficiario option:selected").val();
		//console.log(valSelect);
		$("#id_beneficiario").parent().append(
			`<select data-placeholder="Elija un Beneficiario..." class="chosen-select id_beneficiario" tabindex="2">
            <option value=""></option>`);

		var beneficiario = {};
		for (x in datos) {
    		//console.log(datos[x]["pk"]);

    		beneficiario[datos[x]["fields"]["nombre"]] = datos[x]["pk"];
    		$(".id_beneficiario").append($("<option />").val(datos[x]["fields"]["nombre"]).text(datos[x]["fields"]["nombre"]));
    	}
    	//console.log(typeof  paises);
	    localStorage.setItem('beneficiario', JSON.stringify(beneficiario));

	    $(".id_beneficiario").chosen({width: "100%"});
	    $("#id_beneficiario").remove(); 	    
	}
};

function loadPrestador(datos){
	var textSelect = $("#id_prestador option:selected").text();
	// en el editar esta el select comun
	if (textSelect == "---------"){
		//
		//console.log(textSelect);
		var valSelect = $("#id_prestador option:selected").val();
		//console.log(valSelect);
		$("#id_prestador").parent().append(
			`<select data-placeholder="Elija un Prestador..." class="chosen-select id_prestador" tabindex="2">
            <option value=""></option>`);

		var prestador = {};
		for (x in datos) {
    		//console.log(datos[x]["pk"]);

    		prestador[datos[x]["fields"]["nombre"]] = datos[x]["pk"];
    		$(".id_prestador").append($("<option />").val(datos[x]["fields"]["nombre"]).text(datos[x]["fields"]["nombre"]));
    	}
    	//console.log(typeof  paises);
	    localStorage.setItem('prestador', JSON.stringify(prestador));

	    $(".id_prestador").chosen({width: "100%"});
	    $("#id_prestador").remove(); 	    
	}
};


function loadBeneficiarioNotificacion(datos){
	var textSelect = $("#id_beneficiario option:selected").text();
	// en el editar esta el select comun
	if (textSelect == "---------"){
		//
		//console.log(textSelect);
		var valSelect = $("#id_beneficiario option:selected").val();
		//console.log(valSelect);
		$("#id_beneficiario").parent().append(
			`<select data-placeholder="Elija un Beneficiario..." class="chosen-select id_beneficiario" tabindex="2">
            <option value=""></option>`);

		var beneficiario = {};
		for (x in datos) {
    		//console.log(datos[x]["pk"]);

    		beneficiario[datos[x]["fields"]["nombre"]] = datos[x]["pk"];
    		$(".id_beneficiario").append($("<option />").val(datos[x]["fields"]["nombre"]).text(datos[x]["fields"]["nombre"]));
    	}

	    localStorage.setItem('beneficiario2', JSON.stringify(beneficiario));

	    $(".id_beneficiario").chosen({width: "100%"});
	    $("#id_beneficiario").remove(); 	    
	}
};
