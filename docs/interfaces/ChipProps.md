# Interface: ChipProps

## Properties

### className

• `Optional` **className**: `string`

Additional class names

#### Defined in

[src/components/Chip/index.tsx:69](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L69)

___

### id

• `Optional` **id**: `string`

The id of the component

#### Defined in

[src/components/Chip/index.tsx:77](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L77)

___

### internalRef

• `Optional` **internalRef**: `LegacyRef`<`HTMLSpanElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

[src/components/Chip/index.tsx:81](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L81)

___

### onCloseIconClick

• `Optional` **onCloseIconClick**: `MouseEventHandler`<`MouseEvent`\>

The function to be called when the close icon is clicked

#### Defined in

[src/components/Chip/index.tsx:73](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L73)

___

### shape

• `Optional` **shape**: ``"pill"`` \| ``"rounded"``

The shape of the chip

**`Default`**

```ts
rounded
```

**`Example`**

```tsx
<Chip shape='pill' />
```

#### Defined in

[src/components/Chip/index.tsx:56](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L56)

___

### size

• `Optional` **size**: ``"sm"`` \| ``"md"`` \| ``"lg"``

The rendering size

**`Default`**

```ts
md
```

**`Example`**

```tsx
<Chip size='sm' />
```

#### Defined in

[src/components/Chip/index.tsx:46](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L46)

___

### text

• **text**: `string`

The text to be displayed

#### Defined in

[src/components/Chip/index.tsx:36](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L36)

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"``

The variant of the chip

**`Default`**

```ts
neutral
```

**`Example`**

```tsx
<Chip variant='primary' />
```

#### Defined in

[src/components/Chip/index.tsx:65](https://github.com/emranffl/next-core-ui/blob/81afa89/src/components/Chip/index.tsx#L65)
