const constants = {
    squished: 0.5,
    stretch: 0.5,
    size: {
      xxsmall: 1,
      xsmall: 5,
      small: 10,
      medium: 20,
      large: 30,
      xlarge: 40,
      xxlarge: 50,
      xxxlarge: 75
    }
  };
  
  export function spacing(size = '', type = 'inset') {
    if (!size) return `0px`;
    switch (type) {
      case 'inset': {
        const space = constants.size[size];
        return `${space}px`;
      }
      case 'stack': {
        const space = constants.size[size];
        return `0px 0px ${space}px 0px`;
      }
      case 'squishInset': {
        const space = constants.size[size];
        const y = space * constants.squished;
        return `${y}px ${space}px`;
      }
      case 'inline': {
        const space = constants.size[size];
        return `0px ${space}px 0px 0px`;
      }
      case 'stretchInset': {
        const space = constants.size[size];
        const x = space * constants.stretch;
        return `${space}px ${x}px`;
      }
      default:
        return `0px`;
    }
  }
  
  export function padding(size, type) {
    return spacing(size, type);
  }
  
  export function margin(size, type) {
    return spacing(size, type);
  }
  
  export function paddingStyle(size = '', type = 'inset') {
    return { padding: spacing(type, size) };
  }
  
  export function marginStyle(size = '', type = 'inset') {
    return { margin: spacing(type, size) };
  }
  