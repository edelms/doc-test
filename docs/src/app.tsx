import { A, Navigate, Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
    return (
        <Router
            base={import.meta.env.SERVER_BASE_URL}
            root={props => (
                <main>
                    <A href="/home">Index</A>
                    <A href="/about">About</A>
                    <Suspense>{props.children}</Suspense>
                </main>
            )}
        >
            <Route path='/' component={() => <Navigate href='/home' />} />
            <FileRoutes />
        </Router>
    );
}
