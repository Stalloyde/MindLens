# Mind Lens Short Coding Test

This repo contains code to MindLens' short coding test

## Components

### Button

The button component takes in three props:

1. type
   - Determines the priority of the button, either 'primary' or 'secondary'
   - Eg: `<Button type='primary'/>` or `<Button type='secondary'/>`
   - If not used (eg: `<Button/>`), the type prop defaults to 'primary'
2. content
   - Determines the type and position of content of the button:
     - `<Button content='leftIconText'/>` creates a button with an arrow icon on the left, and text on the right
     - `<Button content='rightIconText'/>` creates a button with text on the left, and and arrow icon on the right
     - `<Button content='text'/>` creates a button with only text
     - `<Button content='icon'/>` creates a button with only and arrow icon
   - If not used (eg: `<Button/>`), the content prop defaults to 'leftIconText'
3. notificationType
   - A prop passed down from the parent component `<Notification/>`
   - Corresponds the button colour schemes to the parent component's colour scheme
   - More details in the Notification component's section.

### Notification

The notification component takes in two props:

1. notificationType
   - Determines the colour scheme of the notification dialog to reflect the notification's semantics
     - `<Notification notificationType='info'>`
     - `<Notification notificationType='error'>`
     - `<Notification notificationType='warning'>`
     - `<Notification notificationType='success'>`
   - This prop is passed down to the Button component to synchronise colour scheme of the parent and child components
   - If not used (eg: `<Notification />`), the notificationType prop defaults to 'info'
2. notificationContent
   - Determines the contents of the dialog:
     - `<Notification notificationContent='all'>` creates a dialog with title, subtext and call to action buttons
     - `<Notification notificationContent='titleContent'>` creates a dialog with title and subtext
     - `<Notification notificationContent='title'>` creates a dialog with only title
     - `<Notification notificationContent='content'>` creates a dialog with only subtext
   - If not used (eg: `<Notification />`), the notificationContent prop defaults to 'all'

## Proposed Testing

### Unit Tests

Snapshot tests can be useful to ensure components are rendered correctly based on props passed to it. This applies to both Button and Notification components.
Ensure every variation of each component is tested:

- Variations for Button Component:
  - `<Button type='primary'/>`
  - `<Button type='secondary'/>`
  - `<Button content='leftIconText'/>`
  - `<Button content='rightIconText'/>`
  - `<Button content='text'/>`
  - `<Button content='icon'/>`
  - `<Button/>`
- Variations for Notification Component:
  - `<Notification notificationContent='all'>`
  - `<Notification notificationContent='titleContent'>`
  - `<Notification notificationContent='title'>`
  - `<Notification notificationContent='content'>`
  - `<Notification notificationType='info'>`
  - `<Notification notificationType='error'>`
  - `<Notification notificationType='warning'>`
  - `<Notification notificationType='success'>`
  - `<Notification />`)

The button component in this exercise does not have an event listener attached to it. This is unlikely the case in a real project, hence, writing a test for the event listener's callback function would be useful.

The close icon in this exercise does not have an event listener attached to it. This is unlikely the case in a real project, hence, writing a test to check if the dialog is closed on icon click would be useful.

### Coded Components Match Figma & Consistency of Components Across Apps/Platforms

- Figma's developer mode enables quick visiblity of components' styling specifications. Developers can visually compare the rendered UI component to design specifications.
- Storybook.js has a variety of add-on tools that aid visual comparison. These can be used concurrently with Figma
- Visual comparison could prone to human-error due to its manual nature. Automated measures such as <a href='https://www.hypermatic.com/pixelay/'> Pixelay </a> may be worth exploring

### Coded Component Maintains Consistency When Changes Are Made To Other Components During Further Releases

When changes are made to other components, snapshot tests described above should provide sufficient coverage to ensure the Button and Notification components remain consistent.

However in the case of snapshot test failure, details on test-breaking changes are not provided. Storybook.js has a native feature called <a href='https://storybook.js.org/docs/writing-tests/visual-testing'> visual testing </a> that does and is worth looking into.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compiple and run on Storybook.js

```sh
npm run storybook
```

### Icons from :

<a href='https://www.svgrepo.com'/>www.svgrepo.com</a>

COLLECTION: Smoothie Line Icons
LICENSE: CC Attribution License
AUTHOR: Luka Marr

COLLECTION: Solar Bold Icons
LICENSE: CC Attribution License
AUTHOR: Solar Icons

COLLECTION: Yandex UI Filled Icons
LICENSE: MLP License
AUTHOR: Yandex

COLLECTION: Industrial Sharp Filled UI Icons
LICENSE: MIT License
AUTHOR: Siemens

COLLECTION: Element Plus Line Interface Icons
LICENSE: MIT License
AUTHOR: element-plus

COLLECTION: Xnix Circular Interface Icons
LICENSE: CC Attribution License
AUTHOR: Ankush Syal
