import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUsername } from "~/utils/get-username";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const username = getUsername(request, params);

  return json({ username, productName: params.productName });
}

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
