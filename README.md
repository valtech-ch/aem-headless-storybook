# aem-headless-storybook

## About the demo

### Setup

1. Follow https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html
2. On different terminal tabs, launch:
   * From the the folder with aem-author-p4502.jar: `java -jar aem-author-p4502.jar`
   * From ui.frontend: `npm start`
   * Also from ui.frontend: `npm run storybook`
3. Create two AEM pages with some Text components since they are available to authors OOTB. We'll assume these paths:
   * `/content/mysite/sandbox/components/button/button--primary.html`
   * `/content/mysite/sandbox/components/button/button--text.html`

### Action sequence

1. React dev server
   1. At `.env.development`, set `REACT_APP_PAGE_MODEL_PATH=/content/mysite/sandbox/components/button/button--primary.json`
   1. Stop `npm start` and start it again (http://localhost:3000/content/mysite/us/en/home.html will open)
   1. At `Text.css` > `p` selector > set `color: #d04;`
   1. Measure time to reload
   1. At `.env.development`, set `REACT_APP_PAGE_MODEL_PATH=/content/mysite/sandbox/components/button/button--text.json`
   1. Stop `npm start` and start it again (http://localhost:3000/content/mysite/us/en/home.html will open)
   1. Measure time to different page
2. Storybook
   1. Visit http://localhost:6007/?path=/story/core-button--primary
   1. At `Button.css` > `.cmp-button` selector > set `border-radius: 44px;`
   1. Measure time to reload
   1. Click on the "CORE > Button > Text" story
   1. Measure time to different story
