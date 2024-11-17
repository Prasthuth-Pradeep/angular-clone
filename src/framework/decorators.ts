export function Component(options: { selector: string; template: string }) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`Rendering component with selector: ${options.selector}`);
        const container = document.querySelector(options.selector);
        
        if (container) {
          // Process template bindings before inserting it into the DOM
          let processedTemplate = options.template.replace(/{{\s*(\w+)\s*}}/g, (match, propName) => {
            // Replace with the corresponding property value from the instance
            return (this as any)[propName] ?? match;
          });

          container.innerHTML = processedTemplate;
          console.log(`Template rendered successfully for ${options.selector}`);
        } else {
          console.error(`Element with selector "${options.selector}" not found.`);
        }
      }
    };
  };
}
