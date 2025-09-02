const form = document.getElementById('formRegistro');
const btnLimpiar = document.getElementById('btnLimpiar');
const resultado = document.querySelector('.resultado');
const errorMsg = document.querySelector('.error');

let registros = [];

// Capitalizar nombre
function capitalizarNombre(nombre) {
    return nombre
        .trim()
        .split(" ")
        .filter(p => p !== "")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join(" ");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    resultado.textContent = '';

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value, 10);
    const curso = document.getElementById('curso').value;
    const jornada = document.querySelector('input[name="jornada"]:checked');
    const aceptaReglamento = document.getElementById('aceptaReglamento').checked;

    // Validaciones
    if (nombre.trim().length < 2) {
        errorMsg.textContent = 'El nombre debe tener al menos 2 caracteres.';
        return;
    }
    if (isNaN(edad) || edad < 14 || edad > 100) {
        errorMsg.textContent = 'La edad debe estar entre 14 y 100 años.';
        return;
    }
    if (!curso) {
        errorMsg.textContent = 'Debe seleccionar un curso.';
        return;
    }
    if (!jornada) {
        errorMsg.textContent = 'Debe seleccionar una jornada.';
        return;
    }
    if (!aceptaReglamento) {
        errorMsg.textContent = 'Debe aceptar el reglamento para continuar.';
        return;
    }

    const nombreNormalizado = capitalizarNombre(nombre);

    // Guardar registro
    const registro = {
        nombre: nombreNormalizado,
        edad,
        curso,
        jornada: jornada.value
    };
    registros.push(registro);

    // Contar estudiantes por jornada
    let mañanaCount = 0;
    let tardeCount = 0;
    for (const r of registros) {
        if (r.jornada === 'Mañana') mañanaCount++;
        else if (r.jornada === 'Tarde') tardeCount++;
    }

    resultado.textContent = `Registro exitoso: ${nombreNormalizado}, ${edad} años, ${curso}, jornada ${jornada.value}.
    Registrados: ${mañanaCount} en Mañana, ${tardeCount} en Tarde.`;

    form.reset();
});

// Botón limpiar
btnLimpiar.addEventListener('click', () => {
    form.reset();
    registros = [];
    resultado.textContent = '';
    errorMsg.textContent = '';
});
