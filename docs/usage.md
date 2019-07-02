# Usage
To use the editor, you must use the SilicateWrapperComponent from the `@mathrix/silicate-core` library. To do so, import in your Angular module :
```typescript
import {NgModule} from '@angular/core'; 
import {SilicateCoreModule} from '@mathrix/silicate-core';
// ...

@NgModule({
  // ...
  imports: [
    // ... your module imports
    SilicateCoreModule
    // Silicate extension modules
    // SilicateEssentials
    // SilicateVideos
    // etc.
  ]
  // ...
})
export class YourModule {}
```

Then, in your component which hold the data:
```typescript
import {Component} from '@angular/core'; 
import {Wall} from '@mathrix/silicate-core'; 

@Component({
  template: 'your.component.html',
  selector: 'your-selector'
})
export class YourComponent {
  data: Wall; // This is the data of the editor, which is two-ways bind.
  editable: boolean; // If the editor is in edit mode
}
```

You can the use in your component HTML view:
Example of `your.component.html`:
```html
<silicate-wrapper [(data)]="data" [editable]="editable"></silicate-wrapper>
```
