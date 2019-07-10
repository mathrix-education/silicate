import {Inject, Injectable, Optional} from '@angular/core';
import {BrickDeclaration} from '../../interfaces/brick-declaration';
import {Filter} from '../../interfaces/filter';
import {Handler} from '../../interfaces/handler';
import {Toolbar} from '../../interfaces/toolbar';
import {BrickDeclarations, Filters, Handlers, Serializers, Toolbars} from '../../silicate-core.tokens';
import {Serializer} from '../../interfaces/serializer';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class SilicateService {
  /** If the edition should be permitted */
  editable$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Optional() @Inject(BrickDeclarations) public bricksDeclarations: BrickDeclaration[],
    @Optional() @Inject(Filters) public filters: Filter[],
    @Optional() @Inject(Handlers) public handlers: Handler[],
    @Optional() @Inject(Toolbars) public toolbars: Toolbar[],
    @Optional() @Inject(Serializers) public serializers: Serializer[]
  ) {
    if (this.bricksDeclarations === null) {
      // No brick are provided, throw error
      throw new Error('No bricks were provided! Use The BrickDeclarations Injection Token');
    }

    if (this.filters === null) {
      this.filters = [];
    }

    if (this.handlers === null) {
      this.handlers = [];
    }

    if (this.toolbars === null) {
      this.toolbars = [];
    }

    if (this.serializers === null) {
      this.serializers = [];
    }
  }

  get editable() {
    return this.editable$.value;
  }

  set editable(editable: boolean) {
    if (this.editable !== editable) {
      this.editable$.next(editable);
    }
  }
}
