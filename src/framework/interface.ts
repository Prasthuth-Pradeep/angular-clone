interface Renderable {
    render(): void;
}

interface ModuleOptions {
    declarations: { new(): any }[];
    bootstrap: { new(): any };
    imports?: { new(): any }[]; // Optional array for module imports
    providers?: { provide: any, useClass: any }[]; // Optional dependency injection
}
