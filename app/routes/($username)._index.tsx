import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { getUsername } from "~/utils/get-username";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const username = getUsername(request, params);
  return json({ username });
}

export default function Index() {
  const { username } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to the {username} store!</h1>
      <ul>
        <Link to="/p/cool-product">Check out a product</Link>
      </ul>
    </div>
  );
}
