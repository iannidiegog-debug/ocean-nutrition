# Ocean Nutricion

MVP web para Ocean Centro de Salud. Permite recorrer la experiencia del paciente y el panel de nutricionista antes de conectar nube y usuarios reales.

## Incluye

- Vista de paciente con inicio, plan, registros, mediciones, contacto, turnos y material educativo reservado.
- Vista de nutricionista con pacientes, ficha, nuevos pacientes, mediciones profesionales, ajustes del plan y contacto.
- Pantalla inicial de acceso demostrativo con perfiles separados para paciente y nutricionista.
- Plan de alimentacion editable por paciente, con comidas por horario, alimentos recomendados, suplementos y medicacion.
- Metodo del plato solo aplicado donde corresponde: almuerzo y cena.
- Guardado local en el navegador para registros, mediciones, mensajes, notas, pacientes y planes.
- Diseno responsive para celular, tablet y computadora.

## Abrir localmente

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Despues abrir:

```text
http://127.0.0.1:4173/index.html
```

## Alcance del MVP

Los datos se guardan en el navegador de cada dispositivo. La siguiente etapa requiere login, base de datos, almacenamiento en la nube e historial clinico seguro para sincronizar nutricionista y pacientes reales.
