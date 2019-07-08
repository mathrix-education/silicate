import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {EquationBrick} from './equation-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class EquationBrickFactory extends BaseBrickFactory<EquationBrick> {
  make(): EquationBrick {
    return this.withUuid({
      kind: 'equation',
      equation: 'f(x) = x^2',
      description: 'Fonction carrée'
    });
  }
}
