# Not-P5.js
A reverse-engineered version of P5.js created using TypeScript without viewing any of the P5.js source code.
<br>
This exists solely as practice and is not worth using over the real P5.js.
<br>
<strong>Really, don't use this.</strong>

## Build Instructions
The transpiled TypeScript is already provided in example/lib/notP5.js but can still be built using the TypeScript in /src.

1. Install the TypeScript Compiler:
```bash
npm install tsc
```
2. In the root directory of the project:
```bash
tsc
```

## Current Development
The following features are currently being developed:
- [ ] Vector methods
    - [ ] toString()
    - [x] set()
    - [x] copy()
    - [x] add()
    - [ ] rem()
    - [x] sub()
    - [x] mult()
    - [x] div()
    - [x] mag()
    - [x] magSq()
    - [ ] dot()
    - [ ] cross()
    - [ ] dist()
    - [ ] normalize()
    - [ ] limit()
    - [ ] setMag()
    - [ ] heading()
    - [ ] setHeading()
    - [ ] rotate()
    - [ ] angleBetween()
    - [ ] lerp()
    - [ ] reflect()
    - [ ] array()
    - [ ] equals()
    - [ ] fromAngle()
    - [ ] fromAngles()
    - [ ] random2D()


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
