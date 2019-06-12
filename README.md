# @mathrix/silicate
Silicate is a data-driven WYSIWYG editor, proudly maintained by Mathieu Bour <mathieu@mathrix.fr>.


## Usage
To use the editor, you must use the SilicateWrapperComponent from the `@mathrix/silicate-core` library. To do so, import in your Angular module :
```typescript
import {SilicateCoreModule} from '@mathrix/silicate-core';
...
@NgModule({
  // ...
  imports: [
    // ... your module imports
    SilicateCoreModule
  ]
  // ...
})
export class YourModule {}
```

Then, in your component which hold the data:
```typescript
import {BaseBrick, SilicateCoreModule} from '@mathrix/silicate-core'; 

export class YourComponent {
  data: BaseBrick[]; // This is the data of the editor, which is two-ways bind.
  bricks = [...SilicateCoreModule.bricks()]; // You need to provide the list of bricks the editor should support
}
```

You can the use in your component HTML view:
```angular2html
<mtx-silicate-wrapper
  [bricks]="bricks"
  [(data)]="data">
</mtx-silicate-wrapper>
```


## Concept
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


### WYSIWYG
To enable the in-vivo edition, Silicate highly relies on the `contenteditable` HTML attribute. Thus, the editor reads and write to the innerHTML of the elements. This feature is mainly achieved with the [@ng-stack/contenteditable](https://www.npmjs.com/package/@ng-stack/contenteditable) package.


## Packages
This project is split into several sub-projects, each living in its own directory.

| Package name | Description | Provided bricks |
|--------------|-------------|-----------------|
| @mathrix/silicate-core | The main library of Silicate | Text, Image, List |
| @mathrix/silicate-latex | Enable LaTeX features | Equation |
| @mathrix/silicate-videos | YouTube and Vimeo players | Video |


## Extending Silicate
Silicate was created with the aim of being extended. You can consult the sources of `@mathrix/silicate-latex` or `@mathrix/silicate-videos` to find out how to create new bricks!
