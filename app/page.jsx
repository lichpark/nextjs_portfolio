import { Text } from "@radix-ui/themes";
import { redirect } from "next/navigation";

export const metadata = {
  title: "first page",
  description: "first page for redirect",
};

export default function Home() {
  redirect("/portfolio");

  return (
    <div>
      <Text>text test</Text>
    </div>
  );
}
