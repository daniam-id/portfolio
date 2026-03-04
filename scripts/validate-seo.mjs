import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DIST_DIR = path.join(rootDir, 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

/**
 * Dynamically discover all blog post directories
 * @returns {string[]} Array of blog post index.html paths
 */
function getBlogPostPaths() {
    const blogDir = path.join(DIST_DIR, 'blog');
    if (!fs.existsSync(blogDir)) return [];
    
    return fs.readdirSync(blogDir)
        .filter(name => {
            const fullPath = path.join(blogDir, name);
            return fs.statSync(fullPath).isDirectory();
        })
        .map(name => path.join(blogDir, name, 'index.html'));
}

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

    // Helper to extract JSON-LD
    const getJsonLd = (htmlContent) => {
        const matches = [...htmlContent.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
        return matches.map(match => {
            try { return JSON.parse(match[1]); } catch (e) { return null; }
        }).filter(Boolean);
    };

    const indexJsonLds = getJsonLd(indexContent);

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
    let personGraph = null;

    // SEO setup usually uses @graph or just an object
    for (const jsonLd of indexJsonLds) {
        if (jsonLd['@graph']) {
            personGraph = jsonLd['@graph'].find(item => item['@type'] === 'Person');
            if (personGraph) break;
        } else if (jsonLd['@type'] === 'Person') {
            personGraph = jsonLd;
            break;
        }
    }

    if (!personGraph) {
        errors.push('Person entity not found in JSON-LD');
    } else if (personGraph['@id'] !== 'https://adamdev.web.id/#person') {
        errors.push('Missing absolute @id (https://adamdev.web.id/#person) for Person in JSON-LD');
    } else {
        console.log('   ✅ Person @id (absolute) present in JSON-LD');
    }

    // 5. Validate alternateName (required - all 4 names must be present)
    console.log('📍 Checking alternateName in JSON-LD...');
    const requiredNames = ['Adam', 'Dani', 'Apta', 'Mahendra'];
    const missingNames = [];

    const alternateNames = personGraph ? (Array.isArray(personGraph.alternateName) ? personGraph.alternateName : [personGraph.alternateName]) : [];

    for (const name of requiredNames) {
        if (alternateNames.includes(name)) {
            console.log(`   ✅ Found "${name}" in JSON-LD`);
        } else {
            missingNames.push(name);
        }
    }
    if (missingNames.length > 0) {
        errors.push(`Missing names in alternateName: ${missingNames.join(', ')}`);
    }

    // 6. Validate ALL blog posts SEO (required)
    console.log('📍 Checking blog post SEO...');
    const blogPostPaths = getBlogPostPaths();
    
    if (blogPostPaths.length === 0) {
        errors.push('No blog posts found in dist/blog/');
    } else {
        console.log(`   Found ${blogPostPaths.length} blog post(s) to validate`);
        
        for (const blogPostPath of blogPostPaths) {
            const slug = path.basename(path.dirname(blogPostPath));
            console.log(`   📄 Validating: ${slug}`);
            
            const blogContent = fs.readFileSync(blogPostPath, 'utf-8');
            const blogJsonLds = getJsonLd(blogContent);

            let articleGraph = null;
            for (const jsonLd of blogJsonLds) {
                if (jsonLd['@graph']) {
                    articleGraph = jsonLd['@graph'].find(item => item['@type'] === 'Article');
                    if (articleGraph) break;
                } else if (jsonLd['@type'] === 'Article') {
                    articleGraph = jsonLd;
                    break;
                }
            }

            // Check for Article type
            if (!articleGraph) {
                errors.push(`Missing "@type": "Article" in blog post: ${slug}`);
            } else {
                console.log(`      ✅ Article @type present`);

                // Check for datePublished
                if (!articleGraph.datePublished) {
                    errors.push(`Missing "datePublished" in blog post: ${slug}`);
                } else {
                    console.log(`      ✅ datePublished present`);
                }
            }
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
