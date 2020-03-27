import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild
} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../../dialogs/equation-dialog/equation-dialog.component';
import {EquationBrick} from './equation-brick';
import * as katex from 'katex';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'silicate-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss']
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements AfterViewInit {
  @ViewChild('equation') equationElementRef: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private silicate: SilicateService
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
    if (!this.equationElementRef) {
      // Abort render if the equationElementRef is not initialized.
      return;
    }

    this.renderer2.setProperty(
      this.equationElementRef.nativeElement,
      'innerHTML',
      katex.renderToString(this.data.equation, {displayMode: true})
    );
    this.cd.detectChanges();
  }

  @HostListener('click')
  openEquationDialog() {
    if (!this.silicate.editable) {
      return;
    }

    this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: {
          equation: this.data.equation,
          description: this.data.description,
          enableDescription: true
        }
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data?.equation !== '') {
          this.data.equation = data.equation;
          this.data.description = data.description;
          this.render();
          this.ngDoCheck();
        }
      });
  }

  /**
   * Focus brick implementation. In this context, we don't do anything.
   */
  focus(): void {
    return;
  }
}
