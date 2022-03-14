<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/twocatmoon/react-use-konami-code">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">React Konami Code Hook</h3>

  <p align="center">
    Call a function when a sequence of key presses is detected.
    <br />
    <a href="https://twocatmoon.github.io/react-use-konami-code"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/twocatmoon/react-use-konami-code/issues">Report Bug</a>
    ·
    <a href="https://github.com/twocatmoon/react-use-konami-code/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Use the `useKonamiCode` hook to call a function when a sequence of key presses is detected:

```tsx
useKonamiCode(
  () => alert('Custom code activated.'), 
  { sequence: [ 'a', 'b', 'x', 'y' ] }
)
```

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [TypeDoc](https://typedoc.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- INSTALLATION -->
## Installation

1. Install from NPM
   ```sh
   npm i @twocatmoon/react-use-konami-code
   ```
2. Include in your project
   ```ts
   import { useKonamiCode } from '@twocatmoon/react-use-konami-code'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_Please refer to the [Documentation](https://twocatmoon.github.io/react-use-konami-code)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter - [@twocatmoon](https://twitter.com/twocatmoon)

Project Link - [https://github.com/twocatmoon/react-use-konami-code](https://github.com/twocatmoon/react-use-konami-code)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/twocatmoon/react-use-konami-code.svg?style=for-the-badge
[contributors-url]: https://github.com/twocatmoon/react-use-konami-code/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/twocatmoon/react-use-konami-code.svg?style=for-the-badge
[forks-url]: https://github.com/twocatmoon/react-use-konami-code/network/members
[stars-shield]: https://img.shields.io/github/stars/twocatmoon/react-use-konami-code.svg?style=for-the-badge
[stars-url]: https://github.com/twocatmoon/react-use-konami-code/stargazers
[issues-shield]: https://img.shields.io/github/issues/twocatmoon/react-use-konami-code.svg?style=for-the-badge
[issues-url]: https://github.com/twocatmoon/react-use-konami-code/issues
[license-shield]: https://img.shields.io/github/license/twocatmoon/react-use-konami-code.svg?style=for-the-badge
[license-url]: https://github.com/twocatmoon/react-use-konami-code/blob/master/LICENSE