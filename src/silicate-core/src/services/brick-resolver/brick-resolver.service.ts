import {Injectable} from '@angular/core';
import {BrickDeclaration} from '../../interfaces/brick-declaration';
import {SilicateService} from '../silicate/silicate.service';


@Injectable()
export class BrickResolverService {
  constructor(private silicate: SilicateService) {
  }


  resolve(kind: string): BrickDeclaration {
    const resolved = this.silicate.bricksDeclarations.find(b => b.kind === kind);

    if (resolved === undefined) {
      throw new Error(`Brick kind '${kind}' is not declared.`);
    }

    return resolved;
  }
}
