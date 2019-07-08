import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseBrickComponent, SilicateService } from '@mathrix/silicate-core';
import { EquationBrick } from './equation-brick';
export declare class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements OnInit {
    private dialog;
    private silicate;
    constructor(dialog: MatDialog, silicate: SilicateService);
    ngOnInit(): void;
    openEquationDialog(): void;
}
