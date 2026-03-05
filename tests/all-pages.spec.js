const { test, expect } = require('@playwright/test');

// List of all discovered valid pages on ccript.com
const PAGES = [
    '/', // Homepage
    '/advisory/marketresearch',
    '/advisory/discovery-workshop',
    '/advisory/digital-transformation-planning',
    '/advisory/product-strategy-roadmapping',
    '/advisory/ux-ui-design-and-consulting-services',
    '/advisory/technical-feasibility-study',
    '/engineering-product-development/proof-of-concept-development',
    '/engineering-product-development/application-development',
    '/engineering-product-development/ai-software-development',
    '/engineering-product-development/cloud-engineering-cloud-migration',
    '/engineering-product-development/slugproduct-development-full-cycle-engineering',
    '/engineering-product-development/application-modernization-re-engineering',
    '/optimization-quality/support-and-maintenance',
    '/optimization-quality/quality-assurance-testing',
    '/optimization-quality/software-audit-architecture-reviews',
    '/artificial-intelligence/generative-ai-development',
    '/artificial-intelligence/mlops-automated-ai-deployment-scaling',
    '/artificial-intelligence/ai-agents-task-automation-autonomy',
    '/artificial-intelligence/ai-workshop-strategy-sessions',
    '/artificial-intelligence/conversational-ai-chatbots-voice-interfaces',
    '/artificial-intelligence/ai-poc-mvp',
    '/artificial-intelligence/machine-learning-models',
    '/business-enablement/hr-recruitment-platforms',
    '/business-enablement/digital-marketing-branding',
    '/business-enablement/accounts-finance',
    '/design-services/dedicated-team',
    '/design-services/deliver-complex-projects-on-time-and-on-budget',
    '/design-services/offshore-development-center-odc',
    '/erp-crm-emerging-advanced-tech/third-party-integrations',
    '/erp-crm-emerging-advanced-tech/erp-crm-integrations',
    '/erp-crm-emerging-advanced-tech/bi-analytics-power-bi-data-pipelines',
    '/erp-crm-emerging-advanced-tech/data-science-predictive-analytics',
    '/erp-crm-emerging-advanced-tech/robotic-process-automation-rpa',
    '/erp-crm-emerging-advanced-tech/cybersecurity-data-protection',
    '/erp-crm-emerging-advanced-tech/blockchain-distributed-ledger',
    '/erp-crm-emerging-advanced-tech/internet-of-things-iot-9sqev',
    '/erp-crm-emerging-advanced-tech/ar-vr-mr-solutions',
    '/design-services/ui-ux-design-service',
    '/design-services/web-mobile-app-design',
    '/design-services/saas-product-design',
    '/design-services/graphic-design-that-turns-ideas-into-visual-impact',
    '/design-services/design-systems-style-guides',
    '/design-services/branding-logo-design',
    '/design-services/prototyping-wireframing-that-brings-ideas-to-life',
    '/design-services/landing-page-design-that-converts',
    '/design-services/design-built-for-clarity-control-and-efficiency',
    '/magic-work',
    '/company',
    '/contact-us',
    '/insight/streamlined-operations-with-salesforce-and-azure-integration',
    '/insight/custom-web-development-services-for-customer-crm-solutions',
    '/insight/integrating-ai-into-ar-vr-game-development-services-for-smarter-gameplay',
    '/insight/the-role-of-ux-in-increasing-saas-product-adoption-and-retention',
    '/insight/why-your-business-needs-a-custom-crm-enterprise-solution-in-2025',
    '/insight/how-blockchain-and-smart-contracts-are-changing-enterprise-solutions',
    '/insight/how-headless-cms-is-revolutionizing-website-performance-and-flexibility',
    '/terms-and-conditions',
    '/privacy-policy',
    '/blogs'
];

test.describe('Site-wide dynamic page tests', () => {
    for (const pagePath of PAGES) {
        test(`Should successfully load and render ${pagePath}`, async ({ page }) => {
            // 1. Navigate to the page. Wait until DOM is loaded to avoid timing out on slow external scripts.
            const response = await page.goto(`https://ccript.com${pagePath}`, { waitUntil: 'domcontentloaded' });

            // 2. Verify a valid HTTP status (200 OK)
            expect(response.status()).toBe(200);

            // 3. Verify that the page has a valid title, ensuring basic rendering didn't crash
            const title = await page.title();
            expect(title.length).toBeGreaterThan(0);
        });
    }
});
