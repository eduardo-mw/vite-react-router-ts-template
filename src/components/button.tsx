import { ReactNode } from "react";

export default function Button(
    props: { text: string; onClick: () => void; children?: ReactNode }
) {
  return <button onClick={props.onClick}>{props.text} {props.children}</button>;
}
