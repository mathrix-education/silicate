/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as katex from 'katex';
import { Injectable, RendererFactory2 } from '@angular/core';
export class KatexSerializer {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.renderer2 = rendererFactory.createRenderer(null, null);
    }
    /**
     * Render the KaTeX equations.
     * @param {?} str The brick content.
     * @return {?}
     */
    render(str) {
        /** @type {?} */
        const segments = str.split('$');
        /** @type {?} */
        let output = '';
        segments.forEach((/**
         * @param {?} segment
         * @param {?} index
         * @return {?}
         */
        (segment, index) => {
            if (index % 2 === 0) {
                output += segment;
            }
            else {
                output += katex.renderToString(segment, { displayMode: true });
            }
        }));
        /** @type {?} */
        const sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', output);
        sandbox.querySelectorAll('.katex-display').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        katexElement => {
            this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
        }));
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        katexElement => {
            // Required to not interfere with the contenteditable of attribute of the wrapper
            this.renderer2.setAttribute(katexElement, 'contenteditable', 'false');
        }));
        output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    }
    /**
     * Serialize Katex-rendered equations
     * @param {?} str The raw HTML
     * @return {?}
     */
    serialize(str) {
        // We do not even need to analyse non-katex content
        if (str.indexOf('katex') === -1) {
            return str;
        }
        /** @type {?} */
        const sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', str);
        // Now, we revert every katex HTML to their inline latex equation form ($equation$)
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        (katexElement) => {
            /** @type {?} */
            const annotation = katexElement.querySelector('.katex-mathml annotation');
            /** @type {?} */
            const equation = annotation.textContent;
            this.renderer2.setProperty(katexElement, 'outerHTML', `$${equation}$`);
        }));
        /** @type {?} */
        const output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    }
}
KatexSerializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
KatexSerializer.ctorParameters = () => [
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    KatexSerializer.prototype.renderer2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0ZXgtc2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXRocml4L3NpbGljYXRlLWxhdGV4LyIsInNvdXJjZXMiOlsic2VyaWFsaXplcnMva2F0ZXgtc2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFDLFVBQVUsRUFBYSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0RSxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBTUQsTUFBTSxDQUFDLEdBQVc7O2NBQ1YsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUMzQixNQUFNLEdBQUcsRUFBRTtRQUVmLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2xELElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxPQUFPLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLEVBQUMsQ0FBQzs7Y0FFRyxPQUFPLEdBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUVuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEQsaUZBQWlGO1lBQ2pGLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQU1ELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLG1EQUFtRDtRQUNuRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUM7U0FDWjs7Y0FFSyxPQUFPLEdBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXRELG1GQUFtRjtRQUNuRixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsWUFBeUIsRUFBRSxFQUFFOztrQkFDakUsVUFBVSxHQUFnQixZQUFZLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDOztrQkFDaEYsUUFBUSxHQUFHLFVBQVUsQ0FBQyxXQUFXO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBQyxDQUFDOztjQUVHLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFqRUYsVUFBVTs7OztZQUZvQixnQkFBZ0I7Ozs7Ozs7SUFJN0Msb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tICdAbWF0aHJpeC9zaWxpY2F0ZS1jb3JlJztcbmltcG9ydCAqIGFzIGthdGV4IGZyb20gJ2thdGV4JztcbmltcG9ydCB7SW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEthdGV4U2VyaWFsaXplciBpbXBsZW1lbnRzIFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgS2FUZVggZXF1YXRpb25zLlxuICAgKiBAcGFyYW0gc3RyIFRoZSBicmljayBjb250ZW50LlxuICAgKi9cbiAgcmVuZGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHN0ci5zcGxpdCgnJCcpO1xuICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgIHNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICBvdXRwdXQgKz0gc2VnbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBrYXRleC5yZW5kZXJUb1N0cmluZyhzZWdtZW50LCB7ZGlzcGxheU1vZGU6IHRydWV9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNhbmRib3g6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRQcm9wZXJ0eShzYW5kYm94LCAnaW5uZXJIVE1MJywgb3V0cHV0KTtcbiAgICBzYW5kYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rYXRleC1kaXNwbGF5JykuZm9yRWFjaChrYXRleEVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0UHJvcGVydHkoa2F0ZXhFbGVtZW50LCAnb3V0ZXJIVE1MJywga2F0ZXhFbGVtZW50LmlubmVySFRNTCk7XG4gICAgfSk7XG4gICAgc2FuZGJveC5xdWVyeVNlbGVjdG9yQWxsKCcua2F0ZXgnKS5mb3JFYWNoKGthdGV4RWxlbWVudCA9PiB7XG4gICAgICAvLyBSZXF1aXJlZCB0byBub3QgaW50ZXJmZXJlIHdpdGggdGhlIGNvbnRlbnRlZGl0YWJsZSBvZiBhdHRyaWJ1dGUgb2YgdGhlIHdyYXBwZXJcbiAgICAgIHRoaXMucmVuZGVyZXIyLnNldEF0dHJpYnV0ZShrYXRleEVsZW1lbnQsICdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICB9KTtcblxuICAgIG91dHB1dCA9IHNhbmRib3guaW5uZXJIVE1MO1xuICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIyLnBhcmVudE5vZGUoc2FuZGJveCksIHNhbmRib3gpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgS2F0ZXgtcmVuZGVyZWQgZXF1YXRpb25zXG4gICAqIEBwYXJhbSBzdHIgVGhlIHJhdyBIVE1MXG4gICAqL1xuICBzZXJpYWxpemUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIFdlIGRvIG5vdCBldmVuIG5lZWQgdG8gYW5hbHlzZSBub24ta2F0ZXggY29udGVudFxuICAgIGlmIChzdHIuaW5kZXhPZigna2F0ZXgnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuZGJveDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRQcm9wZXJ0eShzYW5kYm94LCAnaW5uZXJIVE1MJywgc3RyKTtcblxuICAgIC8vIE5vdywgd2UgcmV2ZXJ0IGV2ZXJ5IGthdGV4IEhUTUwgdG8gdGhlaXIgaW5saW5lIGxhdGV4IGVxdWF0aW9uIGZvcm0gKCRlcXVhdGlvbiQpXG4gICAgc2FuZGJveC5xdWVyeVNlbGVjdG9yQWxsKCcua2F0ZXgnKS5mb3JFYWNoKChrYXRleEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uOiBIVE1MRWxlbWVudCA9IGthdGV4RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcua2F0ZXgtbWF0aG1sIGFubm90YXRpb24nKTtcbiAgICAgIGNvbnN0IGVxdWF0aW9uID0gYW5ub3RhdGlvbi50ZXh0Q29udGVudDtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnNldFByb3BlcnR5KGthdGV4RWxlbWVudCwgJ291dGVySFRNTCcsIGAkJHtlcXVhdGlvbn0kYCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvdXRwdXQgPSBzYW5kYm94LmlubmVySFRNTDtcbiAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyMi5wYXJlbnROb2RlKHNhbmRib3gpLCBzYW5kYm94KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cbiJdfQ==