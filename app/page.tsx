import { Suspense } from "react";
import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";
import Counter from "./components/Counter";

export default function Page() {
  return (
    <div>
      <ClientComponent>
        <Counter />
        <Suspense fallback={<p>Loading...</p>}>
          <ServerComponent />
        </Suspense>
      </ClientComponent>
    </div>
  );
}
