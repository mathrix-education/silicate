import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {EquationBrick} from './equation-brick';
import {renderToString} from 'katex';


@Component({
  selector: 'silicate-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss'],
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements AfterViewInit {
  /** The viewchild equation element ref. */
  @ViewChild('equation') equationElementRef: ElementRef<HTMLDivElement>;
  /** If the brick render has succeded. */
  renderSucceed = true;

  constructor(
    private renderer2: Renderer2,
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  /**
   * Using Renderer2, render the LaTeX equation in display mode.
   */
  render(): void {
    try {
      this.renderer2.setProperty(
        this.equationElementRef.nativeElement,
        'innerHTML',
        renderToString(this.data.equation, {displayMode: true, output: 'html'})
      );
    } catch (e) {
      this.renderSucceed = false;
      throw new Error(`Incorrect latex with uuid ${this.data.uuid}`);
    }
    this.cd.detectChanges();
  }
}
