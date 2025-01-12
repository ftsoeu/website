const cleanIndentation = (str: string) => str.replace(/^[ \t]+/gm, '').trim();

const data = {
  title: 'About Cookie Settings, Privacy and GDPO',
  subtitle: 'We take care about your privacy in the best transparent way',
  body: `
    This website is hosted in a git repo on Github.

    ### Terms' Service
    **Currently we don't tracking anything on this website.**
    All traffic goes through Github hosting provider. 
    We are a **Flare Infrastructure Provider** for the [Flare Network Blockchain](https://flare.network/), we are partecipating as **Flare Time Series Oracle** *(aka FTSO)*.
    In this journey we collected over 10 assets like Bitcoin, Eth, Xrp every 2 seconds from 2020, along a skyrocket time and also during the worst bear scenario. We never stop to do our job, we also never colluded with other FTSOs.

    ### Cookie Settings
    Fell free to clear your Cookie Consent vie Browser's settings. To save your preference and your consent we use Technical Cookies (named as "CookieConsent").`,
};

data.body = cleanIndentation(data.body);

export default data;
