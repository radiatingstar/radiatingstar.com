// TODO: How to move this file into the testing module?

// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require("react")
// eslint-disable-next-line no-undef
const gatsby = jest.requireActual("gatsby")
module.exports = {
  ...gatsby,
  // eslint-disable-next-line no-undef
  graphql: jest.fn(),
  // eslint-disable-next-line no-undef
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  // eslint-disable-next-line no-undef
  StaticQuery: jest.fn(),
  // eslint-disable-next-line no-undef
  useStaticQuery: jest.fn(),
}
