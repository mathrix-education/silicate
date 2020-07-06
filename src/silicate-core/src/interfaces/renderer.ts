export interface Renderer {
  /**
   * Called before rendering the silicate-editable content.
   */
  render(str: string): string;
}
