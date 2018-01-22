import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  message = 'Hello World!';

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.map([{
      route: ['', 'home'],
      name: 'home',
      moduleId: PLATFORM.moduleName('home'),
      title: 'Home',
      nav: false,
      layoutView: PLATFORM.moduleName('default-layout.html')
    },
    ]);
  }
}
