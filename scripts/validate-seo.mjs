import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DIST_DIR = path.join(rootDir, 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const BLOG_POST_PATH = path.join(DIST_DIR, 'blog/integrasi-ai-ke-website/index.html');

/**
 * Validates Technical SEO markers in built HTML files
 * Required checks (FAIL if missing):
 * - canonical URL: https://adamdev.web.id/
 * - <title> tag
 * - JSON-LD Person @id: https://adamdev.web.id/#person (absolute)
 * - JSON-LD alternateName: Adam, Dani, Apta, Mahendra
 * - Blog post: "@type": "Article" and datePublished
 */
function validateSEO() {
    console.log('🔍 Starting SEO Validation...');

    const errors = [];

    // 1. Check index.html exists
    if (!fs.existsSync(INDEX_HTML_PATH)) {
        console.error('❌ dist/index.html not found. Run astro build first.');
        process.exit(1);
    }

    const indexContent = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

    // 2. Validate canonical URL (required)
    console.log('📍 Checking canonical URL...');
    const canonicalRegex = /<link rel="canonical" href="https:\/\/adamdev\.web\.id\/"?>/;
    if (!canonicalRegex.test(indexContent)) {
        errors.push('Missing or incorrect canonical URL in index.html');
    } else {
        console.log('   ✅ Canonical URL present');
    }

    // 3. Validate title tag (required)
    console.log('📍 Checking title tag...');
    const titleRegex = /<title>/;
    if (!titleRegex.test(indexContent)) {
        errors.push('Missing <title> tag in index.html');
    } else {
        console.log('   ✅ Title tag present');
    }

    // 4. Validate JSON-LD @id for Person (required - must be ABSOLUTE)
    console.log('📍 Checking Person @id in JSON-LD...');
    const personIdRegex = /"@id":\s*"https:\/\/adamdev\.web\.id\/#person"/;
    if (!personIdRegex.test(indexContent)) {
        errors.push('Missing absolute @id (https://adamdev.web.id/#person) for Person in JSON-LD');
    } else {
        console.log('   ✅ Person @id (absolute) present in JSON-LD');
    }

    // 5. Validate alternateName (required - all 4 names must be present)
    console.log('📍 Checking alternateName in JSON-LD...');
    const requiredNames = ['Adam', 'Dani', 'Apta', 'Mahendra'];
    let missingNames = [];
    for (const name of requiredNames) {
        if (indexContent.includes(name)) {
            console.log(`   ✅ Found "${name}" in JSON-LD`);
        } else {
            missingNames.push(name);
        }
    }
    if (missingNames.length > 0) {
        errors.push(`Missing names in alternateName: ${missingNames.join(', ')}`);
    }

    // 6. Validate blog post SEO (required)
    console.log('📍 Checking blog post SEO...');
    if (!fs.existsSync(BLOG_POST_PATH)) {
        errors.push('Blog post not found: dist/blog/integrasi-ai-ke-website/index.html');
    } else {
        const blogContent = fs.readFileSync(BLOG_POST_PATH, 'utf-8');

        // Check for Article type
        const articleTypeRegex = /"@type":\s*"Article"/;
        if (!articleTypeRegex.test(blogContent)) {
            errors.push('Missing "@type": "Article" in blog post JSON-LD');
        } else {
            console.log('   ✅ Article @type present');
        }

        // Check for datePublished
        const datePublishedRegex = /"datePublished"/;
        if (!datePublishedRegex.test(blogContent)) {
            errors.push('Missing "datePublished" in blog post JSON-LD');
        } else {
            console.log('   ✅ datePublished present');
        }
    }

    // Report results
    if (errors.length > 0) {
        console.error('\n❌ SEO Validation Failed!');
        errors.forEach(err => {
            console.error(`   - ${err}`);
        });
        process.exit(1);
    } else {
        console.log('\n✨ SEO Validation Successful! All required SEO markers are present.');
    }
}

try {
    validateSEO();
} catch (error) {
    console.error('💥 An error occurred during SEO validation:', error.message);
    process.exit(1);
}
