import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  /**
   * Check if the platform is a browser.
   */
  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Check if the platform is a server.
   */
  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  /**
   * Run a callback only if the environment is a browser.
   * @param callback The callback to run.
   */
  browser(callback: () => void) {
    if (this.isBrowser) {
      callback();
    }
  }
}
