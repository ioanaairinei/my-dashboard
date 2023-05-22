export const changeTheme = (theme: string) => {
  const customPropertiesToBeChanged = getCSSCustomPropNames().filter(
    (customProp: string) => customProp.startsWith("--current")
  );

  customPropertiesToBeChanged.forEach((prop) => {
    document.documentElement.style.setProperty(
      prop,
      `var(--${theme}${prop.substring(9)})`
    );
  });
};

const getCSSCustomPropNames = () =>
  [...document.styleSheets].filter(isSameDomain).reduce(
    (accArray: any[], sheet: CSSStyleSheet) =>
      accArray.concat(
        [...sheet.cssRules]
          .filter(isStyleRule)
          .reduce((propValueArray: any[], rule: CSSRule) => {
            // @ts-ignore
            const altProps = [...rule.styleMap.entries()]
              .filter(([propName]) => propName.indexOf("--") === 0)
              .map((entry) => entry[0]);

            return [...propValueArray, ...altProps];
          }, [])
      ),
    []
  );

const isSameDomain = (styleSheet: CSSStyleSheet) => {
  if (!styleSheet.href) {
    return true;
  }

  return styleSheet.href.indexOf(window.location.origin) === 0;
};

const isStyleRule = (rule: CSSRule) =>
  rule.constructor.name === CSSStyleRule.name;
