/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule } from '@angular/material';
import { Serializers, SilicateCoreModule } from '@mathrix/silicate-core';
import { KatexModule } from 'ng-katex';
import { EquationBrickComponent } from './bricks/equation-brick/equation-brick.component';
import { EquationDialogComponent } from './dialogs/equation-dialog/equation-dialog.component';
import { EquationBrickProvider } from './providers/bricks.providers';
import { KatexFilterProvider } from './providers/filters.providers';
import { ClickEquationHandlerProvider, KeydownEquationHandlerProvider } from './providers/handlers.providers';
import { KatexSerializer } from './serializers/katex-serializer';
var SilicateLatexModule = /** @class */ (function () {
    function SilicateLatexModule() {
    }
    /**
     * @return {?}
     */
    SilicateLatexModule.providers = /**
     * @return {?}
     */
    function () {
        return [
            // Bricks
            EquationBrickProvider,
            // Filters
            KatexFilterProvider,
            // Handlers
            KeydownEquationHandlerProvider,
            ClickEquationHandlerProvider,
            // Serializers
            { provide: Serializers, multi: true, useClass: KatexSerializer }
        ];
    };
    SilicateLatexModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        EquationBrickComponent,
                        EquationDialogComponent
                    ],
                    entryComponents: [
                        EquationBrickComponent,
                        EquationDialogComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        FlexModule,
                        MatInputModule,
                        MatIconModule,
                        MatButtonModule,
                        MatDialogModule,
                        KatexModule,
                        SilicateCoreModule,
                        MatGridListModule,
                        MatExpansionModule
                    ]
                },] }
    ];
    return SilicateLatexModule;
}());
export { SilicateLatexModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lsaWNhdGUtbGF0ZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhyaXgvc2lsaWNhdGUtbGF0ZXgvIiwic291cmNlcyI6WyJzaWxpY2F0ZS1sYXRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsY0FBYyxFQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLDRCQUE0QixFQUFFLDhCQUE4QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRy9EO0lBQUE7SUFxQ0EsQ0FBQzs7OztJQWJRLDZCQUFTOzs7SUFBaEI7UUFDRSxPQUFPO1lBQ0wsU0FBUztZQUNULHFCQUFxQjtZQUNyQixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCw4QkFBOEI7WUFDOUIsNEJBQTRCO1lBQzVCLGNBQWM7WUFDZCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOztnQkFwQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7d0JBQ3RCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ25CO2lCQUNGOztJQWVELDBCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FkWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGUsIFByb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmxleE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7U2VyaWFsaXplcnMsIFNpbGljYXRlQ29yZU1vZHVsZX0gZnJvbSAnQG1hdGhyaXgvc2lsaWNhdGUtY29yZSc7XG5pbXBvcnQge0thdGV4TW9kdWxlfSBmcm9tICduZy1rYXRleCc7XG5pbXBvcnQge0VxdWF0aW9uQnJpY2tDb21wb25lbnR9IGZyb20gJy4vYnJpY2tzL2VxdWF0aW9uLWJyaWNrL2VxdWF0aW9uLWJyaWNrLmNvbXBvbmVudCc7XG5pbXBvcnQge0VxdWF0aW9uRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2RpYWxvZ3MvZXF1YXRpb24tZGlhbG9nL2VxdWF0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtFcXVhdGlvbkJyaWNrUHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXJzL2JyaWNrcy5wcm92aWRlcnMnO1xuaW1wb3J0IHtLYXRleEZpbHRlclByb3ZpZGVyfSBmcm9tICcuL3Byb3ZpZGVycy9maWx0ZXJzLnByb3ZpZGVycyc7XG5pbXBvcnQge0NsaWNrRXF1YXRpb25IYW5kbGVyUHJvdmlkZXIsIEtleWRvd25FcXVhdGlvbkhhbmRsZXJQcm92aWRlcn0gZnJvbSAnLi9wcm92aWRlcnMvaGFuZGxlcnMucHJvdmlkZXJzJztcbmltcG9ydCB7S2F0ZXhTZXJpYWxpemVyfSBmcm9tICcuL3NlcmlhbGl6ZXJzL2thdGV4LXNlcmlhbGl6ZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEVxdWF0aW9uQnJpY2tDb21wb25lbnQsXG4gICAgRXF1YXRpb25EaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRXF1YXRpb25Ccmlja0NvbXBvbmVudCxcbiAgICBFcXVhdGlvbkRpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEZsZXhNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIEthdGV4TW9kdWxlLFxuICAgIFNpbGljYXRlQ29yZU1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWxpY2F0ZUxhdGV4TW9kdWxlIHtcbiAgc3RhdGljIHByb3ZpZGVycygpOiBQcm92aWRlcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gQnJpY2tzXG4gICAgICBFcXVhdGlvbkJyaWNrUHJvdmlkZXIsXG4gICAgICAvLyBGaWx0ZXJzXG4gICAgICBLYXRleEZpbHRlclByb3ZpZGVyLFxuICAgICAgLy8gSGFuZGxlcnNcbiAgICAgIEtleWRvd25FcXVhdGlvbkhhbmRsZXJQcm92aWRlcixcbiAgICAgIENsaWNrRXF1YXRpb25IYW5kbGVyUHJvdmlkZXIsXG4gICAgICAvLyBTZXJpYWxpemVyc1xuICAgICAge3Byb3ZpZGU6IFNlcmlhbGl6ZXJzLCBtdWx0aTogdHJ1ZSwgdXNlQ2xhc3M6IEthdGV4U2VyaWFsaXplcn1cbiAgICBdO1xuICB9XG59XG4iXX0=