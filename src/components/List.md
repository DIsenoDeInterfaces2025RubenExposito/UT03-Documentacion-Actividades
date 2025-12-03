# List Component

The `List` component is a reusable UI element designed to display an item, such as an actor or a movie character, with an image, a name, and a description. It is accessible and supports highlighting items associated with highly-rated movies.

## Props

| Prop Name  | Type        | Required | Description                                                                                        |
| :--------- | :---------- | :------- | :------------------------------------------------------------------------------------------------- |
| `foto`     | `string`    | Yes      | The URL of the image to display.                                                                   |
| `nombre`   | `string`    | Yes      | The name of the item (e.g., actor's name).                                                         |
| `esNota10` | `boolean`   | No       | If `true`, highlights the name in red and adds a label indicating it is from a highly-rated movie. |
| `children` | `ReactNode` | Yes      | The content to display as the description or biography.                                            |

## Usage

```jsx
import List from "./components/List";

function Example() {
  return (
    <List
      foto="https://example.com/actor.jpg"
      nombre="John Doe"
      esNota10={true}
    >
      John Doe is a famous actor known for his roles in...
    </List>
  );
}
```

## Accessibility

- The component uses semantic HTML (`article`, `figure`, `header`).
- It includes `aria-label` to provide context to screen readers, especially when `esNota10` is true.
- The image has an `alt` attribute describing the content.
- It is focusable via `tabIndex="0"`.
