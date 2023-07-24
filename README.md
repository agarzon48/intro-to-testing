# intro-to-testing

Este repo se ha generado para proporcionar buenas prácticas y ejemplos de cómo hacer tests unitarios. También toca los tests de integración, sin que sean su objetivo principal, y tests en el DOM.

He explicado los conceptos tratados en este repo en diferentes artículos de mi blog:

1. [¿Qué es el testing?](https://www.adriangarzon.es/dia-1-que-es-el-testing)
1. [Unit testing](https://www.adriangarzon.es/dia-2-unit-testing-tests-unitarios)
1. [Testing intermedio](https://www.adriangarzon.es/dia-3-testing-nivel-intermedio)
1. [Testing en el DOM](https://www.adriangarzon.es/dia-4-testing-dom-como-testear-aplicaciones-en-front)

## Run the project

1. Instalar dependencias

```bash
npm install
```

2. Si quieres lanzar tests en el entorno de node (porque no necesitas el DOM):

```bash
npm test
```

3. Si quieres lanzar tests en el entorno happy-dom (porque necesitas el DOM):

```bash
npm run test-dom
```
