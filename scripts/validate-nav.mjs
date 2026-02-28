import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SITE_CONFIG_PATH = path.join(rootDir, 'src/config/site.ts');
const INDEX_ASTRO_PATH = path.join(rootDir, 'src/pages/index.astro');

/**
 * Validates that all internal links in site.ts have corresponding IDs in index.astro
 * or its imported components.
 */
function validateNavigation() {
    console.log('🔍 Starting Navigation Validation...');

    // 1. Extract links from site.ts
    const siteConfigContent = fs.readFileSync(SITE_CONFIG_PATH, 'utf-8');
    const hrefRegex = /href:\s*["'](?:\/?#)([a-zA-Z0-9_-]+)["']/g;
    const expectedIds = new Set();
    let match;

    while ((match = hrefRegex.exec(siteConfigContent)) !== null) {
        const id = match[1]; // ID without #
        if (id) expectedIds.add(id);
    }

    // Also check for 'Contact' which might be hardcoded in Navbar but targeting #contact
    // based on our previous edits, it seems #contact is definitely used.
    expectedIds.add('contact');

    console.log(`📍 Found ${expectedIds.size} unique internal links in site.ts: ${Array.from(expectedIds).join(', ')}`);

    // 2. Extract IDs from index.astro and imported components
    const indexAstroContent = fs.readFileSync(INDEX_ASTRO_PATH, 'utf-8');
    const availableIds = new Set();

    // Find direct IDs in index.astro
    const idRegex = /id="([a-zA-Z0-9_-]+)"/g;
    while ((match = idRegex.exec(indexAstroContent)) !== null) {
        availableIds.add(match[1]);
    }

    // Find imported components in index.astro
    // Support multiline imports and named imports by looking for 'from "@components/..."'
    const importRegex = /from\s+["']@\/components\/(.+?)["']/g;
    const componentPaths = [];
    while ((match = importRegex.exec(indexAstroContent)) !== null) {
        componentPaths.push(path.join(rootDir, 'src/components', match[1]));
    }

    // Scan components for IDs
    for (const compPath of componentPaths) {
        // Try both .astro and potentially other extensions if needed, but mostly .astro here
        const actualPath = compPath.endsWith('.astro') ? compPath : `${compPath}.astro`;
        if (fs.existsSync(actualPath)) {
            const content = fs.readFileSync(actualPath, 'utf-8');
            const idRegex = /id="([a-zA-Z0-9_-]+)"/g; // New instance per file to avoid lastIndex issues
            let compMatch;
            while ((compMatch = idRegex.exec(content)) !== null) {
                availableIds.add(compMatch[1]);
            }
        }
    }

    console.log(`✅ Found ${availableIds.size} available IDs in components.`);

    // 3. Compare and validate
    const missingIds = [];
    for (const id of expectedIds) {
        if (!availableIds.has(id)) {
            missingIds.push(id);
        }
    }

    if (missingIds.length > 0) {
        console.error('\n❌ Navigation Validation Failed!');
        missingIds.forEach(id => {
            console.error(`   - Missing ID: #${id} (referenced in site.ts or navigation)`);
        });
        process.exit(1);
    } else {
        console.log('\n✨ Navigation Validation Successful! All links are valid.');
    }
}

try {
    validateNavigation();
} catch (error) {
    console.error('💥 An error occurred during validation:', error.message);
    process.exit(1);
}
