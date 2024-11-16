interface ModuleOptions {
    declarations: { new(): any }[]; // Ensures declarations are class constructors
    bootstrap: { new(): any };      // Ensures bootstrap is a class constructor
}

function Module(options: ModuleOptions) {
    return function (constructor: Function) {
        constructor.prototype.declarations = options.declarations;
        constructor.prototype.bootstrapComponent = new options.bootstrap();

        constructor.prototype.bootstrap = function () {
            try {
                this.bootstrapComponent.render();
                console.log(`${options.bootstrap.name} has been bootstrapped successfully.`);
            } catch (error) {
                console.error('Error during bootstrap:', error);
            }
        };
    };
}

export { Module, ModuleOptions };
