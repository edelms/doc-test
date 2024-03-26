import { A, Navigate, Route, Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createEffect, on } from "solid-js";
import "./app.css";

export default function App() {
    return (
        <Router
            root={props => (
                <main>
                    <A href="/">Index</A>
                    <A href="/about">About</A>
                    <Suspense>{props.children}</Suspense>
                    <Track />
                </main>
            )}
        >
            <FileRoutes />
        </Router>
    );
}


function Track() {
    const loc = useLocation();
    createEffect(on(
        () => loc.pathname,
        (pathname) => {
            (window as any)._paq?.push(['setCustomUrl', pathname]);
            (window as any)._paq?.push(['trackPageView']);
        },
        { defer: true }
    ));
    return <></>;
}