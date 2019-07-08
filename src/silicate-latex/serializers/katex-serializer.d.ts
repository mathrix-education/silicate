import { Serializer } from '@mathrix/silicate-core';
import { RendererFactory2 } from '@angular/core';
export declare class KatexSerializer implements Serializer {
    private renderer2;
    constructor(rendererFactory: RendererFactory2);
    /**
     * Render the KaTeX equations.
     * @param str The brick content.
     */
    render(str: string): string;
    /**
     * Serialize Katex-rendered equations
     * @param str The raw HTML
     */
    serialize(str: string): string;
}
