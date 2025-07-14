
# 🧩 Minecraft Core Loaders

Instaladores de loaders para Minecraft (`Forge`, `Fabric`, `Legacy Fabric`, `Quilt`) diseñados para integrarse fácilmente en tu launcher personalizado o scripts de automatización.

**Compatibles con:**
- Minecraft `release`, `snapshot`, y versiones legacy
- Entornos Node.js modernos
- Launchers hechos con Electron, CLI, etc.

---

## 📦 Instalación

```bash
npm install minecraft-core-master-loaders
````

> Asegúrate de tener Node.js 16 o superior.

---

## 🚀 Uso Básico

Primero importa el módulo principal:

```js
const MinecraftLoaders = require('minecraft-core-master-loaders');
```

### 🔧 Instalar Forge

```js
MinecraftLoaders.forge({
  root: './.minecraft',
  version: '1.16.5-36.2.20',
}).on('data', (msg) => {
  console.log(`[Forge] Progreso: ${msg.progress}/${msg.total}`);
}).on('done', () => {
  console.log('[Forge] Instalación completada');
}).on('error', console.error);
```

### 🧵 Instalar Fabric

```js
MinecraftLoaders.fabric({
  root: './.minecraft',
  version: '1.20.1',
}).on('data', (msg) => {
  console.log(`[Fabric] Descargando: ${msg.progress}/${msg.total}`);
}).on('done', () => {
  console.log('[Fabric] Instalado correctamente');
});
```

### 🧶 Instalar Legacy Fabric

```js
MinecraftLoaders.legacyfabric({
  root: './.minecraft',
  version: '1.8.9', // Verifica versiones en: https://meta.legacyfabric.net/v2/versions/installer
}).on('data', (msg) => {
  console.log(`[LegacyFabric] Progreso: ${msg.progress}/${msg.total}`);
});
```

### 🧵 Instalar Quilt

```js
MinecraftLoaders.quilt({
  root: './.minecraft',
  version: '1.20',
}).on('data', (msg) => {
  console.log(`[Quilt] Descargando: ${msg.progress}/${msg.total}`);
});
```

---

## 📚 Obtener versiones disponibles

Podés obtener la lista de versiones disponibles de cada loader usando:

```js
MinecraftLoaders.getVersions({ type: 'forge' })
  .on('data', (versions) => {
    console.log('Versiones Forge:', versions);
  });
```

Tipos válidos:

* `"forge"`
* `"fabric"`
* `"legacyfabric"`
* `"quilt"`

---

## 📁 Estructura del Proyecto

```
components/
├── index.js               # Punto de entrada unificado
└── loaders/
    ├── forge/forge.js
    ├── fabric/fabric.js
    ├── legacyfabric/legacyfabric.js
    └── quilt/quilt.js
```

---

## ⚙️ Requisitos

* Node.js 16+
* Permisos de escritura en la carpeta `.minecraft`
* Conexión a internet para descargar los instaladores

---

## 🛠️ Hecho con ❤️ por [NovaStep Studios](https://github.com/novastepstudios)

Este proyecto es parte de [`minecraft-core-master`](https://github.com/novastepstudios/minecraft-core-master), el núcleo técnico para launchers avanzados.

¡Contribuciones, issues y mejoras son bienvenidas!