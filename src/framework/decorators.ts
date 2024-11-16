export function Component(options: { selector: string; template: string }) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
      // Extend the original constructor to include rendering logic
      return class extends constructor {
        constructor(...args: any[]) {
          super(...args);
          console.log(`Rendering component with selector: ${options.selector}`);
          const container = document.querySelector(options.selector);
          if (container) {
            container.innerHTML = options.template;
            console.log(`Template rendered successfully for ${options.selector}`);
          } else {
            console.error(`Element with selector "${options.selector}" not found.`);
          }
        }
      };
    };
  }
  