interface ModuleOptions {
    declarations: { new(): any }[]; // Ensures declarations are class constructors
    bootstrap: { new(): any };      // Ensures bootstrap is a class constructor
  }
  
  function Module(options: ModuleOptions) {
    return function (constructor: Function) {
      constructor.prototype.declarations = options.declarations;
      constructor.prototype.bootstrapComponent = new options.bootstrap();

      // Check instance constructor name
      const instance = new options.bootstrap();
      console.log('Instance Constructor Name:', instance.constructor.name);
  
      constructor.prototype.bootstrap = function () {
        try {
          console.log(`Trying to bootstrap ${options.bootstrap.name || 'Unnamed Component'}`);
          console.log(`${instance.constructor.name} is being bootstrapped.`);
          // The component instance should render itself upon instantiation
          console.log(`${options.bootstrap.name} has been bootstrapped successfully.`);
        } catch (error) {
          console.error('Error during bootstrap:', error);
        }
      };
    };
  }
  
  export { Module, ModuleOptions };
  