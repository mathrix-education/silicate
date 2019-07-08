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
export class SilicateLatexModule {
    /**
     * @return {?}
     */
    static providers() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lsaWNhdGUtbGF0ZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhyaXgvc2lsaWNhdGUtbGF0ZXgvIiwic291cmNlcyI6WyJzaWxpY2F0ZS1sYXRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsY0FBYyxFQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLDRCQUE0QixFQUFFLDhCQUE4QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBMEIvRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLE1BQU0sQ0FBQyxTQUFTO1FBQ2QsT0FBTztZQUNMLFNBQVM7WUFDVCxxQkFBcUI7WUFDckIsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUM1QixjQUFjO1lBQ2QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQzs7O1lBcENGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0Qix1QkFBdUI7aUJBQ3hCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxVQUFVO29CQUNWLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsa0JBQWtCO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZsZXhNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1NlcmlhbGl6ZXJzLCBTaWxpY2F0ZUNvcmVNb2R1bGV9IGZyb20gJ0BtYXRocml4L3NpbGljYXRlLWNvcmUnO1xuaW1wb3J0IHtLYXRleE1vZHVsZX0gZnJvbSAnbmcta2F0ZXgnO1xuaW1wb3J0IHtFcXVhdGlvbkJyaWNrQ29tcG9uZW50fSBmcm9tICcuL2JyaWNrcy9lcXVhdGlvbi1icmljay9lcXVhdGlvbi1icmljay5jb21wb25lbnQnO1xuaW1wb3J0IHtFcXVhdGlvbkRpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9kaWFsb2dzL2VxdWF0aW9uLWRpYWxvZy9lcXVhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7RXF1YXRpb25Ccmlja1Byb3ZpZGVyfSBmcm9tICcuL3Byb3ZpZGVycy9icmlja3MucHJvdmlkZXJzJztcbmltcG9ydCB7S2F0ZXhGaWx0ZXJQcm92aWRlcn0gZnJvbSAnLi9wcm92aWRlcnMvZmlsdGVycy5wcm92aWRlcnMnO1xuaW1wb3J0IHtDbGlja0VxdWF0aW9uSGFuZGxlclByb3ZpZGVyLCBLZXlkb3duRXF1YXRpb25IYW5kbGVyUHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXJzL2hhbmRsZXJzLnByb3ZpZGVycyc7XG5pbXBvcnQge0thdGV4U2VyaWFsaXplcn0gZnJvbSAnLi9zZXJpYWxpemVycy9rYXRleC1zZXJpYWxpemVyJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFcXVhdGlvbkJyaWNrQ29tcG9uZW50LFxuICAgIEVxdWF0aW9uRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEVxdWF0aW9uQnJpY2tDb21wb25lbnQsXG4gICAgRXF1YXRpb25EaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGbGV4TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBLYXRleE1vZHVsZSxcbiAgICBTaWxpY2F0ZUNvcmVNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lsaWNhdGVMYXRleE1vZHVsZSB7XG4gIHN0YXRpYyBwcm92aWRlcnMoKTogUHJvdmlkZXJbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEJyaWNrc1xuICAgICAgRXF1YXRpb25Ccmlja1Byb3ZpZGVyLFxuICAgICAgLy8gRmlsdGVyc1xuICAgICAgS2F0ZXhGaWx0ZXJQcm92aWRlcixcbiAgICAgIC8vIEhhbmRsZXJzXG4gICAgICBLZXlkb3duRXF1YXRpb25IYW5kbGVyUHJvdmlkZXIsXG4gICAgICBDbGlja0VxdWF0aW9uSGFuZGxlclByb3ZpZGVyLFxuICAgICAgLy8gU2VyaWFsaXplcnNcbiAgICAgIHtwcm92aWRlOiBTZXJpYWxpemVycywgbXVsdGk6IHRydWUsIHVzZUNsYXNzOiBLYXRleFNlcmlhbGl6ZXJ9XG4gICAgXTtcbiAgfVxufVxuIl19