# Wrapper in brick

Sometimes, you may want to integrate Silicate into a single brick. There are a few limitations, related to the way the Wrapper works.

First of all, you should care about all sandboxed services which are declared into the SilicateWrapperComponent @Component decorator:

- BrickResolverService
- PurifierService
- SilicateService
- ToolbarService
- WallService

Especially, the SilicateService, which controls the ability to be editable.

Refer to the [BoxComponent](../../src/silicate-demo/app/bricks/box-brick) in the demo project for an example.
