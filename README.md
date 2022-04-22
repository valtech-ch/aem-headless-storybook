# aem-headless-storybook

## Storybook vs AEM Archetype frontend workflow

Key frontend workflow differences on Storybook vs AEM Archeytpe setup (AEM + React dev server)

||Storybook|AEM Archetype setup|
|---------|--------------------------------------|---------------------------------------|
|Feedback latency between pages/stories|ca. 1 second|ca. 12 seconds|
|Sample content can be used as mock data|✅|🚫|

## Setup

1. Follow https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html
2. On different terminal tabs, launch:
   * From the the folder with aem-author-p4502.jar: `java -jar aem-author-p4502.jar`
   * From ui.frontend: `npm start`
   * Also from ui.frontend: `npm run storybook`
3. Create two AEM pages with some Text components since they are available to authors OOTB. We'll assume these paths:
   * `/content/mysite/sandbox/components/button/button--primary.html`
   * `/content/mysite/sandbox/components/button/button--text.html`

## Action sequence

### Feedback latency between pages/stories

1. React dev server
   1. At `.env.development`, set `REACT_APP_PAGE_MODEL_PATH=/content/mysite/sandbox/components/button/button--primary.json`
   1. Stop `npm start` and start it again (http://localhost:3000/content/mysite/us/en/home.html will open)
   1. At `.env.development`, set `REACT_APP_PAGE_MODEL_PATH=/content/mysite/sandbox/components/button/button--text.json`
   1. Stop `npm start` and start it again (http://localhost:3000/content/mysite/us/en/home.html will open)
   1. Measure time to different page
2. Storybook
   1. Visit http://localhost:6007/?path=/story/core-button--primary
   1. At `Button.css` > `.cmp-button` selector > set `border-radius: 44px;`
   1. Measure time to reload
   1. Click on the "CORE > Button > Text" story
   1. Measure time to different story

### Sample content can be used as mock data for unit tests

1. Open `Button.test.tsx`
2. On a terminal, run `npm run test`
