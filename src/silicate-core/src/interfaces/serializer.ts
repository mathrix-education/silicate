export interface Serializer {
  /**
   * Called before rendering the silicate-editable content.
   */
  render(str: string): string;

  /**
   * Called before serializing the silicate-editable content.
   */
  serialize(str: string): string;
}
