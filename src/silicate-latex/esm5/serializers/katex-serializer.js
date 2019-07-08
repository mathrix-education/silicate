/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as katex from 'katex';
import { Injectable, RendererFactory2 } from '@angular/core';
var KatexSerializer = /** @class */ (function () {
    function KatexSerializer(rendererFactory) {
        this.renderer2 = rendererFactory.createRenderer(null, null);
    }
    /**
     * Render the KaTeX equations.
     * @param str The brick content.
     */
    /**
     * Render the KaTeX equations.
     * @param {?} str The brick content.
     * @return {?}
     */
    KatexSerializer.prototype.render = /**
     * Render the KaTeX equations.
     * @param {?} str The brick content.
     * @return {?}
     */
    function (str) {
        var _this = this;
        /** @type {?} */
        var segments = str.split('$');
        /** @type {?} */
        var output = '';
        segments.forEach((/**
         * @param {?} segment
         * @param {?} index
         * @return {?}
         */
        function (segment, index) {
            if (index % 2 === 0) {
                output += segment;
            }
            else {
                output += katex.renderToString(segment, { displayMode: true });
            }
        }));
        /** @type {?} */
        var sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', output);
        sandbox.querySelectorAll('.katex-display').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        function (katexElement) {
            _this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
        }));
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        function (katexElement) {
            // Required to not interfere with the contenteditable of attribute of the wrapper
            _this.renderer2.setAttribute(katexElement, 'contenteditable', 'false');
        }));
        output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    };
    /**
     * Serialize Katex-rendered equations
     * @param str The raw HTML
     */
    /**
     * Serialize Katex-rendered equations
     * @param {?} str The raw HTML
     * @return {?}
     */
    KatexSerializer.prototype.serialize = /**
     * Serialize Katex-rendered equations
     * @param {?} str The raw HTML
     * @return {?}
     */
    function (str) {
        var _this = this;
        // We do not even need to analyse non-katex content
        if (str.indexOf('katex') === -1) {
            return str;
        }
        /** @type {?} */
        var sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', str);
        // Now, we revert every katex HTML to their inline latex equation form ($equation$)
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        function (katexElement) {
            /** @type {?} */
            var annotation = katexElement.querySelector('.katex-mathml annotation');
            /** @type {?} */
            var equation = annotation.textContent;
            _this.renderer2.setProperty(katexElement, 'outerHTML', "$" + equation + "$");
        }));
        /** @type {?} */
        var output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    };
    KatexSerializer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    KatexSerializer.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return KatexSerializer;
}());
export { KatexSerializer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    KatexSerializer.prototype.renderer2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0ZXgtc2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXRocml4L3NpbGljYXRlLWxhdGV4LyIsInNvdXJjZXMiOlsic2VyaWFsaXplcnMva2F0ZXgtc2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFDLFVBQVUsRUFBYSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV0RTtJQUlFLHlCQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsZ0NBQU07Ozs7O0lBQU4sVUFBTyxHQUFXO1FBQWxCLGlCQTJCQzs7WUExQk8sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUMzQixNQUFNLEdBQUcsRUFBRTtRQUVmLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsT0FBZSxFQUFFLEtBQWE7WUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLE9BQU8sQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUM5RDtRQUNILENBQUMsRUFBQyxDQUFDOztZQUVHLE9BQU8sR0FBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRW5FLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsWUFBWTtZQUM3RCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxZQUFZO1lBQ3JELGlGQUFpRjtZQUNqRixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVc7UUFBckIsaUJBb0JDO1FBbkJDLG1EQUFtRDtRQUNuRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUM7U0FDWjs7WUFFSyxPQUFPLEdBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXRELG1GQUFtRjtRQUNuRixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsWUFBeUI7O2dCQUM3RCxVQUFVLEdBQWdCLFlBQVksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7O2dCQUNoRixRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVc7WUFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFJLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFDLENBQUM7O1lBRUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWpFRixVQUFVOzs7O2dCQUZvQixnQkFBZ0I7O0lBb0UvQyxzQkFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLGVBQWU7Ozs7OztJQUMxQixvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gJ0BtYXRocml4L3NpbGljYXRlLWNvcmUnO1xuaW1wb3J0ICogYXMga2F0ZXggZnJvbSAna2F0ZXgnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2F0ZXhTZXJpYWxpemVyIGltcGxlbWVudHMgU2VyaWFsaXplciB7XG4gIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5yZW5kZXJlcjIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBLYVRlWCBlcXVhdGlvbnMuXG4gICAqIEBwYXJhbSBzdHIgVGhlIGJyaWNrIGNvbnRlbnQuXG4gICAqL1xuICByZW5kZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gc3RyLnNwbGl0KCckJyk7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuXG4gICAgc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgIG91dHB1dCArPSBzZWdtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGthdGV4LnJlbmRlclRvU3RyaW5nKHNlZ21lbnQsIHtkaXNwbGF5TW9kZTogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2FuZGJveDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMucmVuZGVyZXIyLnNldFByb3BlcnR5KHNhbmRib3gsICdpbm5lckhUTUwnLCBvdXRwdXQpO1xuICAgIHNhbmRib3gucXVlcnlTZWxlY3RvckFsbCgnLmthdGV4LWRpc3BsYXknKS5mb3JFYWNoKGthdGV4RWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5zZXRQcm9wZXJ0eShrYXRleEVsZW1lbnQsICdvdXRlckhUTUwnLCBrYXRleEVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICB9KTtcbiAgICBzYW5kYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rYXRleCcpLmZvckVhY2goa2F0ZXhFbGVtZW50ID0+IHtcbiAgICAgIC8vIFJlcXVpcmVkIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgY29udGVudGVkaXRhYmxlIG9mIGF0dHJpYnV0ZSBvZiB0aGUgd3JhcHBlclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0QXR0cmlidXRlKGthdGV4RWxlbWVudCwgJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgb3V0cHV0ID0gc2FuZGJveC5pbm5lckhUTUw7XG4gICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlcjIucGFyZW50Tm9kZShzYW5kYm94KSwgc2FuZGJveCk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBLYXRleC1yZW5kZXJlZCBlcXVhdGlvbnNcbiAgICogQHBhcmFtIHN0ciBUaGUgcmF3IEhUTUxcbiAgICovXG4gIHNlcmlhbGl6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gV2UgZG8gbm90IGV2ZW4gbmVlZCB0byBhbmFseXNlIG5vbi1rYXRleCBjb250ZW50XG4gICAgaWYgKHN0ci5pbmRleE9mKCdrYXRleCcpID09PSAtMSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW5kYm94OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMucmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFByb3BlcnR5KHNhbmRib3gsICdpbm5lckhUTUwnLCBzdHIpO1xuXG4gICAgLy8gTm93LCB3ZSByZXZlcnQgZXZlcnkga2F0ZXggSFRNTCB0byB0aGVpciBpbmxpbmUgbGF0ZXggZXF1YXRpb24gZm9ybSAoJGVxdWF0aW9uJClcbiAgICBzYW5kYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rYXRleCcpLmZvckVhY2goKGthdGV4RWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGFubm90YXRpb246IEhUTUxFbGVtZW50ID0ga2F0ZXhFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rYXRleC1tYXRobWwgYW5ub3RhdGlvbicpO1xuICAgICAgY29uc3QgZXF1YXRpb24gPSBhbm5vdGF0aW9uLnRleHRDb250ZW50O1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0UHJvcGVydHkoa2F0ZXhFbGVtZW50LCAnb3V0ZXJIVE1MJywgYCQke2VxdWF0aW9ufSRgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG91dHB1dCA9IHNhbmRib3guaW5uZXJIVE1MO1xuICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIyLnBhcmVudE5vZGUoc2FuZGJveCksIHNhbmRib3gpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxufVxuIl19