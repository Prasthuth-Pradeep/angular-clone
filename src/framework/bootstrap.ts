export function bootstrapModule(module: { new(): any; }) {
    document.addEventListener('DOMContentLoaded', () => {
      try {
        const appModuleInstance = new module();
        if (typeof appModuleInstance.bootstrap === 'function') {
          appModuleInstance.bootstrap();
          console.log('Application bootstrapped successfully.');
        } else {
          throw new Error('The provided module does not have a bootstrap method.');
        }
      } catch (error) {
        console.error('Error bootstrapping the module:', error);
      }
    });
  }
  