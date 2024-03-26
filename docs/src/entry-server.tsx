// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {assets}

                    {/* <!-- Matomo --> */}
                    <script innerText={`
                        var _paq = window._paq = window._paq || [];
                        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                        _paq.push(['requireCookieConsent']);
                        _paq.push(['trackPageView']);
                        _paq.push(['enableLinkTracking']);
                        (function() {
                            var u="//stats.edelms.com/";
                            _paq.push(['setTrackerUrl', u+'matomo.php']);
                            _paq.push(['setSiteId', '2']);
                            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                        })();
                        `} />
                    {/* <!-- End Matomo Code --> */}

                </head>
                <body>
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
