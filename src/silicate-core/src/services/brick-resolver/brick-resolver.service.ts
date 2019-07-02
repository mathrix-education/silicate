import {Injectable} from '@angular/core';
import {BrickDeclaration} from '../../interfaces/brick-declaration';
import {SilicateService} from '../silicate/silicate.service';


@Injectable()
export class BrickResolverService {
  constructor(private silicate: SilicateService) {
  }


  resolve(kind: string): BrickDeclaration {
    return this.silicate.bricksDeclarations.find(b => b.kind === kind);
  }
}
