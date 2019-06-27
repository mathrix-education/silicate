export abstract class SilicateExtensionModule {
  static bricks() {
    throw new Error(`${this.constructor.name}.bricks() must implemented!`);
  }
}
