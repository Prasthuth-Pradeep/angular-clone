export function Component(options: { selector: string; template?: string; templateUrl?: string }) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
        // console.log(`Applying @Component decorator to ${constructor.name}`);

        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                // console.log(`Rendering component with selector: ${options.selector}`);

                const container = document.querySelector(options.selector);

                if (container) {
                    if (options.template) {
                        // Inline template handling
                        this.renderTemplate(container, options.template);
                        // console.log(`Template rendered successfully for ${options.selector}`);
                    } else {
                        console.error('No template provided.');
                    }
                } else {
                    console.error(`Element with selector "${options.selector}" not found.`);
                }
            }

            private renderTemplate(container: Element, template: string): void {
                // console.log('Rendering template:', template);
                let processedTemplate = template.replace(/{{\s*([\w.]+)\s*}}/g, (match, propPath) => {
                    // console.log('Processing template binding:', propPath);
                    const propertyValue = propPath.split('.').reduce((acc: any, key: string) => {
                        return acc && acc[key] !== undefined ? acc[key] : undefined;
                    }, this as any);
                    return propertyValue !== undefined && propertyValue !== null ? propertyValue : match;
                });

                container.innerHTML = processedTemplate;
            }
        };
    };
}
