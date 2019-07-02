import {Inject, Injectable} from '@angular/core';
import {BrickDeclaration} from '../../interfaces/brick-declaration';
import {BrickDeclarations} from '../../silicate-core.tokens';


@Injectable()
export class BrickResolverService {
  constructor(@Inject(BrickDeclarations) private bricks: BrickDeclaration[]) {
  }


  resolve(kind: string): BrickDeclaration {
    return this.bricks.find(b => b.kind === kind);
  }
}
