# Wakanda Plugins Essential

> A walkthrough on elements composing a wakanda plugin and how it should be written.....

* Package.json : this file is one of the mandatory pieces of a Wakanda Studio plugin, it should be at the root of the plugin structur. It describes the extension and declares the related commands.


Key | Mandatory | Type | Details
---- |:--------:| ---- | -------
`name` | Yes | `string` | The name of the plugin.
`main` | Yes | `string` | Entry point to the plugin, if not found wakanda will look for an index.js or main.js.
`description` | Yes | `string` | Description of what your plugin does.
`version` | Yes | `string` | The plugin version .
`author` |No | `string`| The author of plugin.
`license` |No | `string` | Check [npm's documentation](https://docs.npmjs.com/files/package.json#license) for details.
`location` |No | `string` |Where the plugin will be available.
`icon` |No | `string` | Path of the picture file used as icon.
`label` |No | `string` | Title to be displayed.
`hint` |No | `string` | 	Additional information to display when the cursor moves over the button.
`keywords` |No | `array` | Array of **keywords**  to find the plugin easily.
`compatibleVersions` |Yes | `object` |Wakanda studio compatible version with the plugin.
`triggers` |No | `array of object` | ........ .
`menu-bar` |No | `array of object` | ..... .
`toolbar-menu` |No | `array of object` | ..... .
`context-menu` |No | `array of object` | ..... .
`keybinding` |No | `array of object` | ..... .
`dependencies` |No | `object` | Dependencies your extensions needs. Check [npm's `dependencies`](https://docs.npmjs.com/files/package.json#dependencies) for details.
`devDependencies` |No | `object` | The same as [npm's `devDependencies`](https://docs.npmjs.com/files/package.json#devdependencies).
`wakandaConsumedServices` | | `object` |........ .
