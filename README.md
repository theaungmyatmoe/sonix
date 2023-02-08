# Sonix

Sonix is a starter kit for building component libraries with React and Storybook.

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
git clone git@github.com:amm834/sonix.git
```

## Install dependencies

```bash
pnpm install
```

## Directory Structure

```bash
.
├── apps
│   ├── web
│   │   ├── pages
│   │   └── styles
│   └── workshop
│       ├── public
│       ├── src
│       │   └── stories
└── packages
    ├── config
    ├── eslint-config-custom
    ├── tsconfig
    └── ui
        └── components
            ├── button
            └── field

28 directories
```

- `ui` - Build your components here
- `apps` - Build your apps here
- `workshop` - Test your components here which is powered by Storybook
- `config` - Contains the configuration for the project
- `tsconfig` - Contains the tsconfig for the project
- `eslint-config-custom` - Contains the eslint configuration for the project
- `web` - Contains the demo web app for the project

## LICENSE

[MIT](LICENSE)
