
// Por defecto asumo que es de Geringoso a Español
var modo="ge";

// Funcion que cambia los colores de los botones 
//   Geringoso : Activos
//   Español   : Inactivo
//  Cambia la variable MODO para que sea de Geringoso->Español
function ger2esp() {
	document.getElementById("bot1g").className = "botonActivo";
	document.getElementById("bot1e").className = "botonInactivo";
	document.getElementById("bot2g").className = "botonInactivo";
	document.getElementById("bot2e").className = "botonActivo";
	modo = "ge";
}

// Funcion que cambia los colores de los botones 
//   Geringoso : Inactivos
//   Español   : Activo
//  Cambia la variable MODO para que sea de Español->Geringoso
function esp2ger() {
	document.getElementById("bot1g").className = "botonInactivo";
	document.getElementById("bot1e").className = "botonActivo";
	document.getElementById("bot2g").className = "botonActivo";
	document.getElementById("bot2e").className = "botonInactivo";
	modo = "eg";
}

function convertir() {
	// Recupero lo que esta dentro de TEXTO1 
	txt1 = document.getElementById("texto1").value;

	// Si la variable MODO esta en Español->Geringoso
	if ( modo == "eg" ) {
		// Meto en txt1 lo que contiene TEXTO1 pero reeemplazo todas las "a" por "apa"
		//   Luego las e por epe, i por ipi, o por opo, u por upu
		txt1 = txt1.replace(/a/g, "apa");
		txt1 = txt1.replace(/e/g, "epe");
		txt1 = txt1.replace(/i/g, "ipi");
		txt1 = txt1.replace(/o/g, "opo");
		txt1 = txt1.replace(/u/g, "upu");

		// Lo mismo poero con las mayusculas
		txt1 = txt1.replace(/A/g, "APA");
		txt1 = txt1.replace(/E/g, "EPE");
		txt1 = txt1.replace(/I/g, "IPI");
		txt1 = txt1.replace(/O/g, "OPO");
		txt1 = txt1.replace(/U/g, "UPU");
	} else {
		// Meto en txt1 lo que contiene TEXTO1 pero reeemplazo todas las "apa" por "a"
		//   Luego las epe por e, ipi por i, opo por o, upu por u
		txt1 = txt1.replace(/apa/g, "a");
		txt1 = txt1.replace(/epe/g, "e");
		txt1 = txt1.replace(/ipi/g, "i");
		txt1 = txt1.replace(/opo/g, "o");
		txt1 = txt1.replace(/upu/g, "u");

		// Lo mismo poero con las mayusculas
		txt1 = txt1.replace(/APA/g, "A");
		txt1 = txt1.replace(/EPE/g, "E");
		txt1 = txt1.replace(/IPI/g, "I");
		txt1 = txt1.replace(/OPO/g, "O");
		txt1 = txt1.replace(/UPU/g, "U");
	}

	// Meto dentro del textarea TEXT2 (el que esta protegido) la cadena resultante
	document.getElementById("texto2").value = txt1;
}
