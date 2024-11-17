interface ModuleOptions {
  declarations: { new (): any }[]; // Class constructors for declarations
  bootstrap: { new (): any };      // Class constructor for the bootstrap component
}

function Module(options: ModuleOptions) {
  return function (constructor: Function) {
    constructor.prototype.declarations = options.declarations;
    constructor.prototype.bootstrapComponent = options.bootstrap;

    constructor.prototype.bootstrap = function () {
      try {
        console.log(`Bootstrapping ${options.bootstrap.name}`);
        const instance = new options.bootstrap();
        // Call the render method or other logic to initialize the component
        console.log(`${options.bootstrap.name} has been bootstrapped successfully.`);
      } catch (error) {
        console.error('Error during bootstrap:', error);
      }
    };
  };
}

export { Module, ModuleOptions };
