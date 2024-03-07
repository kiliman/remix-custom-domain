# Remix Custom Domains

Remix does not support URL rewriting due to React Router. The URL in the browser
bar must match your route configuration.

In this example, the routing structure is `/:username/p/:productName`. We want
the user to map a custom domain in place of `username`.

In order to do this in Remix, we'll have to use the [Optional Segments](https://remix.run/docs/en/main/file-conventions/routes#optional-segments) feature.

So our route is `($username).p.$productName.tsx`. In our loader, we then get
the username from either the `params` object, or from the request hostname.
