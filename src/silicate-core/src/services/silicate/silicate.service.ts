import {Inject, Injectable, Optional} from '@angular/core';
import {Brick} from '../../interfaces/brick';
import {Filter} from '../../interfaces/filter';
import {Handler} from '../../interfaces/handler';
import {Toolbar} from '../../interfaces/toolbar';
import {Bricks, Filters, Handlers, Serializers, Toolbars} from '../../silicate-core.tokens';
import {Serializer} from '../../interfaces/serializer';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class SilicateService {
  /** If the edition should be permitted */
  editable$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Optional() @Inject(Bricks) public bricksDeclarations: Brick[],
    @Optional() @Inject(Filters) public filters: Filter[],
    @Optional() @Inject(Handlers) public handlers: Handler[],
    @Optional() @Inject(Toolbars) public toolbars: Toolbar[],
    @Optional() @Inject(Serializers) public serializers: Serializer[]
  ) {
    if (this.bricksDeclarations === null) {
      // No brick are provided, throw error
      throw new Error('No bricks were provided! Use The Bricks Injection Token');
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

  /**
   * Get the editable state.
   */
  get editable(): boolean {
    return this.editable$.value;
  }

  /**
   * Set the editable state.
   * @param editable The new editable state.
   */
  set editable(editable: boolean) {
    if (this.editable !== editable) {
      this.editable$.next(editable);
    }
  }

  /**
   * Resolve a brick by its kind.
   * @param kind The brick kind (e.g. 'text')
   */
  resolve(kind: string): Brick {
    const resolved = this.bricksDeclarations.find(b => b.kind === kind);

    if (resolved === undefined) {
      throw new Error(`Brick kind '${kind}' is not declared.`);
    }

    return resolved;
  }
}
