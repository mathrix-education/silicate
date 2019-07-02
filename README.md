# @mathrix/silicate

<p align="center">
  <img src="src/silicate-demo/assets/img/mstile-144x144.png"/>
</p>

Silicate is a data-driven WYSIWYG editor, proudly maintained by Mathieu Bour <mathieu@mathrix.fr>.

Read the [whole documentation](docs/index.md).


## Concepts
### WYSIWYG
To enable the in-vivo edition, Silicate highly relies on the `contenteditable` HTML attribute. Thus, the editor reads and write to the innerHTML of the elements. This feature is mainly achieved with the [@ng-stack/contenteditable](https://www.npmjs.com/package/@ng-stack/contenteditable) package.


### Bricks
Silicate is based on the idea of "bricks". A brick is a piece of data, which may have different form, based on its "kind".

Example of "TextBrick" :
```json
{
  "kind": "text",
  "content": "I'm a TextBrick"
}
```

Each brick is linked with a component which is its rendered and its editor. For instance, the TextBrick is rendered and edited through the TextBrickComponent.


## Packages
This project is split into several sub-projects, each living in its own directory.

- [@mathrix/silicate-core](src/silicate-core): The Silicate Core library, which is required to run Silicate. **It does not provide any brick**.
- [@mathrix/silicate-essentials](src/silicate-essentials): The essential libraries. Provides Text, Image, Title (h1) and List (ul) bricks.
- [@mathrix/silicate-videos](src/silicate-videos): Various video players. Currently supports YouTube and Vimeo.
- [@mathrix/silicate-latex](src/silicate-latex): Provides LaTeX features: the Equation brick and the inline LaTeX equations.
