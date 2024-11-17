export function Component(options: { selector: string; template: string }) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T): T {
    console.log(`Applying @Component decorator to ${constructor.name}`);

    // Modify the class prototype or attach metadata without causing instantiation
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args); // Call the original constructor
        console.log(`Rendering component with selector: ${options.selector}`);

        const container = document.querySelector(options.selector);

        if (container) {
          // Replace bindings in the template with property values
          let processedTemplate = options.template.replace(/{{\s*(\w+)\s*}}/g, (match, propName) => {
            console.log('Processing template binding:', propName);
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
