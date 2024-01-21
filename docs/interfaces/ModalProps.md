# Interface: ModalProps

## Properties

### backdropVisibility

• `Optional` **backdropVisibility**: `boolean`

The visibility state of the backdrop

**`Default`**

`true`

#### Defined in

app/library/src/components/Modal/index.tsx:42

___

### children

• **children**: `ReactNode` \| `ReactNode`[]

The content of the modal

**`Example`**

```tsx
<Modal>
 <div>Heading</div>
 <div>Content</div>
 <div>Footer</div>
</Modal>
```

#### Defined in

app/library/src/components/Modal/index.tsx:29

___

### className

• `Optional` **className**: `string`

The classes of the modal

#### Defined in

app/library/src/components/Modal/index.tsx:65

___

### closeButtonVisibility

• `Optional` **closeButtonVisibility**: `boolean`

The visibility state of the close button

**`Default`**

`true`

#### Defined in

app/library/src/components/Modal/index.tsx:57

___

### closeOnExternalClick

• `Optional` **closeOnExternalClick**: `boolean`

Disposing of the modal interface on external interaction

**`Default`**

`true`

#### Defined in

app/library/src/components/Modal/index.tsx:74

___

### containerClassName

• `Optional` **containerClassName**: `string`

The classes of the modal container

#### Defined in

app/library/src/components/Modal/index.tsx:61

___

### onClose

• `Optional` **onClose**: () => `void`

#### Type declaration

▸ (): `void`

The function to be called when the modal is closed

##### Returns

`void`

#### Defined in

app/library/src/components/Modal/index.tsx:69

___

### setVisibility

• **setVisibility**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

The function to set the visibility state of the modal

#### Defined in

app/library/src/components/Modal/index.tsx:37

___

### size

• `Optional` **size**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

The size of the modal,

**`See`**

`MODAL_SIZES` enum

**`Default`**

`md`

#### Defined in

app/library/src/components/Modal/index.tsx:47

___

### verticalAlign

• `Optional` **verticalAlign**: ``"center"`` \| ``"top"``

The vertical alignment of the modal

**`Default`**

`center`

#### Defined in

app/library/src/components/Modal/index.tsx:52

___

### visibility

• **visibility**: `boolean`

The visibility state of the modal

#### Defined in

app/library/src/components/Modal/index.tsx:33
