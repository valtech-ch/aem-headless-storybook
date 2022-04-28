# AEM Archetype + Storybook for super fast delivery of Headless AEM projects

Key facts and figures:

* 1-second reload latency in the same component
* 1-second latency between components
* Sample content easily reused as mock data for unit tests

## Setup

1. Follow https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html
2. On different terminal tabs, launch:
   * From the the folder with aem-author-p4502.jar: `java -jar aem-author-p4502.jar`
   * From ui.frontend: `npm start`
   * Also from ui.frontend: `npm run storybook`
3. Create two AEM pages with some Text components since they are available to authors OOTB. We'll assume these paths:
   * `/content/mysite/sandbox/components/button/button--primary.html`
   * `/content/mysite/sandbox/components/button/button--text.html`

## Measuring latency between pages/stories

### For React's dev server

   1. At `.env.development`, set `REACT_APP_PAGE_MODEL_PATH=/content/mysite/sandbox/components/button/button--text.json`
   2. Stop the `npm start` process from the Setup and start it again (http://localhost:3000/content/mysite/us/en/home.html will open)
   3. Wait for the page content to be rendered

### For Storybook

   1. Visit http://localhost:6007/?path=/story/core-button--primary
   2. Click on the "CORE > Button > Text" story
   3. (The story will load nearly instantly)

## Running tests based on Storybook stories

1. Open `Button.test.tsx`
2. On a terminal, run `npm run test -- -t Button`
