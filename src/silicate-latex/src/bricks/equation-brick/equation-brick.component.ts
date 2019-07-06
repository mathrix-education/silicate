import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../../dialogs/equation-dialog/equation-dialog.component';
import {EquationBrick} from './equation-brick';


@Component({
  selector: 'silicate-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss']
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements OnInit {
  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
    private dialog: MatDialog,
    private silicate: SilicateService
  ) {
    super();
  }

  ngOnInit() {
    this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', this.data.content);
  }

  @HostListener('click')
  openEquationDialog() {
    if (!this.silicate.editable) {
      return;
    }

    let equationSource;
    const equationSourceElement = this.elementRef.nativeElement.querySelector('annotation');

    if (equationSourceElement === null) {
      equationSource = 'f(x)=x^2'; // Default equation
    } else {
      equationSource = equationSourceElement.textContent;
    }

    this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: {
          elementRef: this.elementRef,
          property: 'innerHTML',
          equation: equationSource,
          displayMode: true
        }
      })
      .afterClosed()
      .pipe(first())
      .subscribe(() => {
        this.data.content = this.elementRef.nativeElement.innerHTML;
      });
  }
}
