[next-core-ui](../README.md) / [Exports](../modules.md) / BadgeProps

# Interface: BadgeProps

## Table of contents

### Properties

- [className](BadgeProps.md#classname)
- [icon](BadgeProps.md#icon)
- [id](BadgeProps.md#id)
- [internalRef](BadgeProps.md#internalref)
- [text](BadgeProps.md#text)
- [variant](BadgeProps.md#variant)

## Properties

### className

• `Optional` **className**: `string`

The class names for the badge component

#### Defined in

src/components/Badge/index.tsx:49

___

### icon

• `Optional` **icon**: [`Icon`](../modules.md#icon)

Icon props {} to render an icon inside the button,

**`See`**

`Icon` component

#### Defined in

src/components/Badge/index.tsx:45

___

### id

• `Optional` **id**: `string`

The id for the badge component

#### Defined in

src/components/Badge/index.tsx:53

___

### internalRef

• `Optional` **internalRef**: `LegacyRef`\<`HTMLSpanElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

src/components/Badge/index.tsx:57

___

### text

• **text**: `Object`

The text to display on the badge

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `className?` | `string` | The class names for the badge text |
| `value` | `string` | The text to display on the badge |

#### Defined in

src/components/Badge/index.tsx:28

___

### variant

• `Optional` **variant**: ``"success"`` \| ``"primary"`` \| ``"secondary"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"``

The visual variant of the badge,

**`See`**

`BADGE_VARIANTS` enum

#### Defined in

src/components/Badge/index.tsx:41
