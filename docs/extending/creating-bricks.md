# Creating a new Brick
First of all, you need to choose a unique `kind`, which is a string. It will identify your brick. Then, you have to create the following files:


## Suggested architecture:
```
your-brick/
├── your-brick.component.html   # Brick Template
├── your-brick.component.scss   # Brick Stylesheet
├── your-brick.component.ts     # Brick Component
├── your-brick.factory.ts       # Brick Factory
└── your-brick.ts               # Brick Interface
```

## Brick Interface
Your brick interface represents the structured data of your brick. Your interface has to extends the `BaseBrick` interface, located in the package `@mathrix/silicate-core`.

Example of `your-brick.ts`:
```typescript
import {BaseBrick} from '@mathrix/silicate-core';

export interface YourBrick extends BaseBrick {
  kind: 'your-kind'; // <-- your choice of kind
  content: string;   // <-- YourBrick has only the field `content`
}
```

Remember that every instance of a brick has a field `uuid` (check `BaseBrick` interface).


## Brick Factory
You have to provide a factory for your brick, which will be used when the brick type is switched. Your factory has to extends `BaseBrickFactory`, located in the package `@mathrix/silicate-core`. Note the the `BaseBrickFactory` take the **brick interface** as type parameter.
Your factory has to be decorated with `@Injectable()` decorated.

Example of `your-brick.factory.ts`:
```typescript
import {Injectable} from '@angular/core';
import {BaseBrickFactory} from '@mathrix/silicate-core';
import {YourBrick} from './your-brick.ts';

@Injectable()
export class YourBrickFactory extends BaseBrickFactory<YourBrick> {
  make(): YourBrick {
    return this.withUuid({ // <-- This will automatically generate a uuid v4
      kind: 'your-kind',
      content: 'Default content'
    });
  }
}
```


## Brick Component
Your brick component has to extends the `BaseBrickComponent`, located in the package `@mathrix/silicate-core`.
An instance of your brick data will be available in the property `data`, which will be two-way-binded.

```typescript
import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {YourBrick} from './your-brick';


@Component({
  selector: 'app-your-brick',
  templateUrl: './your-brick.component.html',
  styleUrls: ['./your-brick.component.scss']
})
export class YourBrickComponent extends BaseBrickComponent<YourBrick> {
  // data: YourBrick; // You have a instance of your-brick interface. Use it to two-way bind it in your view. 
}
```

Check if the component is in edit mode, you have to inject the `SilicateService` in your `YourBrickComponent` constructor, like so:

```typescript
export class YourBrickComponent extends BaseBrickComponent<YourBrick> {
  constructor(private silicate: SilicateService) {}
  
  method() {
    // this.silicate.editable // boolean: true if edit mode is on
  }
}
```


## Brick Template
To build your brick template, there is a very **important component**: the `SilicateEditableComponent` (`<silicate-editable></silicate-editable>`). You can bind a string into it content, which will be editable by the final user.

Example of `your-brick.component.html`:
```html
<p>
  <silicate-editable [(content)]="this.data.content"></silicate-editable>
</p>
```

Note: The Silicate Editable has no style defined, so you are free to style it yourself.
