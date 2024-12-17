import { Text } from "@radix-ui/themes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/portfolio");

  return (
    <div>
      <Text>text test</Text>
    </div>
  );
}
