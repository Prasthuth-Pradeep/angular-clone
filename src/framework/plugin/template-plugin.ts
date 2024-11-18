import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';

export function inlineHTMLPlugin(): Plugin {
  return {
    name: 'vite-plugin-inline-html',
    transform(code: string, id: string): string | null {
      if (id.endsWith('.ts')) {
        const templateRegex = /templateUrl:\s*['"`](.*?)['"`]/g;
        return code.replace(templateRegex, (match, templatePath) => {
          const absolutePath = path.resolve(path.dirname(id), templatePath);

          // Watch the template file for changes
          this.addWatchFile(absolutePath);

          try {
            const templateContent = fs.readFileSync(absolutePath, 'utf-8')
              .replace(/`/g, '\\`')
              .replace(/\n/g, '\\n');
            return `template: \`${templateContent}\``;
          } catch (error) {
            // console.error(`Failed to read template at ${absolutePath}:`, error);
            return match;
          }
        });
      }
      return null;
    }
  };
}
